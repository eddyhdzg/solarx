import { functions, admin } from "../config/firebase";
import { Project, ProjectPrice, FirestoreUser } from "../types";
import { funCalcMoney } from "../utils";

export const addPriceData_v0 = functions.firestore
  .document("/projects/{pid}/prices/{id}")
  .onCreate(async (_, context) => {
    const { pid, id } = context.params;

    const { sharePrice = 1 } = (await admin
      .firestore()
      .collection("projects")
      .doc(pid)
      .get()
      .then((res) => res.data())
      .catch(() => ({}))) as Project;

    const projectPrice: ProjectPrice = {
      investors: [],
      quantity: 1,
      sharesSold: 0,
      sharePrice,
    };

    return admin
      .firestore()
      .collection("projects")
      .doc(pid)
      .collection("prices")
      .doc(id)
      .update(projectPrice);
  });

export const updatePricesSharePrice_v0 = functions.https.onCall(
  async (data, context) => {
    const pid = data?.id;
    const role: FirestoreUser["role"] = context.auth?.token?.role;

    if (role !== "MODERATOR" && role !== "SUPER_USER") {
      throw new functions.https.HttpsError(
        "failed-precondition",
        "The function must be called by a moderator."
      );
    }

    const { sharePrice } = (await admin
      .firestore()
      .collection("projects")
      .doc(pid)
      .get()
      .then((res) => res.data())
      .catch(() => {
        throw new functions.https.HttpsError(
          "failed-precondition",
          "Project not found."
        );
      })) as Project;

    const prices = await admin
      .firestore()
      .collection("projects")
      .doc(pid)
      .collection("prices")
      .get()
      .then((snapshot) => {
        return snapshot.docs.map((doc) => doc.data() as ProjectPrice);
      })
      .catch(() => {
        throw new functions.https.HttpsError(
          "failed-precondition",
          "Prices not found."
        );
      });

    const unsync = prices.some((value) => value?.sharePrice !== sharePrice);

    if (!unsync) {
      throw new functions.https.HttpsError(
        "failed-precondition",
        "Share Prices are synced."
      );
    }

    return admin
      .firestore()
      .collection("projects")
      .doc(pid)
      .collection("prices")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(function (doc) {
          doc.ref.update({
            sharePrice,
          });
        });
      });
  }
);

export const updateGeneralPriceQuantity_v0 = functions.https.onCall(
  async (data, context) => {
    const pid = data?.id;
    const role: FirestoreUser["role"] = context.auth?.token?.role;

    if (role !== "MODERATOR" && role !== "SUPER_USER") {
      throw new functions.https.HttpsError(
        "failed-precondition",
        "The function must be called by a moderator."
      );
    }

    const { sharePrice, totalShares } = (await admin
      .firestore()
      .collection("projects")
      .doc(pid)
      .get()
      .then((res) => res.data())
      .catch(() => {
        throw new functions.https.HttpsError(
          "failed-precondition",
          "Project not found."
        );
      })) as Project;

    const discountsQuantity = await admin
      .firestore()
      .collection("projects")
      .doc(pid)
      .collection("prices")
      .get()
      .then((snapshot) => {
        return snapshot.docs
          .map((doc) => {
            const price = doc.data() as ProjectPrice;
            if (price.unit_amount === sharePrice) return 0;
            return price.quantity || 0;
          })
          .reduce((prev, curr) => prev + curr, 0);
      })
      .catch(() => {
        throw new functions.https.HttpsError(
          "failed-precondition",
          "BuyingOptions not found."
        );
      });

    const generalId = await admin
      .firestore()
      .collection("projects")
      .doc(pid)
      .collection("prices")
      .orderBy("unit_amount", "desc")
      .get()
      .then((snapshot) => {
        return snapshot.docs[0].id;
      })
      .catch(() => {
        throw new functions.https.HttpsError(
          "failed-precondition",
          "General buyingOption not found."
        );
      });

    const newQuantity = (totalShares || 0) - discountsQuantity;

    // Free or negative
    if (newQuantity === undefined || newQuantity < 1) {
      throw new functions.https.HttpsError(
        "failed-precondition",
        "Error while calculating the new quantity."
      );
    }

    return admin
      .firestore()
      .collection("projects")
      .doc(pid)
      .collection("prices")
      .doc(generalId)
      .update({
        quantity: newQuantity,
      });
  }
);

export const updateProjectGoal_v0 = functions.https.onCall(
  async (data, context) => {
    const pid = data?.id;
    const role: FirestoreUser["role"] = context.auth?.token?.role;

    if (role !== "MODERATOR" && role !== "SUPER_USER") {
      throw new functions.https.HttpsError(
        "failed-precondition",
        "The function must be called by a moderator."
      );
    }

    const { goal } = (await admin
      .firestore()
      .collection("projects")
      .doc(pid)
      .get()
      .then((res) => res.data())
      .catch(() => ({}))) as Project;

    const newGoal = await admin
      .firestore()
      .collection("projects")
      .doc(pid)
      .collection("prices")
      .get()
      .then((snapshot) => {
        return snapshot.docs
          .map((doc) => {
            const { quantity, unit_amount } = doc.data() as ProjectPrice;
            return funCalcMoney(quantity, unit_amount);
          })
          .reduce((prev, curr) => prev + curr, 0);
      })
      .catch(() => {
        return 0;
      });

    if (newGoal === undefined || newGoal <= 1 || newGoal === goal) {
      throw new functions.https.HttpsError(
        "failed-precondition",
        "Goal didn't change or error at calculating the goal."
      );
    }

    return admin.firestore().collection("projects").doc(pid).update({
      goal: newGoal,
    });
  }
);

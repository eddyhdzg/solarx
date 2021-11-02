import { functions, admin } from "../config/firebase";
import { Project, BuyingOption, FirestoreUser } from "../types";
import { funCalcMoney } from "../utils";

export const updateProjectGoalBuyingOptions = functions.https.onCall(
  async (data, context) => {
    const pid = data?.id;
    const role: FirestoreUser["role"] = context.auth?.token?.role;

    if (role !== "MODERATOR" && role !== "SUPER_USER") {
      throw new functions.https.HttpsError(
        "failed-precondition",
        "The function must be called by a moderator."
      );
    }

    const { sharePrice, totalShares, goal } = (await admin
      .firestore()
      .collection("projects")
      .doc(pid)
      .get()
      .then((res) => res.data())
      .catch(() => ({}))) as Project;

    const dicountAcc: number = await admin
      .firestore()
      .collection("projects")
      .doc(pid)
      .collection("buyingOptions")
      .get()
      .then((snapshot) => {
        return snapshot.docs
          .map((doc) => {
            const { discount, quantity } = doc.data() as BuyingOption;
            if (discount === 0) return 0;
            return funCalcMoney(sharePrice, quantity, discount);
          })
          .reduce((prev, curr) => prev + curr, 0);
      })
      .catch((error) => {
        console.log(error);
        return 0;
      });

    const newGoal = Math.ceil(
      (totalShares || 0) * (sharePrice || 0) - dicountAcc
    );

    // Free or negative or didn't change
    if (newGoal === undefined || newGoal <= 1 || newGoal === goal) {
      throw new functions.https.HttpsError(
        "failed-precondition",
        "Goal didn't change or error at calculating the goal."
      );
    }

    return admin.firestore().collection("projects").doc(pid).update({
      goal: newGoal,
      lastUpdate: admin.firestore.FieldValue.serverTimestamp(),
    });
  }
);

export const updateGeneralOptionQuantity = functions.https.onCall(
  async (data, context) => {
    const pid = data?.id;
    const role: FirestoreUser["role"] = context.auth?.token?.role;

    if (role !== "MODERATOR" && role !== "SUPER_USER") {
      throw new functions.https.HttpsError(
        "failed-precondition",
        "The function must be called by a moderator."
      );
    }

    const { totalShares } = (await admin
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
      .collection("buyingOptions")
      .get()
      .then((snapshot) => {
        return snapshot.docs
          .map((doc) => {
            const { discount, quantity } = doc.data() as BuyingOption;
            if (discount === 0) return 0;
            return quantity || 0;
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
      .collection("buyingOptions")
      .orderBy("discount", "asc")
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
      .collection("buyingOptions")
      .doc(generalId)
      .update({
        quantity: newQuantity,
        lastUpdate: admin.firestore.FieldValue.serverTimestamp(),
      });
  }
);

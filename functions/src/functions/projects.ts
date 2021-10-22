import { functions, admin } from "../config/firebase";
import { Project, BuyingOption } from "../types";
import { funCalcMoney } from "../utils";

export const createGeneralBuyingOption = functions.firestore
  .document("/projects/{pid}")
  .onCreate(async (_, context) => {
    return admin
      .firestore()
      .collection("projects")
      .doc(context.params.pid)
      .collection("buyingOptions")
      .add({
        description: "description",
        discount: 0,
        investors: 0,
        lastUpdate: admin.firestore.FieldValue.serverTimestamp(),
        quantity: 1,
        sharesSold: 0,
        subtitle: "subtitle",
        title: "title",
      });
  });

export const updateGeneralOptionQuantity = functions.firestore
  .document("/projects/{pid}")
  .onUpdate(async (change, context) => {
    const { totalShares: pastTotalShares, goal: pastGoal } =
      change.before.data() as Project;
    const { totalShares: newTotalShares, goal: newGoal } =
      change.after.data() as Project;
    if (pastTotalShares === newTotalShares && pastGoal === newGoal) return null;

    const discountsQuantity = await admin
      .firestore()
      .collection("projects")
      .doc(context.params.pid)
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
      .catch((error) => {
        console.log(error);
        return 0;
      });

    const generalId = await admin
      .firestore()
      .collection("projects")
      .doc(context.params.pid)
      .collection("buyingOptions")
      .orderBy("discount", "asc")
      .get()
      .then((snapshot) => {
        return snapshot.docs[0].id;
      })
      .catch((error) => {
        console.log(error);
        return "";
      });

    const newQuantity = (newTotalShares || 0) - discountsQuantity;

    if (newQuantity === undefined || newQuantity <= 1) {
      return null;
    }

    return admin
      .firestore()
      .collection("projects")
      .doc(context.params.pid)
      .collection("buyingOptions")
      .doc(generalId)
      .update({
        quantity: newQuantity,
        lastUpdate: admin.firestore.FieldValue.serverTimestamp(),
      });
  });

export const updateProjectNumbers = functions.firestore
  .document("/projects/{pid}")
  .onUpdate(async (change, context) => {
    const { sharePrice: pastSharePrice, totalShares: pastTotalShares } =
      change.before.data() as Project;

    const { sharePrice: newSharePrice, totalShares: newTotalShares } =
      change.after.data() as Project;

    if (
      pastSharePrice === newSharePrice &&
      pastTotalShares === newTotalShares
    ) {
      return null;
    }

    const discountsAcc: number = await admin
      .firestore()
      .collection("projects")
      .doc(context.params.pid)
      .collection("buyingOptions")
      .get()
      .then((snapshot) => {
        return snapshot.docs
          .map((doc) => {
            const { discount, quantity } = doc.data() as BuyingOption;
            if (discount === 0) return 0;
            return funCalcMoney(newSharePrice, quantity, discount) || 0;
          })
          .reduce((prev, curr) => prev + curr, 0);
      })
      .catch((error) => {
        console.log(error);
        return 0;
      });

    const goal = Math.ceil(
      (newTotalShares || pastTotalShares || 0) *
        (newSharePrice || pastSharePrice || 0) -
        discountsAcc
    );

    return admin
      .firestore()
      .collection("projects")
      .doc(context.params.pid)
      .update({
        goal,
        lastUpdate: admin.firestore.FieldValue.serverTimestamp(),
      });
  });

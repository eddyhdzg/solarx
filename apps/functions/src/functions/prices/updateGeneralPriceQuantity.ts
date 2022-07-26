import * as functions from "firebase-functions";
import { db } from "../../config";
import { Project, ProjectPrice, FirestoreUser } from "solarx-types";

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

    const { basePrice, totalPanels } = (await db
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

    const discountsQuantity = await db
      .collection("projects")
      .doc(pid)
      .collection("prices")
      .get()
      .then((snapshot) => {
        return snapshot.docs
          .map((doc) => {
            const price = doc.data() as ProjectPrice;
            if (price.unit_amount === basePrice) return 0;
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

    const generalId = await db
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

    const newQuantity = (totalPanels || 0) - discountsQuantity;

    // Free or negative
    if (newQuantity === undefined || newQuantity < 1) {
      throw new functions.https.HttpsError(
        "failed-precondition",
        "Error while calculating the new quantity."
      );
    }

    return db
      .collection("projects")
      .doc(pid)
      .collection("prices")
      .doc(generalId)
      .update({
        quantity: newQuantity,
      });
  }
);

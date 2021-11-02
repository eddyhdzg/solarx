import { functions, admin } from "../config/firebase";

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

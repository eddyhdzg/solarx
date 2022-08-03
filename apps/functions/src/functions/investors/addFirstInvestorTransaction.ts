import { functions, db, serverTimestamp } from "../../config";

export const addFirstInvestorTransaction_v0 = functions.firestore
  .document("investors/{uid}/privateInvestorData/wallet")
  .onCreate((snap, context) => {
    return db
      .collection("investors")
      .doc(context.params.uid)
      .collection("investorsTransactions")
      .add({
        ...snap.data(),
        date: serverTimestamp(),
      });
  });

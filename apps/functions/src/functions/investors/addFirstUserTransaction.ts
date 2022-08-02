import { functions, db, serverTimestamp } from "../../config";

export const addFirstUserTransaction_v0 = functions.firestore
  .document("users/{uid}/privateUserData/wallet")
  .onCreate((snap, context) => {
    return db
      .collection("users")
      .doc(context.params.uid)
      .collection("userTransactions")
      .add({
        ...snap.data(),
        date: serverTimestamp(),
      });
  });

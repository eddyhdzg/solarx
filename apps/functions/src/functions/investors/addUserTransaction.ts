import { functions, db, serverTimestamp } from "../../config";

export const addUserTransaction_v0 = functions.firestore
  .document("users/{uid}/privateUserData/wallet")
  .onUpdate((change, context) => {
    return db
      .collection("users")
      .doc(context.params.uid)
      .collection("userTransactions")
      .add({
        ...change.after?.data(),
        date: serverTimestamp(),
      });
  });

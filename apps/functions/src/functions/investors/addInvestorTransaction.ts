import { functions, db, serverTimestamp } from "../../config";

export const addInvestorTransaction_v0 = functions.firestore
  .document("investors/{uid}/privateInvestorData/wallet")
  .onUpdate((change, context) => {
    return db
      .collection("investors")
      .doc(context.params.uid)
      .collection("investorsTransactions")
      .add({
        ...change.after?.data(),
        date: serverTimestamp(),
      });
  });

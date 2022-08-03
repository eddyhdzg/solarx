import { functions, db, serverTimestamp } from "../../config";
import { Investor, Timestamp } from "solarx-types";

export const createLocalInvestor_v0 = functions.firestore
  .document("/investors/{uid}")
  .onCreate(async (_, context) => {
    const { uid } = context.params;

    const newInvestor: Investor = {
      displayName: "Eddy Hernández Local",
      email: "eddyhdzg@gmail.com",
      role: "SUPER_USER",
      created: serverTimestamp() as Timestamp,
      stripeId: "cus_KfCTgT6Gt0WBvM",
    };

    const wallet = {
      cash: 0,
      panels: 0,
      sxp: 0,
      total: 0,
    };

    return db
      .collection("investors")
      .doc(uid)
      .set(newInvestor, { merge: true })
      .then(() => {
        return db
          .collection("investors")
          .doc(uid)
          .collection("privateInvestorData")
          .doc("wallet")
          .set(wallet, { merge: true });
      });
  });

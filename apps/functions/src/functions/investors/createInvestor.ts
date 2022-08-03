import { functions, db, serverTimestamp } from "../../config";
import { Investor, InvestorWallet, Timestamp } from "solarx-types";

export const createInvestor_v0 = functions.auth
  .user()
  .onCreate(async (snap) => {
    const { uid, displayName, email, photoURL } = snap;

    const newInvestor: Investor = {
      avatar: photoURL,
      displayName,
      email,
      role: "DEFAULT",
      created: serverTimestamp() as Timestamp,
    };

    const wallet: InvestorWallet = {
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

import { functions, db, serverTimestamp } from "../../config";
import { FirestoreUser, UserWallet, Timestamp } from "solarx-types";

export const createUser_v0 = functions.auth.user().onCreate(async (snap) => {
  const { uid, displayName, email, photoURL } = snap;

  const newUser: FirestoreUser = {
    avatar: photoURL,
    displayName,
    email,
    role: "DEFAULT",
    created: serverTimestamp() as Timestamp,
  };

  const wallet: UserWallet = {
    cash: 0,
    panels: 0,
    sxp: 0,
    total: 0,
  };

  return db
    .collection("users")
    .doc(uid)
    .set(newUser, { merge: true })
    .then(() => {
      return db
        .collection("users")
        .doc(uid)
        .collection("privateUserData")
        .doc("wallet")
        .set(wallet, { merge: true });
    });
});

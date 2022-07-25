import { functions, db, serverTimestamp } from "../../config";
import { FirestoreUser, Timestamp } from "solarx-types";

export const createLocalUser_v0 = functions.firestore
  .document("/users/{uid}")
  .onCreate(async (_, context) => {
    const { uid } = context.params;

    const newUser: FirestoreUser = {
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

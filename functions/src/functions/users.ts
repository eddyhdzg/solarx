import { functions, admin } from "../config/firebase";
import { UserRole, FirestoreUser, UserTransaction } from "../types";

export const createUser_v0 = functions.auth.user().onCreate((snap) => {
  const { uid, displayName, email, photoURL } = snap;

  const newUser: FirestoreUser = {
    avatar: photoURL,
    displayName,
    email,
    role: "DEFAULT",
    created: admin.firestore.FieldValue.serverTimestamp(),
  };

  const wallet = {
    cash: 0,
    stocks: 0,
    sxp: 0,
    total: 0,
  };

  return admin
    .firestore()
    .collection("users")
    .doc(uid)
    .set(newUser, { merge: true })
    .then(() => {
      return admin
        .firestore()
        .collection("users")
        .doc(uid)
        .collection("privateUserData")
        .doc("wallet")
        .set(wallet, { merge: true });
    });
});

export const updateRole_v0 = functions.firestore
  .document("users/{uid}")
  .onUpdate((change, context) => {
    const pastValue = change.before.data();
    const newValue = change.after.data();

    if (pastValue?.role === newValue.role) {
      return null;
    }

    const customClaims: { role: UserRole } = {
      role: newValue.role,
    };

    return admin.auth().setCustomUserClaims(context.params.uid, customClaims);
  });

export const addUserTransaction_v0 = functions.firestore
  .document("users/{uid}/privateUserData/{id}")
  .onWrite((change, context) => {
    const {
      cash = 0,
      stocks = 0,
      sxp = 0,
      total = 0,
    } = change.after.data() as UserTransaction;

    return admin
      .firestore()
      .collection("users")
      .doc(context.params.uid)
      .collection("userTransactions")
      .add({
        cash,
        date: admin.firestore.FieldValue.serverTimestamp(),
        stocks,
        sxp,
        total,
      });
  });

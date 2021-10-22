import { functions, admin } from "../config/firebase";
import { UserRole, FirestoreUser } from "../types";

export const createUser = functions.auth.user().onCreate((snap) => {
  const { uid, displayName, email, photoURL } = snap;

  const newUser: FirestoreUser = {
    avatar: photoURL,
    displayName,
    email,
    role: "DEFAULT",
    created: admin.firestore.FieldValue.serverTimestamp(),
    lastUpdate: admin.firestore.FieldValue.serverTimestamp(),
  };

  return admin
    .firestore()
    .collection("users")
    .doc(uid)
    .set(newUser, { merge: true });
});

export const updateRole = functions.firestore
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

import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

exports.updateRole = functions.firestore
  .document("users/{uid}")
  .onUpdate((change, context) => {
    const pastValue = change.before.data();
    const newValue = change.after.data();

    // We'll only update if the name has changed.
    // https://github.com/firebase/snippets-node/blob/58aeec56a1427aacd394f31579543883bd1f02b7/firestore/extend-with-functions/functions/index.js#L108-L132
    if (pastValue?.role === newValue.role) {
      return null;
    }

    const customClaims = {
      role: newValue.role,
    };

    return admin.auth().setCustomUserClaims(context.params.uid, customClaims);
  });

export const addUser = functions.auth.user().onCreate((user) => {
  const { uid, displayName, email, photoURL } = user;

  const newUser = {
    avatar: photoURL,
    displayName,
    email,
    role: "default",
  };

  return admin.firestore().collection("users").doc(uid).set(newUser);
});

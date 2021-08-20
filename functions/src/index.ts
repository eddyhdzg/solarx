import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

exports.updateRole = functions.firestore
  .document("users/{userId}")
  .onUpdate((change, context) => {
    const newValue = change.after.data();
    const customClaims = {
      role: newValue.role,
    };

    return admin
      .auth()
      .setCustomUserClaims(context.params.userId, customClaims)
      .then(() => {
        console.log("Done!");
      })
      .catch((error) => {
        console.log(error);
      });
  });

export const addUser = functions.auth.user().onCreate((user) => {
  const { uid, displayName, email, photoURL } = user;

  const newUser = {
    avatar: photoURL,
    uid,
    displayName,
    email,
    role: "default",
  };

  return admin.firestore().collection("users").doc(uid).set(newUser);
});

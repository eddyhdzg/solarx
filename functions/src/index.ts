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

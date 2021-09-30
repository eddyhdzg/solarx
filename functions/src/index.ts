import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { Project } from "./types";

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

    const customClaims: { role: any } = {
      role: newValue.role,
    };

    return admin.auth().setCustomUserClaims(context.params.uid, customClaims);
  });

export const addUser = functions.auth.user().onCreate((user) => {
  const { uid, displayName, email, photoURL } = user;

  const newUser: any = {
    avatar: photoURL,
    displayName,
    email,
    role: "DEFAULT",
    created: admin.firestore.FieldValue.serverTimestamp(),
  };

  return admin.firestore().collection("users").doc(uid).set(newUser);
});

export const getProject_v0 = functions.https.onCall(async (data, _) => {
  const projectId = data.id;

  if (!projectId && typeof projectId !== "string") {
    return null;
  }

  const doc = await admin
    .firestore()
    .collection("projects")
    .doc(projectId)
    .get();

  const documentData = doc.data();

  const project: Project | null =
    doc.exists && !documentData?.archived
      ? {
          id: doc.id,
          ...doc.data(),
        }
      : null;

  return project;
});

export const getProjects_v0 = functions.https.onCall(async () => {
  const projects = await admin
    .firestore()
    .collection("projects")
    .where("archived", "==", false)
    .get()
    .then((snapshot) =>
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
    .catch((error) => {
      console.log("got an error", error);
      return [];
    });

  return projects;
});

import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { Project, Discount } from "./types";

admin.initializeApp();

export const updateRole = functions.firestore
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

export const addUser = functions.auth.user().onCreate((snap) => {
  const { uid, displayName, email, photoURL } = snap;

  const newUser: any = {
    avatar: photoURL,
    displayName,
    email,
    role: "DEFAULT",
    created: admin.firestore.FieldValue.serverTimestamp(),
  };

  return admin
    .firestore()
    .collection("users")
    .doc(uid)
    .set(newUser, { merge: true });
});

export const updateProjectGoal = functions.firestore
  .document("/projects/{pid}/projectDiscounts/{did}")
  .onCreate(async (_, context) => {
    const { sharePrice = 1, totalShares = 1 } = (await admin
      .firestore()
      .collection("projects")
      .doc(context.params.pid)
      .get()
      .then((res) => {
        return res.data();
      })
      .catch(() => {
        return { sharePrice: 1, totalShares: 1 };
      })) as Project;

    const discountSum: number = await admin
      .firestore()
      .collection("projects")
      .doc(context.params.pid)
      .collection("projectDiscounts")
      .get()
      .then((snapshot) =>
        snapshot.docs
          .map((doc) => {
            const { discount = 1, quantity = 1 } = doc.data() as Discount;
            return sharePrice * quantity * (discount / 100);
          })
          .reduce((prev, curr) => prev + curr, 0)
      )
      .catch((error) => {
        console.log("got an error", error);
        return Number.MAX_SAFE_INTEGER;
      });

    const goal = Math.ceil(totalShares * sharePrice - discountSum);

    if (goal <= 1) return; // Free or negative

    return admin
      .firestore()
      .collection("projects")
      .doc(context.params.pid)
      .update({
        lastUpdate: admin.firestore.FieldValue.serverTimestamp(),
        goal,
      });
  });

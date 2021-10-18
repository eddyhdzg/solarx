/**
 * @jest-environment node
 */
import * as firebase from "@firebase/testing";
import {
  myId,
  theirId,
  myAuth,
  adminAuth,
  moderatorAuth,
  getFirestore,
  getAdminFirestore,
} from "../utils";

describe("Firestore Users Security Rules", () => {
  beforeEach(async () => {
    await firebase.clearFirestoreData({ projectId: "local" });
  });

  afterAll(async () => {
    await firebase.clearFirestoreData({ projectId: "local" });
  });

  //////////////////////////////////////////
  // allow read;
  //////////////////////////////////////////
  it("Can read a user document.", async () => {
    const db = getFirestore(null);
    const testDoc = db.collection("users").doc(theirId);
    await firebase.assertSucceeds(testDoc.get());
  });

  //////////////////////////////////////////
  // allow update: if (myDocument(userId)
  //////////////////////////////////////////
  it("Can't update user document with another uid.", async () => {
    const admin = getAdminFirestore();
    await admin.collection("users").doc(theirId).set({ displayName: "Mario" });
    const db = getFirestore(myAuth);
    const testDoc = db.collection("users").doc(theirId);
    await firebase.assertFails(testDoc.update({ displayName: "Waluigi" }));
  });

  it("Can update user document with same uid.", async () => {
    const admin = getAdminFirestore();
    await admin.collection("users").doc(myId).set({ displayName: "Mario" });
    const db = getFirestore(myAuth);
    const testDoc = db.collection("users").doc(myId);
    await firebase.assertSucceeds(testDoc.update({ displayName: "Waluigi" }));
  });

  //////////////////////////////////////////
  // allow update: updateOnlyFields(['anonymous','avatar','displayName']));
  //////////////////////////////////////////
  it("Can't update protected fields of a user document.", async () => {
    const admin = getAdminFirestore();
    await admin.collection("users").doc(myId).set({ role: "DEFAULT" });
    const db = getFirestore(myAuth);
    const testDoc = db.collection("users").doc(myId);
    await firebase.assertFails(testDoc.update({ role: "BETA" }));
  });

  it("Can update allowed fields of a user document.", async () => {
    const admin = getAdminFirestore();
    await admin.collection("users").doc(myId).set({
      anonymous: true,
      avatar: "www.google.com",
      displayName: "anonymous",
    });
    const db = getFirestore(myAuth);
    const testDoc = db.collection("users").doc(myId);
    await firebase.assertSucceeds(
      testDoc.update({
        anonymous: false,
        avatar: "www.nintendo.com",
        displayName: "Mario",
      })
    );
  });

  //////////////////////////////////////////
  // allow update: if (isOneOfRoles(['MODERATOR', 'SUPER_USER']) && updateOnlyFields(['role']));
  //////////////////////////////////////////
  it("Can't update protected fields of a user document even if admin.", async () => {
    const admin = getAdminFirestore();
    await admin.collection("users").doc(myId).set({
      avatar: "www.google.com",
      displayName: "Waluigi",
      role: "DEFAULT",
    });
    const db = getFirestore(adminAuth);
    const testDoc = db.collection("users").doc(myId);
    await firebase.assertFails(
      testDoc.update({
        avatar: "www.nintendo.com",
        displayName: "Mario",
        role: "BETA",
      })
    );
  });
});

it("Can update allowed fields of a user document if moderator", async () => {
  const admin = getAdminFirestore();
  await admin.collection("users").doc(myId).set({
    avatar: "www.google.com",
    displayName: "Waluigi",
    role: "DEFAULT",
  });
  const db = getFirestore(moderatorAuth);
  const testDoc = db.collection("users").doc(myId);
  await firebase.assertSucceeds(
    testDoc.update({
      role: "BETA",
    })
  );
});

/**
 * @jest-environment node
 */

//  https://stackoverflow.com/a/67341569

import * as firebase from "@firebase/testing";

import {
  // MY_PROJECT_ID,
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
    await firebase.clearFirestoreData({ projectId: "users" });
  });

  afterAll(async () => {
    await firebase.clearFirestoreData({ projectId: "users" });
  });
  //////////////////////////////////////////
  // Users
  //////////////////////////////////////////
  it("Can read a user document with the same ID as our user", async () => {
    const db = getFirestore(null);
    const testDoc = db.collection("users").doc(myId);
    await firebase.assertSucceeds(testDoc.get());
  });

  it("Can update to a user document with the same ID as our user", async () => {
    const admin = getAdminFirestore();
    await admin.collection("users").doc(myId).set({ displayName: "Waluigi" });
    const db = getFirestore(myAuth);
    const testDoc = db.collection("users").doc(myId);
    await firebase.assertSucceeds(testDoc.update({ displayName: "Mario" }));
  });

  it("Can't update to a user document with another ID as our user", async () => {
    const admin = getAdminFirestore();
    await admin
      .collection("users")
      .doc(theirId)
      .set({ displayName: "Waluigi" });
    const db = getFirestore(myAuth);
    const testDoc = db.collection("users").doc(theirId);
    await firebase.assertFails(testDoc.update({ displayName: "Mario" }));
  });

  it("Can update allowed fields to a user document with the same ID as our user", async () => {
    const admin = getAdminFirestore();
    await admin
      .collection("users")
      .doc(myId)
      .set({ avatar: "www.google.com", displayName: "Waluigi" });
    const db = getFirestore(myAuth);
    const testDoc = db.collection("users").doc(myId);
    await firebase.assertSucceeds(
      testDoc.update({ avatar: "www.nintendo.com", displayName: "Mario" })
    );
  });

  it("Can't update unallowed fields to a user document with the same ID as our user", async () => {
    const admin = getAdminFirestore();
    await admin.collection("users").doc(myId).set({ role: "DEFAULT" });
    const db = getFirestore(myAuth);
    const testDoc = db.collection("users").doc(myId);
    await firebase.assertFails(testDoc.update({ role: "BETA" }));
  });

  it("Can update allowed fields to a user document if moderator", async () => {
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

  it("Can't update allowed fields to a user document if admin", async () => {
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

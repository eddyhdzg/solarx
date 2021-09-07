/**
 * @jest-environment node
 */

//  https://stackoverflow.com/a/67341569

import * as firebase from "@firebase/testing";

import {
  MY_PROJECT_ID,
  myId,
  theirId,
  myAuth,
  adminAuth,
  moderatorAuth,
  getFirestore,
  getAdminFirestore,
} from "./utils";

beforeEach(async () => {
  await firebase.clearFirestoreData({ projectId: MY_PROJECT_ID });
});

afterAll(async () => {
  await firebase.clearFirestoreData({ projectId: MY_PROJECT_ID });
});

describe("Firestore Security Rules", () => {
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
    await admin.collection("users").doc(myId).set({ role: "default" });
    const db = getFirestore(myAuth);
    const testDoc = db.collection("users").doc(myId);
    await firebase.assertFails(testDoc.update({ role: "beta" }));
  });

  it("Can update allowed fields to a user document if moderator", async () => {
    const admin = getAdminFirestore();
    await admin.collection("users").doc(myId).set({
      avatar: "www.google.com",
      displayName: "Waluigi",
      role: "default",
    });
    const db = getFirestore(moderatorAuth);
    const testDoc = db.collection("users").doc(myId);
    await firebase.assertSucceeds(
      testDoc.update({
        avatar: "www.nintendo.com",
        displayName: "Mario",
        role: "beta",
      })
    );
  });

  it("Can't update allowed fields to a user document if admin", async () => {
    const admin = getAdminFirestore();
    await admin.collection("users").doc(myId).set({
      avatar: "www.google.com",
      displayName: "Waluigi",
      role: "default",
    });
    const db = getFirestore(adminAuth);
    const testDoc = db.collection("users").doc(myId);
    await firebase.assertFails(
      testDoc.update({
        avatar: "www.nintendo.com",
        displayName: "Mario",
        role: "beta",
      })
    );
  });

  //////////////////////////////////////////
  // Projects
  //////////////////////////////////////////
  it("Can read a project if is public", async () => {
    const db = getFirestore(null);

    const testQuery = db.collection("projects").where("archived", "==", false);

    await firebase.assertSucceeds(testQuery.get());
  });

  it("Can't read a project if is not public", async () => {
    const db = getFirestore(null);
    const testQuery = db.collection("projects").where("archived", "==", true);
    await firebase.assertFails(testQuery.get());
  });

  it("Can read a project if is not public and is an admin", async () => {
    const db = getFirestore(adminAuth);
    const testQuery = db.collection("projects").where("archived", "==", true);
    await firebase.assertSucceeds(testQuery.get());
  });

  it("Can't read all projects", async () => {
    const db = getFirestore(null);
    const testQuery = db.collection("projects");
    await firebase.assertFails(testQuery.get());
  });

  it("Can read all projects if admin", async () => {
    const db = getFirestore(adminAuth);
    const testQuery = db.collection("projects");
    await firebase.assertSucceeds(testQuery.get());
  });

  it("Can read a single public project", async () => {
    const admin = getAdminFirestore();
    const projectId = "public_project";
    const setupDoc = admin.collection("projects").doc(projectId);
    await setupDoc.set({ archived: false });
    const db = getFirestore(null);
    const testRead = db.collection("projects").doc(projectId);
    await firebase.assertSucceeds(testRead.get());
  });

  it("Doesn't allow a user to edit a project", async () => {
    const admin = getAdminFirestore();
    const projectId = "public_project";

    await admin.collection("projects").doc(projectId).set({ name: "before" });

    const db = getFirestore(adminAuth);

    const testDoc = db.collection("projects").doc(projectId);
    await firebase.assertFails(testDoc.update({ content: "after" }));
  });

  it("Allow a moderator to edit a project", async () => {
    const admin = getAdminFirestore();
    const projectId = "public_project";

    await admin.collection("projects").doc(projectId).set({ name: "before" });

    const db = getFirestore(moderatorAuth);

    const testDoc = db.collection("projects").doc(projectId);
    await firebase.assertSucceeds(testDoc.update({ content: "after" }));
  });
});

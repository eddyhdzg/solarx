/**
 * @jest-environment node
 */

//  https://stackoverflow.com/a/67341569

import * as firebase from "@firebase/testing";

import {
  // MY_PROJECT_ID,
  adminAuth,
  moderatorAuth,
  getFirestore,
  getAdminFirestore,
} from "../utils";

describe("Firestore Projects Security Rules", () => {
  beforeEach(async () => {
    await firebase.clearFirestoreData({ projectId: "projects" });
  });

  afterAll(async () => {
    await firebase.clearFirestoreData({ projectId: "projects" });
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

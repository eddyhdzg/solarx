/**
 * @jest-environment node
 */
import * as firebase from "@firebase/testing";
import {
  moderatorAuth,
  getFirestore,
  getAdminFirestore,
  projectId,
} from "../utils";

describe("Firestore Projects Security Rules", () => {
  beforeEach(async () => {
    await firebase.clearFirestoreData({ projectId: "local" });
  });

  afterAll(async () => {
    await firebase.clearFirestoreData({ projectId: "local" });
  });

  //////////////////////////////////////////
  // allow update: if isOneOfRoles(['MODERATOR', 'SUPER_USER']);
  //////////////////////////////////////////
  it("Don't allow a normal user to create a project", async () => {
    const db = getFirestore(null);
    const testDoc = db.collection("projects").doc(projectId);
    await firebase.assertFails(testDoc.set({ content: "after" }));
  });

  it("Don't allow a normal user to edit a project", async () => {
    const admin = getAdminFirestore();
    await admin.collection("projects").doc(projectId).set({ name: "before" });
    const db = getFirestore(null);
    const testDoc = db.collection("projects").doc(projectId);
    await firebase.assertFails(testDoc.update({ content: "after" }));
  });

  it("Allow a moderator to add a project", async () => {
    const db = getFirestore(moderatorAuth);
    const testCol = db.collection(
      "projects"
    ) as firebase.firestore.CollectionReference;
    await firebase.assertSucceeds(testCol.add({ content: "after" }));
  });

  it("Allow a moderator to edit a project", async () => {
    const db = getFirestore(moderatorAuth);
    const testDoc = db.collection("projects").doc(projectId);
    await firebase.assertSucceeds(testDoc.update({ content: "after" }));
  });
});

/**
 * @jest-environment node
 */
import * as firebase from "@firebase/testing";
import {
  moderatorAuth,
  getFirestore,
  projectId,
  getAdminFirestore,
  projectBuyingOptionId,
} from "../utils";
import {
  correctCreateProjectBuyingOption,
  updateCreateProjectBuyingOption,
} from "../shemas";

describe("Firestore Projects Security Rules", () => {
  beforeEach(async () => {
    await firebase.clearFirestoreData({ projectId: "local" });
  });

  afterAll(async () => {
    await firebase.clearFirestoreData({ projectId: "local" });
  });

  //////////////////////////////////////////
  // allow create: if (isOneOfRoles(['MODERATOR', 'SUPER_USER']));
  //////////////////////////////////////////
  it("Don't allow a normal user to create a project buying option", async () => {
    const db = getFirestore(null);
    const testCol = db
      .collection("projects")
      .doc(projectId)
      .collection("buyingOptions") as firebase.firestore.CollectionReference;
    await firebase.assertFails(testCol.add(correctCreateProjectBuyingOption));
  });

  it("Don't allow a normal user to update a project buying option", async () => {
    const db = getFirestore(null);
    const testDoc = db
      .collection("projects")
      .doc(projectId)
      .collection("buyingOptions")
      .doc(projectBuyingOptionId) as firebase.firestore.DocumentReference;
    await firebase.assertFails(testDoc.update(updateCreateProjectBuyingOption));
  });

  it("Allow a moderator to create a project buying option", async () => {
    const db = getFirestore(moderatorAuth);
    const testCol = db
      .collection("projects")
      .doc(projectId)
      .collection("buyingOptions") as firebase.firestore.CollectionReference;
    await firebase.assertSucceeds(
      testCol.add(correctCreateProjectBuyingOption)
    );
  });

  it("Allow a moderator to update a project buying option", async () => {
    const admin = getAdminFirestore();
    await admin
      .collection("projects")
      .doc(projectId)
      .collection("buyingOptions")
      .doc(projectBuyingOptionId)
      .set(correctCreateProjectBuyingOption);
    const db = getFirestore(moderatorAuth);
    const testDoc = db
      .collection("projects")
      .doc(projectId)
      .collection("buyingOptions")
      .doc(projectBuyingOptionId) as firebase.firestore.DocumentReference;
    await firebase.assertSucceeds(
      testDoc.update(updateCreateProjectBuyingOption)
    );
  });

  //////////////////////////////////////////
  // allow create: if (isOneOfRoles(['MODERATOR', 'SUPER_USER']));
  //////////////////////////////////////////
  it("Don't allow moderator to create a project buying option with unprotected values", async () => {
    const db = getFirestore(moderatorAuth);
    const testCol = db
      .collection("projects")
      .doc(projectId)
      .collection("buyingOptions") as firebase.firestore.CollectionReference;
    await firebase.assertFails(testCol.add({ unprotected: null }));
  });

  it("Don't allow moderator to update a project buying option with unprotected values", async () => {
    const db = getFirestore(moderatorAuth);
    const testDoc = db
      .collection("projects")
      .doc(projectId)
      .collection("buyingOptions")
      .doc(projectBuyingOptionId) as firebase.firestore.DocumentReference;
    await firebase.assertFails(testDoc.update({ unprotected: null }));
  });

  it("Allow moderator to create a project buying option with protected values", async () => {
    const db = getFirestore(moderatorAuth);
    const testCol = db
      .collection("projects")
      .doc(projectId)
      .collection("buyingOptions") as firebase.firestore.CollectionReference;
    await firebase.assertSucceeds(
      testCol.add(correctCreateProjectBuyingOption)
    );
  });

  it("Allow moderator to update a project buying option with protected values", async () => {
    const admin = getAdminFirestore();
    await admin
      .collection("projects")
      .doc(projectId)
      .collection("buyingOptions")
      .doc(projectBuyingOptionId)
      .set(correctCreateProjectBuyingOption);
    const db = getFirestore(moderatorAuth);
    const testDoc = db
      .collection("projects")
      .doc(projectId)
      .collection("buyingOptions")
      .doc(projectBuyingOptionId) as firebase.firestore.DocumentReference;
    await firebase.assertSucceeds(
      testDoc.update(updateCreateProjectBuyingOption)
    );
  });
});

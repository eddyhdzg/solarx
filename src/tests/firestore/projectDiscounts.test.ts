/**
 * @jest-environment node
 */
import * as firebase from "@firebase/testing";
import {
  moderatorAuth,
  getFirestore,
  projectId,
  projectDiscountId,
  getAdminFirestore,
} from "../utils";
import {
  correctCreateProjectDiscount,
  updateCreateProjectDiscount,
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
  it("Don't allow a normal user to create a project discount", async () => {
    const db = getFirestore(null);
    const testCol = db
      .collection("projects")
      .doc(projectId)
      .collection("projectDiscounts") as firebase.firestore.CollectionReference;
    await firebase.assertFails(testCol.add(correctCreateProjectDiscount));
  });

  it("Don't allow a normal user to update a project discount", async () => {
    const db = getFirestore(null);
    const testDoc = db
      .collection("projects")
      .doc(projectId)
      .collection("projectDiscounts")
      .doc(projectDiscountId) as firebase.firestore.DocumentReference;
    await firebase.assertFails(testDoc.update(updateCreateProjectDiscount));
  });

  it("Allow a moderator to create a project discount", async () => {
    const db = getFirestore(moderatorAuth);
    const testCol = db
      .collection("projects")
      .doc(projectId)
      .collection("projectDiscounts") as firebase.firestore.CollectionReference;
    await firebase.assertSucceeds(testCol.add(correctCreateProjectDiscount));
  });

  it("Allow a moderator to update a project discount", async () => {
    const admin = getAdminFirestore();
    await admin
      .collection("projects")
      .doc(projectId)
      .collection("projectDiscounts")
      .doc(projectDiscountId)
      .set(correctCreateProjectDiscount);
    const db = getFirestore(moderatorAuth);
    const testDoc = db
      .collection("projects")
      .doc(projectId)
      .collection("projectDiscounts")
      .doc(projectDiscountId) as firebase.firestore.DocumentReference;
    await firebase.assertSucceeds(testDoc.update(updateCreateProjectDiscount));
  });

  //////////////////////////////////////////
  // allow create: if (isOneOfRoles(['MODERATOR', 'SUPER_USER']));
  //////////////////////////////////////////
  it("Don't allow moderator to create a project discount with unprotected values", async () => {
    const db = getFirestore(moderatorAuth);
    const testCol = db
      .collection("projects")
      .doc(projectId)
      .collection("projectDiscounts") as firebase.firestore.CollectionReference;
    await firebase.assertFails(testCol.add({ unprotected: null }));
  });

  it("Don't allow moderator to update a project discount with unprotected values", async () => {
    const db = getFirestore(moderatorAuth);
    const testDoc = db
      .collection("projects")
      .doc(projectId)
      .collection("projectDiscounts")
      .doc(projectDiscountId) as firebase.firestore.DocumentReference;
    await firebase.assertFails(testDoc.update({ unprotected: null }));
  });

  it("Allow moderator to create a project discount with protected values", async () => {
    const db = getFirestore(moderatorAuth);
    const testCol = db
      .collection("projects")
      .doc(projectId)
      .collection("projectDiscounts") as firebase.firestore.CollectionReference;
    await firebase.assertSucceeds(testCol.add(correctCreateProjectDiscount));
  });

  it("Allow moderator to update a project discount with protected values", async () => {
    const admin = getAdminFirestore();
    await admin
      .collection("projects")
      .doc(projectId)
      .collection("projectDiscounts")
      .doc(projectDiscountId)
      .set(correctCreateProjectDiscount);
    const db = getFirestore(moderatorAuth);
    const testDoc = db
      .collection("projects")
      .doc(projectId)
      .collection("projectDiscounts")
      .doc(projectDiscountId) as firebase.firestore.DocumentReference;
    await firebase.assertSucceeds(testDoc.update(updateCreateProjectDiscount));
  });
});

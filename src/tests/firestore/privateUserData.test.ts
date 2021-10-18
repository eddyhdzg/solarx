/**
 * @jest-environment node
 */
import * as firebase from "@firebase/testing";
import {
  myId,
  theirId,
  myAuth,
  adminAuth,
  getFirestore,
  getAdminFirestore,
} from "../utils";

describe("Firestore Private User Data Security Rules", () => {
  beforeEach(async () => {
    await firebase.clearFirestoreData({ projectId: "users" });
  });

  afterAll(async () => {
    await firebase.clearFirestoreData({ projectId: "users" });
  });

  //////////////////////////////////////////
  // allow read: if myDocumentOrAdmin(userId);
  //////////////////////////////////////////
  it("Can't read a private user data document with another uid.", async () => {
    const db = getFirestore(null);
    const testDoc = db
      .collection("users")
      .doc(theirId)
      .collection("privateUserData")
      .doc("data");
    await firebase.assertFails(testDoc.get());
  });

  it("Can read a private user data document with same uid.", async () => {
    const db = getFirestore(myAuth);
    const testDoc = db
      .collection("users")
      .doc(myId)
      .collection("privateUserData")
      .doc("data");
    await firebase.assertSucceeds(testDoc.get());
  });

  it("Can read a private user data document if admin.", async () => {
    const db = getFirestore(adminAuth);
    const testDoc = db
      .collection("users")
      .doc(theirId)
      .collection("privateUserData")
      .doc("data");
    await firebase.assertSucceeds(testDoc.get());
  });

  //   //////////////////////////////////////////
  //   // allow update: if (myDocument(userId) && updateOnlyFields(['name','lastNames']));
  //   //////////////////////////////////////////
  it("Can't update private user data document with another uid.", async () => {
    const admin = getAdminFirestore();
    await admin
      .collection("users")
      .doc(theirId)
      .collection("privateUserData")
      .doc("data")
      .set({ name: "Mario", lastNames: "Hernández Garza" });
    const db = getFirestore(null);
    const testDoc = db
      .collection("users")
      .doc(myId)
      .collection("privateUserData")
      .doc("data");
    await firebase.assertFails(
      testDoc.update({ name: "Waluigi", lastNames: "Mario" })
    );
  });

  it("Can update private user data document with same uid.", async () => {
    const admin = getAdminFirestore();
    await admin
      .collection("users")
      .doc(myId)
      .collection("privateUserData")
      .doc("data")
      .set({ name: "Mario", lastNames: "Hernández Garza" });
    const db = getFirestore(myAuth);
    const testDoc = db
      .collection("users")
      .doc(myId)
      .collection("privateUserData")
      .doc("data");
    await firebase.assertSucceeds(
      testDoc.update({ name: "Waluigi", lastNames: "Mario" })
    );
  });

  it("Can't update private user data document with same uid but protected fields.", async () => {
    const admin = getAdminFirestore();
    await admin
      .collection("users")
      .doc(theirId)
      .collection("privateUserData")
      .doc("data")
      .set({ name: "Mario", lastNames: "Hernández Garza" });
    const db = getFirestore(myAuth);
    const testDoc = db
      .collection("users")
      .doc(myId)
      .collection("privateUserData")
      .doc("data") as firebase.firestore.DocumentReference;

    await firebase.assertFails(
      testDoc.update({ otherField: "waluigi@solarx.app" })
    );
  });
});

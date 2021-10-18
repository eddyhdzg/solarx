/**
 * @jest-environment node
 */
import * as firebase from "@firebase/testing";
import { myId, theirId, myAuth, adminAuth, getFirestore } from "../utils";

describe("Firestore User Shares Data Security Rules", () => {
  beforeEach(async () => {
    await firebase.clearFirestoreData({ projectId: "local" });
  });

  afterAll(async () => {
    await firebase.clearFirestoreData({ projectId: "local" });
  });

  //////////////////////////////////////////
  // allow read: if myDocumentOrAdmin(userId);
  //////////////////////////////////////////
  it("Can't read a private user shares document with another uid.", async () => {
    const db = getFirestore(null);
    const testDoc = db
      .collection("users")
      .doc(myId)
      .collection("userShares")
      .doc(theirId);
    await firebase.assertFails(testDoc.get());
  });

  it("Can read a private user shares document with same uid.", async () => {
    const db = getFirestore(myAuth);
    const testDoc = db
      .collection("users")
      .doc(myId)
      .collection("userShares")
      .doc(myId);
    await firebase.assertSucceeds(testDoc.get());
  });

  it("Can read a private user shares document if admin.", async () => {
    const db = getFirestore(adminAuth);
    const testDoc = db
      .collection("users")
      .doc(myId)
      .collection("userShares")
      .doc(theirId);
    await firebase.assertSucceeds(testDoc.get());
  });
});

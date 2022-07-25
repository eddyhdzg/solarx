import * as firebase from "@firebase/testing";
import { UserRecord } from "firebase-functions/v1/auth";
import { addFirstUserTransaction_v0 } from "../../functions";
import { projectId, testEnv } from "../../testConfig";
import { db } from "../../config";
import { UserWallet } from "solarx-types";

describe("addFirstUserTransaction_v0", () => {
  let user: UserRecord;
  const wrapped = testEnv.wrap(addFirstUserTransaction_v0);

  beforeAll(async () => {
    user = await testEnv.auth.exampleUserRecord();
  });

  it("add first transaction to user /document/users/{uid}/userTransactions/{id}", async () => {
    const { uid } = user;

    const wallet: UserWallet = {
      cash: 0,
      panels: 0,
      sxp: 0,
      total: 0,
    };

    const snap = testEnv.firestore.makeDocumentSnapshot(
      wallet,
      `users/${uid}/privateUserData/wallet`
    );

    const { id } = await wrapped(snap, {
      params: {
        uid,
      },
    });

    const userTransactions = await db
      .collection("users")
      .doc(uid)
      .collection("userTransactions")
      .get();

    const userTransaction = await db
      .collection("users")
      .doc(uid)
      .collection("userTransactions")
      .doc(id)
      .get();

    expect(userTransactions.empty).toBeFalsy();
    expect(userTransactions.size).toBe(1);
    expect(userTransaction.data()).toEqual(
      expect.objectContaining({
        cash: 0,
        panels: 0,
        sxp: 0,
        total: 0,
      })
    );
  });

  afterAll(async () => {
    const p1 = await firebase.clearFirestoreData({ projectId });
    return Promise.all([p1]);
  });
});

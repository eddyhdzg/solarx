import * as firebase from "@firebase/testing";
import { UserRecord } from "firebase-functions/v1/auth";
import { createUser_v0 } from "../../functions";
import { projectId, testEnv } from "../../testConfig";
import { db } from "../../config";

describe("createUser_v0", () => {
  let user: UserRecord;
  const wrapped = testEnv.wrap(createUser_v0);

  beforeAll(async () => {
    user = await testEnv.auth.exampleUserRecord();
  });

  test("create user doc in /users/{uid}", async () => {
    const testData = {
      uid: user.uid,
      displayName: user.displayName || "",
      email: user.email || "",
    };

    const snap = testEnv.auth.makeUserRecord(testData);
    await wrapped(snap);

    const userRef = db.collection("users").doc(user.uid);
    const userSnapshot = await userRef.get();

    expect(userSnapshot.exists).toBeTruthy();
    expect(userSnapshot.id).toBe(user.uid);
    expect(userSnapshot.data()).toEqual(
      expect.objectContaining({
        email: user.email,
        role: "DEFAULT",
      })
    );
  });

  test("create wallet doc in /users/{uid}/privateUserData/wallet", async () => {
    const userWalletSnapshot = await db
      .collection("users")
      .doc(user.uid)
      .collection("privateUserData")
      .doc("wallet")
      .get();

    // UserWallet
    expect(userWalletSnapshot.exists).toBeTruthy();
    expect(userWalletSnapshot.id).toBe("wallet");
    expect(userWalletSnapshot.data()).toEqual({
      cash: 0,
      panels: 0,
      sxp: 0,
      total: 0,
    });
  });

  afterAll(async () => {
    const p1 = await firebase.clearFirestoreData({ projectId });
    return Promise.all([p1]);
  });
});

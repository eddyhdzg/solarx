import * as firebase from "@firebase/testing";
import { UserRecord } from "firebase-functions/v1/auth";
import { updateRole_v0 } from "../../functions";
import { projectId, testEnv } from "../../testConfig";
import { auth } from "../../config";
import { Investor } from "solarx-types";

describe("updateRole_v0", () => {
  let user: UserRecord;
  const wrapped = testEnv.wrap(updateRole_v0);

  beforeAll(async () => {
    user = await testEnv.auth.exampleUserRecord();
    await auth.createUser({ uid: user.uid });
  });

  it("update role doc ib /users/{uid}", async () => {
    const { uid } = user;

    const beforeRole: Investor = {
      role: "DEFAULT",
    };

    const afterRole: Investor = {
      role: "ADMIN",
    };

    const beforeSnap = testEnv.firestore.makeDocumentSnapshot(
      beforeRole,
      `users/${uid}`
    );

    const afterSnap = testEnv.firestore.makeDocumentSnapshot(
      afterRole,
      `users/${uid}`
    );

    const change = testEnv.makeChange(beforeSnap, afterSnap);
    await wrapped(change, {
      params: {
        uid,
      },
    });

    const { customClaims } = await auth.getUser(user.uid);
    expect(customClaims?.role).toBe("ADMIN");
  });

  afterAll(async () => {
    const p1 = await auth.deleteUser(user.uid);
    const p2 = await firebase.clearFirestoreData({ projectId });
    return Promise.all([p1, p2]);
  });
});

// https://github.com/hipdev/firebase-rules-emulator-suite-tutorial/blob/master/test/test.js
// https://github.com/hipdev/firebase-rules-emulator-suite-tutorial/blob/master/firestore.rules
import { UserRole } from "types";

const firebase = require("@firebase/testing");

export const MY_PROJECT_ID = "solarx-firebase";
export const myId = "user_abc";
export const theirId = "user_xyz";
export const adminId = "user_admin";
const moderatorId = "user_moderator";
// const superUserId = "user_superUser";

interface Auth {
  uid: string;
  email: string;
  role: UserRole;
}

export const myAuth: Auth = {
  uid: myId,
  email: "abc@gmail.com",
  role: "default",
};

export const adminAuth: Auth = {
  uid: adminId,
  email: "admin@gmail.com",
  role: "admin",
};

export const moderatorAuth: Auth = {
  uid: moderatorId,
  email: "moderator@gmail.com",
  role: "moderator",
};
// const moderatorAuth = { uid: moderatorId, email: "moderator@gmail.com", role: "moderator" };
// const superUserAuth = { uid: superUserId, email: "superUser@gmail.com", role: "superUser" };

export function getFirestore(auth: Auth | null) {
  return firebase
    .initializeTestApp({ projectId: MY_PROJECT_ID, auth: auth })
    .firestore();
}

export function getAdminFirestore() {
  return firebase.initializeAdminApp({ projectId: MY_PROJECT_ID }).firestore();
}

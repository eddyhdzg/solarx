// https://github.com/hipdev/firebase-rules-emulator-suite-tutorial/blob/master/test/test.js
// https://github.com/hipdev/firebase-rules-emulator-suite-tutorial/blob/master/firestore.rules

import { UserRole } from "types";

const firebase = require("@firebase/testing");

export const MY_PROJECT_ID = "solarx-dev";
export const myId = "user_abc";
export const theirId = "user_xyz";
export const adminId = "user_admin";
const moderatorId = "user_moderator";
export const projectId = "public_project";
export const projectBuyingOptionId = "public_project_buyingOption";
// const superUserId = "user_superUser";

interface Auth {
  uid: string;
  email: string;
  role: UserRole;
}

export const myAuth: Auth = {
  uid: myId,
  email: "abc@gmail.com",
  role: "DEFAULT",
};

export const adminAuth: Auth = {
  uid: adminId,
  email: "admin@gmail.com",
  role: "ADMIN",
};

export const moderatorAuth: Auth = {
  uid: moderatorId,
  email: "moderator@gmail.com",
  role: "MODERATOR",
};

// const superUserAuth = { uid: superUserId, email: "superUser@gmail.com", role: "SUPER_USER" };

export function getFirestore(auth: Auth | null) {
  return firebase
    .initializeTestApp({ projectId: MY_PROJECT_ID, auth: auth })
    .firestore();
}

export function getAdminFirestore() {
  return firebase.initializeAdminApp({ projectId: MY_PROJECT_ID }).firestore();
}

import * as functionsTest from "firebase-functions-test";

const projectId = "solarx-local";
process.env.GCLOUD_PROJECT = projectId;
process.env.FIRESTORE_EMULATOR_HOST = "localhost:8080";
process.env.FIREBASE_AUTH_EMULATOR_HOST = "localhost:9099";

const testEnv = functionsTest.default({
  projectId,
});

export { projectId, testEnv };

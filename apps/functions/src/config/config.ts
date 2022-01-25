import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { Stripe } from "stripe";

const stripe = new Stripe(functions.config().stripe.secret, {
  apiVersion: "2020-08-27",
});

// const projectId = "solarx-local";
// process.env.GCLOUD_PROJECT = projectId;
// process.env.FIRESTORE_EMULATOR_HOST = "localhost:8080";
// process.env.FIREBASE_AUTH_EMULATOR_HOST = "localhost:9099";

const app = admin.initializeApp();

const auth = app.auth();
const db = app.firestore();
const { serverTimestamp } = admin.firestore.FieldValue;
const { FieldValue } = admin.firestore;

export { auth, db, FieldValue, functions, serverTimestamp, stripe };

import { functions, admin } from "../config/firebase";
import { Project, ProjectPrice, FirestoreUser } from "../types";

const priceDefaultData: ProjectPrice = {
  active: true,
  billing_scheme: "per_unit",
  currency: "mxn",
  interval: null,
  interval_count: null,
  metadata: {},
  recurring: null,
  tax_behavior: "unspecified",
  tiers: null,
  tiers_mode: null,
  transform_quantity: null,
  trial_period_days: null,
  type: "one_time",
};

export const createLocalProject_v0 = functions.https.onCall(async () => {
  const projectCollectionSize = await admin
    .firestore()
    .collection("projects")
    .get()
    .then((res) => {
      return res.size;
    })
    .catch(() => {
      return 0;
    });

  const newProject: Project = {
    active: true,
    description: "project autocreated by a local project.",
    images: [
      "https://files.stripe.com/links/MDB8YWNjdF8xSUFMeHRMZ0phdDVFOG41fGZsX3Rlc3RfMVZpZ0NlNVhtaWNDQk9mZzBURWg0R2Vt00v2BcSoaF",
    ],
    metadata: {},
    name: `Local project #${projectCollectionSize + 1}`,
    role: null,
    tax_code: null,
  };

  return admin.firestore().collection("projects").add(newProject);
});

export const createLocalPrices_v0 = functions.https.onCall(async (data) => {
  const pid = data?.id;

  const generalPrice: ProjectPrice = {
    ...priceDefaultData,
    description: "General Investors",
    unit_amount: 100000,
  };

  const earlyPrice: ProjectPrice = {
    ...priceDefaultData,
    description: "5% Discount - Early Investors",
    unit_amount: 95000,
  };

  const superEarlyPrice: ProjectPrice = {
    ...priceDefaultData,
    description: "10% Discount - Super Early Investors",
    unit_amount: 90000,
  };

  const pricesRef = admin
    .firestore()
    .collection("projects")
    .doc(pid)
    .collection("prices");

  const batch = admin.firestore().batch();
  batch.set(pricesRef.doc(), { product: pid, ...generalPrice });
  batch.set(pricesRef.doc(), { product: pid, ...earlyPrice });
  batch.set(pricesRef.doc(), { product: pid, ...superEarlyPrice });

  return batch.commit();
});

export const createLocalUser_v0 = functions.firestore
  .document("/users/{uid}")
  .onCreate(async (_, context) => {
    const { uid } = context.params;

    const newUser: FirestoreUser = {
      displayName: "Eddy Hernández Local",
      email: "eddyhdzg@gmail.com",
      role: "SUPER_USER",
      created: admin.firestore.FieldValue.serverTimestamp(),
      stripeId: "cus_KfCTgT6Gt0WBvM",
    };

    const wallet = {
      cash: 0,
      stocks: 0,
      sxp: 0,
      total: 0,
    };

    return admin
      .firestore()
      .collection("users")
      .doc(uid)
      .set(newUser, { merge: true })
      .then(() => {
        return admin
          .firestore()
          .collection("users")
          .doc(uid)
          .collection("privateUserData")
          .doc("wallet")
          .set(wallet, { merge: true });
      });
  });

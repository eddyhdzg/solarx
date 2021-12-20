import { Stripe } from "stripe";
import { functions, admin } from "../config/firebase";
import {
  FirestoreUser,
  CreateCrowdfundingPayment,
  ProjectPrice,
  Project,
  UserWallet,
} from "../types";
import {
  appendUserHistory,
  updateUserSharesSummary,
  assignUserShares,
  updateUserWallet,
  updateProject,
  updateProjectPrice,
} from "../subFunctions";

const stripe = new Stripe(functions.config().stripe.secret, {
  apiVersion: "2020-08-27",
});

/**
 * When adding the payment method ID on the client,
 * this function is triggered to retrieve the payment method details.
 */
exports.addPaymentMethodDetails = functions.firestore
  .document("/users/{uid}/payment_methods/{pushId}")
  .onCreate(async (snap, _) => {
    try {
      const paymentMethodId = snap.data().id;
      const paymentMethod = await stripe.paymentMethods.retrieve(
        paymentMethodId
      );

      return snap.ref.set(paymentMethod, { merge: true });
    } catch (error) {
      throw new functions.https.HttpsError(
        "failed-precondition",
        "addPaymentMethodDetails error."
      );
    }
  });

/**
 * When a payment document is written on the client,
 * this function is triggered to create the payment in Stripe.
 *
 * @see https://stripe.com/docs/payments/save-and-reuse#web-create-payment-intent-off-session
 */

export const createCrowdfundingPayment_v0 = functions.https.onCall(
  async (data, context) => {
    const {
      payment_method,
      priceId,
      projectId,
      qty,
    }: CreateCrowdfundingPayment = data;

    if (!context.auth) {
      throw new functions.https.HttpsError(
        "permission-denied",
        "The function must be called while authenticated."
      );
    }

    if (!payment_method) {
      throw new functions.https.HttpsError(
        "permission-denied",
        "payment_method is required"
      );
    }

    if (!priceId) {
      throw new functions.https.HttpsError(
        "permission-denied",
        "priceId is required"
      );
    }

    if (!projectId) {
      throw new functions.https.HttpsError(
        "permission-denied",
        "projectId is required"
      );
    }

    if (typeof qty !== "number" || qty <= 0) {
      throw new functions.https.HttpsError(
        "permission-denied",
        "qty is required"
      );
    }

    const userDocRef = admin
      .firestore()
      .collection("users")
      .doc(context.auth?.uid || "");

    const paymentsColRef = userDocRef.collection("payments");

    const projectDocRef = admin
      .firestore()
      .collection("projects")
      .doc(projectId);

    const projectPriceDocRef = admin
      .firestore()
      .collection("projects")
      .doc(projectId)
      .collection("prices")
      .doc(priceId);

    const { name } = (await projectDocRef
      .get()
      .then((res) => res.data())
      .catch(() => {
        throw new functions.https.HttpsError(
          "cancelled",
          "Project not found in db."
        );
      })) as Project;

    const { stripeId = "" } = (await userDocRef
      .get()
      .then((res) => res.data())
      .catch(() => ({}))) as FirestoreUser;

    const description = `Crowdfund ${qty} share${
      qty > 1 ? "s" : ""
    } from ${name}`;

    const {
      currency = "mxn",
      quantity = 0,
      sharesSold = Number.MAX_SAFE_INTEGER,
      unit_amount = 0,
    } = (await projectPriceDocRef
      .get()
      .then((res) => res.data())
      .catch(() => {
        throw new functions.https.HttpsError(
          "cancelled",
          "Project not found in db."
        );
      })) as ProjectPrice;

    const amount = unit_amount * qty;
    const left = quantity - sharesSold;
    const outOfStock = Boolean(qty > left);

    if (outOfStock) {
      throw new functions.https.HttpsError(
        "cancelled",
        "Out of stock, qty is more than the stocks left."
      );
    }

    const paymentIntentData = {
      amount,
      currency,
      customer: stripeId,
      payment_method,
      off_session: false,
      confirm: true,
    };

    const { id: idempotencyKey } = await paymentsColRef.add({
      ...paymentIntentData,
      confirmation_method: "manual",
    });

    const paymentIntent = await stripe.paymentIntents.create(
      {
        description,
        ...paymentIntentData,
        confirmation_method: "manual",
        metadata: {
          priceId,
          projectId,
          qty,
          idempotencyKey,
        },
        setup_future_usage: "off_session",
        payment_method_types: ["card"],
        receipt_email: context.auth.token.email,
      },
      {
        idempotencyKey,
      }
    );
    if (paymentIntent.status === "succeeded")
      await paymentsColRef
        .doc(idempotencyKey)
        .set(paymentIntent, { merge: true });

    return { ...paymentIntent, doc: idempotencyKey };
  }
);

/**
 * When 3D Secure is performed, we need to reconfirm the payment
 * after authentication has been performed.
 *
 * @see https://stripe.com/docs/payments/accept-a-payment-synchronously#web-confirm-payment
 */
exports.confirmStripePayment_v0 = functions.firestore
  .document("users/{uid}/payments/{pushId}")
  .onUpdate(async (change, context) => {
    if (change.after.data().status === "requires_confirmation") {
      const payment = await stripe.paymentIntents.confirm(
        change.after.data().id
      );
      change.after.ref.set(payment);
    } else if (
      change.after.data().status === "succeeded" &&
      !change.after.data().metadata?.transaction
    ) {
      const { uid } = context.params;
      const { id, amount_received, description, metadata } =
        change.after.data() || {};
      const { priceId, projectId, qty: stringQty } = metadata || {};
      const qty = Number(stringQty);

      return admin
        .firestore()
        .runTransaction(async (t) => {
          const wallet = admin
            .firestore()
            .collection("users")
            .doc(uid)
            .collection("privateUserData")
            .doc("wallet");

          const userSharesProjectRef = admin
            .firestore()
            .collection("users")
            .doc(uid)
            .collection("userShares")
            .doc(projectId);

          const investors = await admin
            .firestore()
            .collection("projects")
            .doc(projectId)
            .collection("prices")
            .get()
            .then((snapshot) => {
              const ids = snapshot.docs.reduce<string[]>(
                (prev, curr) => {
                  const { investors = [] } = curr.data() as ProjectPrice;
                  return [...prev, ...investors];
                },
                [uid]
              );

              return [...new Set<string>(ids)].length;
            })
            .catch(() => {
              return 0;
            });

          const {
            cash = 0,
            stocks = 0,
            sxp = 0,
          } = (await t.get(wallet)).data() as UserWallet;

          const userSharesProject = await userSharesProjectRef.get();

          const {
            images,
            name = "",
            roi = 0,
            sharePrice = 0,
            sharesSold = 0,
            totalShares = Number.MAX_SAFE_INTEGER,
          } = (await admin
            .firestore()
            .collection("projects")
            .doc(projectId)
            .get()
            .then((res) => res.data())
            .catch(() => {
              return {};
            })) as Project;

          const newStocks = stocks + sharePrice * qty;
          const total = cash + sxp + newStocks;

          updateUserSharesSummary({
            t,
            exists: userSharesProject.exists,
            projectId,
            qty: Number(qty),
            uid,
            avatar: images?.length ? images[0] : null,
            name,
            roi,
            sharePrice,
          });

          appendUserHistory({
            t,
            uid: uid,
            amount: -amount_received,
            currency: "mxn",
            description,
            title: "Crowdfund",
          });

          updateUserWallet({
            t,
            uid,
            cash,
            stocks: newStocks,
            sxp,
            total,
          });

          updateProject({
            t,
            fundedDate: sharesSold >= totalShares,
            investors,
            projectId,
            amount: amount_received,
            qty: Number(qty),
          });

          updateProjectPrice({
            t,
            uid,
            projectId,
            priceId,
            qty,
          });
        })
        .then(() => {
          assignUserShares({
            priceId,
            projectId,
            qty: Number(qty),
            uid,
          })
            .then(async () => {
              const payment = await stripe.paymentIntents.update(id, {
                metadata: {
                  transaction: "succeeded",
                  batch: "succeeded",
                },
              });
              change.after.ref.update(payment);
            })
            .catch(async () => {
              const payment = await stripe.paymentIntents.update(id, {
                metadata: {
                  transaction: "succeeded",
                  batch: "failed",
                },
              });
              change.after.ref.update(payment);
            });
        })
        .catch(async () => {
          const payment = await stripe.paymentIntents.update(id, {
            metadata: {
              transaction: "failed",
              batch: "null",
            },
          });
          change.after.ref.update(payment);
        });
    }
  });

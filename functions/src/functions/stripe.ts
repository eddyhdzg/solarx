import { functions, admin } from "../config/firebase";
import { Stripe } from "stripe";
import {
  FirestoreUser,
  CreateCrowdfundingPayment,
  ProjectPrice,
  Project,
} from "../types";

//  const stripe = new Stripe(functions.config().stripe.secret, {
//    apiVersion: '2020-08-27',
//  });

const key =
  "sk_test_51IALxtLgJat5E8n5UJOh39yi8rwHbuplFbeHIqr0i5IXdouDkTJ46rZHe5mLj3DFECJL2d5s6i8j0iAYKwAPxpWI004JMY4Zwx";
const stripe = new Stripe(key, {
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

    const priceDocRef = admin
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

    const {
      currency = "",
      quantity = 0,
      sharesSold = 0,
      unit_amount = 0,
    } = (await priceDocRef
      .get()
      .then((res) => res.data())
      .catch(() => {
        throw new functions.https.HttpsError(
          "cancelled",
          "Price not found in db."
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

    const { stripeId = "" } = (await userDocRef
      .get()
      .then((res) => res.data())
      .catch(() => ({}))) as FirestoreUser;

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

    const description = `Crowdfund ${qty} share${
      qty > 1 ? "s" : ""
    } from ${name}`;

    const paymentIntent = stripe.paymentIntents.create(
      {
        description,
        ...paymentIntentData,
        confirmation_method: "manual",
        metadata: {
          priceId,
          projectId,
          qty,
        },
        setup_future_usage: "off_session",
      },
      {
        idempotencyKey,
      }
    );

    return paymentIntent
      .then((payment) => {
        paymentsColRef.doc(idempotencyKey).set(payment, { merge: true });
        return payment.status;
      })
      .catch(() => {
        throw new functions.https.HttpsError("cancelled", "Payment cancelled.");
      });
  }
);

/**
 * When 3D Secure is performed, we need to reconfirm the payment
 * after authentication has been performed.
 *
 * @see https://stripe.com/docs/payments/accept-a-payment-synchronously#web-confirm-payment
 */
exports.confirmStripePayment = functions.firestore
  .document("users/{uid}/payments/{pushId}")
  .onUpdate(async (change, context) => {
    if (change.after.data().status === "requires_confirmation") {
      const payment = await stripe.paymentIntents.confirm(
        change.after.data().id
      );
      change.after.ref.set(payment);
    }
  });

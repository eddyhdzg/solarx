import { functions, db, stripe } from "../../config";
import {
  FirestoreUser,
  CreateCrowdfundingPayment,
  ProjectPrice,
  Project,
} from "solarx-types";

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

    const userDocRef = db.collection("users").doc(context.auth?.uid || "");
    const paymentsColRef = userDocRef.collection("payments");
    const projectDocRef = db.collection("projects").doc(projectId);

    const projectPriceDocRef = db
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

    const description = `Crowdfund ${qty} panels${
      qty > 1 ? "s" : ""
    } from ${name}`;

    const {
      currency = "mxn",
      quantity = 0,
      panelsSold = Number.MAX_SAFE_INTEGER,
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
    const left = quantity - panelsSold;
    const outOfStock = Boolean(qty > left);

    if (outOfStock) {
      throw new functions.https.HttpsError(
        "cancelled",
        "Out of stock, qty is more than the panels left."
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

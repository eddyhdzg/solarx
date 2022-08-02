import { functions, stripe } from "../../config";

/**
 * When adding the payment method ID on the client,
 * this function is triggered to retrieve the payment method details.
 */
exports.addPaymentMethodDetails = functions.firestore
  .document("/investors/{uid}/payment_methods/{pushId}")
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

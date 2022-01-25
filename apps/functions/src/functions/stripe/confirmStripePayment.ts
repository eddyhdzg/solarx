import { Project, UserWallet, Investors } from "solarx-types";
import { functions, db, stripe } from "../../config";
import {
  appendUserHistory,
  updateUserSharesSummary,
  assignUserShares,
  updateUserWallet,
  updateProject,
  updateProjectPrice,
  updateInvestors,
} from "../../subFunctions";

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
      return change.after.ref.set(payment);
    } else if (
      change.after.data().status === "succeeded" &&
      !change.after.data().metadata?.transaction
    ) {
      const { uid } = context.params;
      const { id, amount_received, description, metadata } =
        change.after.data() || {};
      const { priceId, projectId, qty: stringQty } = metadata || {};
      const qty = Number(stringQty);

      return db
        .runTransaction(async (t) => {
          const wallet = db
            .collection("users")
            .doc(uid)
            .collection("privateUserData")
            .doc("wallet");

          const userSharesProjectRef = db
            .collection("users")
            .doc(uid)
            .collection("userShares")
            .doc(projectId);

          const newInvestors = await db
            .collection("projects")
            .doc(projectId)
            .collection("investors")
            .get()
            .then((snapshot) => {
              const ids = snapshot.docs.reduce<string[]>(
                (prev, curr) => {
                  const { ids = [] } = curr.data() as Investors;
                  return [...prev, ...ids];
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
            basePrice = 0,
            sharesSold = 0,
            totalShares = Number.MAX_SAFE_INTEGER,
          } = (await db
            .collection("projects")
            .doc(projectId)
            .get()
            .then((res) => res.data())
            .catch(() => {
              return {};
            })) as Project;

          const newStocks = stocks + basePrice * qty;
          const total = cash + sxp + newStocks;

          await updateUserSharesSummary({
            t,
            avatar: images?.length ? images[0] : null,
            basePrice,
            exists: userSharesProject.exists,
            name,
            projectId,
            quantity: Number(qty),
            roi,
            uid,
          });

          await appendUserHistory({
            t,
            uid: uid,
            amount: -amount_received,
            currency: "mxn",
            description,
            title: "Crowdfund",
          });

          await updateUserWallet({
            t,
            uid,
            cash,
            stocks: newStocks,
            sxp,
            total,
          });

          await updateProject({
            t,
            fundedDate: sharesSold >= totalShares,
            investors: newInvestors,
            projectId,
            amount: amount_received,
            qty: Number(qty),
          });

          await updateProjectPrice({
            t,
            investors: newInvestors,
            projectId,
            priceId,
            qty,
          });

          await updateInvestors({
            t,
            uid,
            projectId,
            priceId,
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
              return change.after.ref.update(payment);
            })
            .catch(async () => {
              const payment = await stripe.paymentIntents.update(id, {
                metadata: {
                  transaction: "succeeded",
                  batch: "failed",
                },
              });
              return change.after.ref.update(payment);
            });
        })
        .catch(async () => {
          const payment = await stripe.paymentIntents.update(id, {
            metadata: {
              transaction: "failed",
              batch: "null",
            },
          });
          return change.after.ref.update(payment);
        });
    }
  });

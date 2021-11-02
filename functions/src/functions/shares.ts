import { functions, admin } from "../config/firebase";
import { Project, BuyingOption, FirestoreUser, Share } from "../types";

export const createShares = functions.https.onCall(async (data, context) => {
  const pid = data?.id;
  const role: FirestoreUser["role"] = context.auth?.token?.role;
  const sharesColRef = admin.firestore().collection("shares");

  if (role !== "SUPER_USER") {
    throw new functions.https.HttpsError(
      "failed-precondition",
      "The function must be called by a super user."
    );
  }

  const shares = await admin
    .firestore()
    .collection("shares")
    .where("projectId", "==", pid)
    .limit(1)
    .get();

  if (shares.size) {
    throw new functions.https.HttpsError(
      "failed-precondition",
      `"Shares for project: ${pid} already exist"`
    );
  }

  const { sharePrice = 0, roi } = (await admin
    .firestore()
    .collection("projects")
    .doc(pid)
    .get()
    .then((res) => res.data())
    .catch(() => ({}))) as Project;

  const buyingOptions = await admin
    .firestore()
    .collection("projects")
    .doc(pid)
    .collection("buyingOptions")
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        const { discount = 0, quantity } = doc.data() as BuyingOption;

        return {
          bid: doc.id,
          auctionPrice: sharePrice - (sharePrice * discount) / 100,
          quantity,
        };
      });
    })
    .catch(() => {
      return [];
    });

  const batches: admin.firestore.WriteBatch[] = [];
  buyingOptions.forEach(({ bid, auctionPrice, quantity = 0 }) => {
    const share: Share = {
      auctionPrice,
      buyingOption: bid,
      sharePrice,
      status: "available",
      owner: null,
      projectId: pid,
      roi,
    };

    while (quantity > 0) {
      const batch = admin.firestore().batch();
      const currBatchSize = Math.min(quantity, 500);

      for (let i = 0; i < currBatchSize; i++) {
        batch.set(sharesColRef.doc(), share);
      }

      batches.push(batch);
      quantity -= currBatchSize;
    }
  });

  return await Promise.all(batches.map((batch) => batch.commit()));
});

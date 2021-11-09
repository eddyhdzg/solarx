import { functions, admin } from "../config/firebase";
import { Project, ProjectPrice, FirestoreUser, Share } from "../types";

export const createShares_v0 = functions.https.onCall(async (data, context) => {
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

  const { sharePrice = 1, roi } = (await admin
    .firestore()
    .collection("projects")
    .doc(pid)
    .get()
    .then((res) => res.data())
    .catch(() => ({}))) as Project;

  const projectPrice = await admin
    .firestore()
    .collection("projects")
    .doc(pid)
    .collection("prices")
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        const { unit_amount = 0, quantity } = doc.data() as ProjectPrice;
        return {
          priceId: doc.id,
          auctionPrice: unit_amount,
          quantity,
        };
      });
    })
    .catch(() => {
      return [];
    });

  const batches: admin.firestore.WriteBatch[] = [];

  projectPrice.forEach(({ priceId, auctionPrice, quantity = 0 }) => {
    const share: Share = {
      auctionPrice,
      sharePrice,
      status: "available",
      owner: null,
      priceId,
      projectId: pid,
      roi,
    };

    let left = quantity;

    while (left > 0) {
      const batch = admin.firestore().batch();
      const currBatchSize = Math.min(left, 500);

      for (let i = 0; i < currBatchSize; i++) {
        batch.set(sharesColRef.doc(), share);
      }

      batches.push(batch);
      left -= currBatchSize;
    }
  });

  return await Promise.all(batches.map((batch) => batch.commit()));
});

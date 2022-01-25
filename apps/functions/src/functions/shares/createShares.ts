import { functions, db } from "../../config";
import { Project, ProjectPrice, FirestoreUser, Share } from "solarx-types";

export const createShares_v0 = functions.https.onCall(async (data, context) => {
  const pid = data?.id;
  const role: FirestoreUser["role"] = context.auth?.token?.role;
  const sharesColRef = db.collection("shares");

  if (role !== "SUPER_USER") {
    throw new functions.https.HttpsError(
      "failed-precondition",
      "The function must be called by a super user."
    );
  }

  const shares = await db
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

  const { basePrice = 1, roi } = (await db
    .collection("projects")
    .doc(pid)
    .get()
    .then((res) => res.data())
    .catch(() => ({}))) as Project;

  const projectPrice = await db
    .collection("projects")
    .doc(pid)
    .collection("prices")
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        const { unit_amount, quantity } = doc.data() as ProjectPrice;
        return {
          priceId: doc.id,
          unit_amount,
          quantity,
        };
      });
    })
    .catch(() => {
      return [];
    });

  const batches: FirebaseFirestore.WriteBatch[] = [];

  projectPrice.forEach(({ priceId, unit_amount = 0, quantity = 0 }) => {
    const share: Share = {
      basePrice,
      owner: null,
      priceId,
      projectId: pid,
      roi,
      unit_amount,
      status: "available",
    };

    let left = quantity;

    while (left > 0) {
      const batch = db.batch();
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

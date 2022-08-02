import { functions, db } from "../../config";
import { Project, ProjectPrice, Investor, Panel } from "solarx-types";

export const createPanels_v0 = functions.https.onCall(async (data, context) => {
  const pid = data?.id;
  const role: Investor["role"] = context.auth?.token?.role;
  const panelsColRef = db.collection("panels");

  if (role !== "SUPER_USER") {
    throw new functions.https.HttpsError(
      "failed-precondition",
      "The function must be called by a super user."
    );
  }

  const panels = await db
    .collection("panels")
    .where("projectId", "==", pid)
    .limit(1)
    .get();

  if (panels.size) {
    throw new functions.https.HttpsError(
      "failed-precondition",
      `"Panels for project: ${pid} already exist"`
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
    const panels: Panel = {
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
        batch.set(panelsColRef.doc(), panels);
      }

      batches.push(batch);
      left -= currBatchSize;
    }
  });

  return await Promise.all(batches.map((batch) => batch.commit()));
});

import { functions, db } from "../../config";
import { Project, ProjectPrice, FirestoreUser } from "solarx-types";

export const updatePricesSharePrice_v0 = functions.https.onCall(
  async (data, context) => {
    const pid = data?.id;
    const role: FirestoreUser["role"] = context.auth?.token?.role;

    if (role !== "MODERATOR" && role !== "SUPER_USER") {
      throw new functions.https.HttpsError(
        "failed-precondition",
        "The function must be called by a moderator."
      );
    }

    const { basePrice } = (await db
      .collection("projects")
      .doc(pid)
      .get()
      .then((res) => res.data())
      .catch(() => {
        throw new functions.https.HttpsError(
          "failed-precondition",
          "Project not found."
        );
      })) as Project;

    const prices = await db
      .collection("projects")
      .doc(pid)
      .collection("prices")
      .get()
      .then((snapshot) => {
        return snapshot.docs.map((doc) => doc.data() as ProjectPrice);
      })
      .catch(() => {
        throw new functions.https.HttpsError(
          "failed-precondition",
          "Prices not found."
        );
      });

    const unsync = prices.some((value) => value?.basePrice !== basePrice);

    if (!unsync) {
      throw new functions.https.HttpsError(
        "failed-precondition",
        "Share Prices are synced."
      );
    }

    return db
      .collection("projects")
      .doc(pid)
      .collection("prices")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(function (doc) {
          return doc.ref.update({
            basePrice,
          });
        });
      })
      .catch(() => {
        throw new functions.https.HttpsError(
          "failed-precondition",
          "Error while updating db."
        );
      });
  }
);

import { functions, db } from "../../config";
import { funCalcMoney } from "../../utils";
import { Project, ProjectPrice, Investor } from "solarx-types";

export const updateProjectGoal_v0 = functions.https.onCall(
  async (data, context) => {
    const pid = data?.id;
    const role: Investor["role"] = context.auth?.token?.role;

    if (role !== "MODERATOR" && role !== "SUPER_USER") {
      throw new functions.https.HttpsError(
        "failed-precondition",
        "The function must be called by a moderator."
      );
    }

    const { goal } = (await db
      .collection("projects")
      .doc(pid)
      .get()
      .then((res) => res.data())
      .catch(() => ({}))) as Project;

    const newGoal = await db
      .collection("projects")
      .doc(pid)
      .collection("prices")
      .get()
      .then((snapshot) => {
        return snapshot.docs
          .map((doc) => {
            const { quantity, unit_amount } = doc.data() as ProjectPrice;
            return funCalcMoney(quantity, unit_amount);
          })
          .reduce((prev, curr) => prev + curr, 0);
      })
      .catch(() => {
        return 0;
      });

    if (newGoal === undefined || newGoal <= 1 || newGoal === goal) {
      throw new functions.https.HttpsError(
        "failed-precondition",
        "Goal didn't change or error at calculating the goal."
      );
    }

    return db.collection("projects").doc(pid).update({
      goal: newGoal,
    });
  }
);

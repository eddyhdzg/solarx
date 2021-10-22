import { functions, admin } from "../config/firebase";
import { Project, BuyingOption } from "../types";
import { funCalcMoney } from "../utils";

export const updateProjectGoalBuyingOptions = functions.firestore
  .document("/projects/{pid}/buyingOptions/{bid}")
  .onCreate(async (_, context) => {
    const { sharePrice, totalShares, goal } = (await admin
      .firestore()
      .collection("projects")
      .doc(context.params.pid)
      .get()
      .then((res) => res.data())
      .catch(() => ({}))) as Project;

    const dicountAcc: number = await admin
      .firestore()
      .collection("projects")
      .doc(context.params.pid)
      .collection("buyingOptions")
      .get()
      .then((snapshot) => {
        return snapshot.docs
          .map((doc) => {
            const { discount, quantity } = doc.data() as BuyingOption;
            if (discount === 0) return 0;
            return funCalcMoney(sharePrice, quantity, discount);
          })
          .reduce((prev, curr) => prev + curr, 0);
      })
      .catch((error) => {
        console.log(error);
        return 0;
      });

    const newGoal = Math.ceil(
      (totalShares || 0) * (sharePrice || 0) - dicountAcc
    );

    // Free or negative or didn't change
    if (newGoal === undefined || newGoal <= 1 || newGoal === goal) {
      return null;
    }

    return admin
      .firestore()
      .collection("projects")
      .doc(context.params.pid)
      .update({
        goal: newGoal,
        lastUpdate: admin.firestore.FieldValue.serverTimestamp(),
      });
  });

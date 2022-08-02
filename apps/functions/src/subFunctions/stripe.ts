import { db, functions, serverTimestamp, FieldValue } from "../config";
import { InvestorHistory } from "solarx-types";

interface AssignInvestorPanelsProps {
  priceId: string;
  projectId: string;
  qty: number;
  uid: string;
}

// asign investor panels under panels collection
export const assignInvestorPanels = async ({
  priceId,
  projectId,
  qty,
  uid,
}: AssignInvestorPanelsProps) => {
  return await db
    .collection("panels")
    .where("projectId", "==", projectId)
    .where("priceId", "==", priceId)
    .where("status", "==", "available")
    .limit(qty)
    .get()
    .then(async (querySnapshot) => {
      if (querySnapshot.size < qty) {
        throw new functions.https.HttpsError(
          "failed-precondition",
          "batch write error, not enough panels available."
        );
      }
      const batch = db.batch();
      querySnapshot.forEach((panels) => {
        batch.update(panels.ref, { owner: uid, status: "owned" });
      });
      return batch.commit();
    });
};

interface UpdateInvestorPanelsSummaryProps {
  t: FirebaseFirestore.Transaction;
  avatar: string | null;
  basePrice?: number;
  exists: boolean;
  name?: string;
  projectId: string;
  quantity: number;
  roi?: number;
  uid: string;
}

export const updateInvestorPanelsSummary = async ({
  t,
  avatar,
  basePrice,
  exists,
  name,
  projectId,
  quantity,
  roi,
  uid,
}: UpdateInvestorPanelsSummaryProps) => {
  const investorPanelsProjectRef = db
    .collection("investors")
    .doc(uid)
    .collection("investorPanels")
    .doc(projectId);

  if (exists) {
    t.update(investorPanelsProjectRef, {
      quantity: FieldValue.increment(quantity),
    });
  } else {
    t.create(investorPanelsProjectRef, {
      avatar,
      name,
      roi,
      basePrice,
      quantity,
    });
  }
};

interface AppendInvestorHistoryProps
  extends Pick<
    InvestorHistory,
    "amount" | "currency" | "description" | "title"
  > {
  t: FirebaseFirestore.Transaction;
  uid: string;
}

export const appendInvestorHistory = async ({
  t,
  uid,
  amount,
  currency,
  description,
  title,
}: AppendInvestorHistoryProps) => {
  const investorHistoryRef = db
    .collection("investors")
    .doc(uid)
    .collection("investorHistory")
    .doc();

  t.create(investorHistoryRef, {
    amount,
    currency,
    date: serverTimestamp(),
    description,
    title,
  });
};

interface UpdateInvestorWalletProps {
  t: FirebaseFirestore.Transaction;
  uid: string;
  cash: number;
  panels: number;
  sxp: number;
  total: number;
}

export const updateInvestorWallet = async ({
  t,
  uid,
  cash,
  panels,
  sxp,
  total,
}: UpdateInvestorWalletProps) => {
  const wallet = db
    .collection("investors")
    .doc(uid)
    .collection("privateInvestorData")
    .doc("wallet");

  return t.update(wallet, {
    cash,
    panels,
    sxp,
    total,
  });
};

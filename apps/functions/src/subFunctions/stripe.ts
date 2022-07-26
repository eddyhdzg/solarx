import { db, functions, serverTimestamp, FieldValue } from "../config";
import { UserHistory } from "solarx-types";

interface AssignUserPanelsProps {
  priceId: string;
  projectId: string;
  qty: number;
  uid: string;
}

// asign user panels under panels collection
export const assignUserPanels = async ({
  priceId,
  projectId,
  qty,
  uid,
}: AssignUserPanelsProps) => {
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

interface UpdateUserPanelsSummaryProps {
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

export const updateUserPanelsSummary = async ({
  t,
  avatar,
  basePrice,
  exists,
  name,
  projectId,
  quantity,
  roi,
  uid,
}: UpdateUserPanelsSummaryProps) => {
  const userPanelsProjectRef = db
    .collection("users")
    .doc(uid)
    .collection("userPanels")
    .doc(projectId);

  if (exists) {
    t.update(userPanelsProjectRef, {
      quantity: FieldValue.increment(quantity),
    });
  } else {
    t.create(userPanelsProjectRef, {
      avatar,
      name,
      roi,
      basePrice,
      quantity,
    });
  }
};

interface AppendUserHistoryProps
  extends Pick<UserHistory, "amount" | "currency" | "description" | "title"> {
  t: FirebaseFirestore.Transaction;
  uid: string;
}

export const appendUserHistory = async ({
  t,
  uid,
  amount,
  currency,
  description,
  title,
}: AppendUserHistoryProps) => {
  const userHistoryRef = db
    .collection("users")
    .doc(uid)
    .collection("userHistory")
    .doc();

  t.create(userHistoryRef, {
    amount,
    currency,
    date: serverTimestamp(),
    description,
    title,
  });
};

interface UpdateUserWalletProps {
  t: FirebaseFirestore.Transaction;
  uid: string;
  cash: number;
  panels: number;
  sxp: number;
  total: number;
}

export const updateUserWallet = async ({
  t,
  uid,
  cash,
  panels,
  sxp,
  total,
}: UpdateUserWalletProps) => {
  const wallet = db
    .collection("users")
    .doc(uid)
    .collection("privateUserData")
    .doc("wallet");

  return t.update(wallet, {
    cash,
    panels,
    sxp,
    total,
  });
};

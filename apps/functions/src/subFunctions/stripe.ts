import { db, functions, serverTimestamp, FieldValue } from "../config";
import { UserHistory } from "solarx-types";

interface AssignUserSharesProps {
  priceId: string;
  projectId: string;
  qty: number;
  uid: string;
}

// asign user shares under shares collection
export const assignUserShares = async ({
  priceId,
  projectId,
  qty,
  uid,
}: AssignUserSharesProps) => {
  return await db
    .collection("shares")
    .where("projectId", "==", projectId)
    .where("priceId", "==", priceId)
    .where("status", "==", "available")
    .limit(qty)
    .get()
    .then(async (querySnapshot) => {
      if (querySnapshot.size < qty) {
        throw new functions.https.HttpsError(
          "failed-precondition",
          "batch write error, not enough shares available."
        );
      }
      const batch = db.batch();
      querySnapshot.forEach((share) => {
        batch.update(share.ref, { owner: uid, status: "owned" });
      });
      return batch.commit();
    });
};

interface UpdateUserSharesSummaryProps {
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

export const updateUserSharesSummary = async ({
  t,
  avatar,
  basePrice,
  exists,
  name,
  projectId,
  quantity,
  roi,
  uid,
}: UpdateUserSharesSummaryProps) => {
  const userSharesProjectRef = db
    .collection("users")
    .doc(uid)
    .collection("userShares")
    .doc(projectId);

  if (exists) {
    t.update(userSharesProjectRef, {
      quantity: FieldValue.increment(quantity),
    });
  } else {
    t.create(userSharesProjectRef, {
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
  stocks: number;
  sxp: number;
  total: number;
}

export const updateUserWallet = async ({
  t,
  uid,
  cash,
  stocks,
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
    stocks,
    sxp,
    total,
  });
};

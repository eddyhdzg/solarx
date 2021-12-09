import { admin, functions } from "../config/firebase";
import { UserHistory } from "../types";
import { FieldValue } from "@google-cloud/firestore";

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
  return await admin
    .firestore()
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
      const batch = admin.firestore().batch();
      querySnapshot.forEach((share) => {
        batch.update(share.ref, { owner: uid, status: "owned" });
      });
      return batch.commit();
    });
};

interface UpdateUserSharesSummaryProps {
  t: admin.firestore.Transaction;
  exists: boolean;
  projectId: string;
  qty: number;
  uid: string;
  avatar: string | null;
  name: string;
  roi: number;
  sharePrice: number;
}

export const updateUserSharesSummary = async ({
  t,
  projectId,
  qty,
  uid,
  exists,
  avatar,
  name,
  roi,
  sharePrice,
}: UpdateUserSharesSummaryProps) => {
  const userSharesProjectRef = admin
    .firestore()
    .collection("users")
    .doc(uid)
    .collection("userShares")
    .doc(projectId);

  if (exists) {
    t.update(userSharesProjectRef, {
      shares: FieldValue.increment(qty),
    });
  } else {
    t.create(userSharesProjectRef, {
      avatar,
      name,
      roi,
      sharePrice,
      shares: qty,
    });
  }
};

interface AppendUserHistoryProps
  extends Pick<UserHistory, "amount" | "currency" | "description" | "title"> {
  t: admin.firestore.Transaction;
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
  const userHistoryRef = admin
    .firestore()
    .collection("users")
    .doc(uid)
    .collection("userHistory")
    .doc();

  t.create(userHistoryRef, {
    amount,
    currency,
    date: admin.firestore.FieldValue.serverTimestamp(),
    description,
    title,
  });
};

interface UpdateUserWalletProps {
  t: admin.firestore.Transaction;
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
  const wallet = admin
    .firestore()
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

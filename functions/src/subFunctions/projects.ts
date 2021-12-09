import { admin } from "../config/firebase";
import { FieldValue } from "@google-cloud/firestore";

interface UpdateProjectProps {
  t: admin.firestore.Transaction;
  amount: number;
  fundedDate: boolean;
  investors: number;
  projectId: string;
  qty: number;
}

export const updateProject = async ({
  t,
  fundedDate,
  investors,
  projectId,
  amount,
  qty,
}: UpdateProjectProps) => {
  const projectRef = admin.firestore().collection("projects").doc(projectId);

  t.update(projectRef, {
    ...(fundedDate && {
      fundedDate: admin.firestore.FieldValue.serverTimestamp(),
      status: "funded",
    }),
    investors,
    raised: FieldValue.increment(amount),
    sharesSold: FieldValue.increment(qty),
  });
};

interface UpdateProjectPriceProps {
  t: admin.firestore.Transaction;
  uid: string;
  projectId: string;
  priceId: string;
  qty: number;
}

export const updateProjectPrice = async ({
  t,
  uid,
  projectId,
  priceId,
  qty,
}: UpdateProjectPriceProps) => {
  const projectPriceRef = admin
    .firestore()
    .collection("projects")
    .doc(projectId)
    .collection("prices")
    .doc(priceId);

  t.update(projectPriceRef, {
    investors: FieldValue.arrayUnion(uid),
    sharesSold: FieldValue.increment(qty),
  });
};

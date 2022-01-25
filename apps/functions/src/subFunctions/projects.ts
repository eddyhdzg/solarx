import { db, serverTimestamp, FieldValue } from "../config";

interface UpdateProjectProps {
  t: FirebaseFirestore.Transaction;
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
  const projectRef = db.collection("projects").doc(projectId);

  t.update(projectRef, {
    ...(fundedDate && {
      fundedDate: serverTimestamp(),
      status: "funded",
    }),
    investors,
    raised: FieldValue.increment(amount),
    sharesSold: FieldValue.increment(qty),
  });
};

interface UpdateProjectPriceProps {
  t: FirebaseFirestore.Transaction;
  investors: number;
  projectId: string;
  priceId: string;
  qty: number;
}

export const updateProjectPrice = async ({
  t,
  investors: newInvestors,
  projectId,
  priceId,
  qty,
}: UpdateProjectPriceProps) => {
  const projectPriceRef = db
    .collection("projects")
    .doc(projectId)
    .collection("prices")
    .doc(priceId);

  t.update(projectPriceRef, {
    investors: newInvestors,
    sharesSold: FieldValue.increment(qty),
  });
};

interface UpdateInvestors {
  t: FirebaseFirestore.Transaction;
  uid: string;
  projectId: string;
  priceId: string;
}

export const updateInvestors = async ({
  t,
  uid,
  projectId,
  priceId,
}: UpdateInvestors) => {
  const projectPriceRef = db
    .collection("projects")
    .doc(projectId)
    .collection("investors")
    .doc(priceId);

  t.update(projectPriceRef, {
    ids: FieldValue.arrayUnion(uid),
  });
};

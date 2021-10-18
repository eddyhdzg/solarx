import { useFirestore } from "reactfire";
import { CreateDiscount, EditDiscount } from "types";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

export default function useProjectDiscountsMutation() {
  const firestore = useFirestore();

  const createProjectDiscount = (projectId: string, values: CreateDiscount) => {
    const projectDiscountsRef = collection(
      firestore,
      "projects",
      projectId,
      "projectDiscounts"
    );
    return addDoc(projectDiscountsRef, {
      lastUpdate: serverTimestamp(),
      sharesSold: 0,
      ...values,
    });
  };

  const editProjectDiscount = (
    projectId: string,
    discountId: string,
    values: EditDiscount
  ) => {
    const projectDiscountsDocRef = doc(
      firestore,
      "projects",
      projectId,
      "projectDiscounts",
      discountId
    );
    return updateDoc(projectDiscountsDocRef, {
      lastUpdate: serverTimestamp(),
      ...values,
    });
  };

  return { createProjectDiscount, editProjectDiscount };
}

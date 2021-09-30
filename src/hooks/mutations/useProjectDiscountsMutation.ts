import { useFirestore } from "reactfire";
import { NewDiscount } from "types";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

export default function useProjectDiscountsMutation() {
  const firestore = useFirestore();

  const createProjectDiscount = (projectId: string, values: NewDiscount) => {
    const projectDiscountsRef = collection(
      firestore,
      "projects",
      projectId,
      "projectDiscounts"
    );

    return addDoc(projectDiscountsRef, { sold: 0, ...values });
  };

  const editProjectDiscount = (
    projectId: string,
    discountId: string,
    values: Pick<NewDiscount, "name" | "description">
  ) => {
    const projectDiscountsDocRef = doc(
      firestore,
      "projects",
      projectId,
      "projectDiscounts",
      discountId
    );

    return updateDoc(projectDiscountsDocRef, { ...values });
  };

  return { createProjectDiscount, editProjectDiscount };
}

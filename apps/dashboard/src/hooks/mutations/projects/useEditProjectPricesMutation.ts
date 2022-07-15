import { useFirestore } from "reactfire";
import { doc, updateDoc } from "firebase/firestore";
import { EditProjectPriceSchema } from "hooks";

export default function useEditProjectPricesMutation() {
  const firestore = useFirestore();

  const editProjectPrice = (
    projectId: string,
    priceId: string,
    values: EditProjectPriceSchema
  ) => {
    const projectPricesDocRef = doc(
      firestore,
      "projects",
      projectId,
      "prices",
      priceId
    );
    return updateDoc(projectPricesDocRef, values);
  };

  return editProjectPrice;
}

import { useFirestore } from "reactfire";
import { doc, updateDoc } from "firebase/firestore";
import { IEditProjectPriceSchema } from "hooks";

export default function useEditProjectPricesMutation() {
  const firestore = useFirestore();

  const editProjectPrice = (
    projectId: string,
    priceId: string,
    values: IEditProjectPriceSchema
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

import { collection, orderBy, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { BuyingOption } from "types";

export default function useProjectBuyingOptions(projectId: string) {
  const firestore = useFirestore();
  const projectDiscountsRef = collection(
    firestore,
    "projects",
    projectId,
    "buyingOptions"
  );
  const projectDiscountsQuery = query(
    projectDiscountsRef,
    orderBy("discount", "desc")
  );

  return useFirestoreCollectionData<BuyingOption>(projectDiscountsQuery, {
    initialData: [],
    idField: "id",
  });
}

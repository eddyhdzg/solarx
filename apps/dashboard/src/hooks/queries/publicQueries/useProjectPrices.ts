import { collection, orderBy, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { InitialCollectionData, ProjectPrice } from "solarx-types";
import { defaultDoc, initialCollectionData } from "constant";

export default function useProjectPrices(projectId: string = defaultDoc) {
  const firestore = useFirestore();
  const projectDiscountsRef = collection(
    firestore,
    "projects",
    projectId,
    "prices"
  );
  const projectDiscountsQuery = query(
    projectDiscountsRef,
    orderBy("unit_amount")
  );
  return useFirestoreCollectionData<ProjectPrice | InitialCollectionData>(
    projectDiscountsQuery,
    {
      idField: "id",
      initialData: initialCollectionData,
    }
  );
}

import { collection, orderBy, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { ProjectPrice } from "solarx-types";

export default function useProjectPrices(projectId: string) {
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

  return useFirestoreCollectionData<ProjectPrice>(projectDiscountsQuery, {
    initialData: [],
    idField: "id",
  });
}

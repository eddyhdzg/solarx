import { collection, orderBy, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { Discount } from "types";

export default function useProjectDiscounts(projectId: string) {
  const firestore = useFirestore();
  const projectDiscountsRef = collection(
    firestore,
    "projects",
    projectId,
    "projectDiscounts"
  );
  const projectDiscountsQuery = query(
    projectDiscountsRef,
    orderBy("discount", "desc")
  );

  return useFirestoreCollectionData<Discount>(projectDiscountsQuery, {
    initialData: [],
    idField: "id",
  });
}

import { collection, query, where, limit } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { Share } from "types";

export default function useProjectShares(projectId: string = "null") {
  const firestore = useFirestore();
  const sharesRef = collection(firestore, "shares");
  const sharesQuery = query(
    sharesRef,
    where("projectId", "==", projectId),
    limit(20)
  );

  return useFirestoreCollectionData<Share>(sharesQuery, {
    initialData: [],
    idField: "id",
  });
}

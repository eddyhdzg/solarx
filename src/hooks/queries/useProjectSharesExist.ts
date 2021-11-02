import { collection, query, limit, where } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { Share } from "types";

export default function useProjectSharesExist(projectId: string = "null") {
  const firestore = useFirestore();
  const sharesRef = collection(firestore, "shares");
  const sharesQuery = query(
    sharesRef,
    where("projectId", "==", projectId),
    limit(1)
  );

  const { data, status } = useFirestoreCollectionData<Share>(sharesQuery, {
    initialData: [],
    idField: "id",
  });

  if (status === "loading") {
    return false;
  }

  return Boolean(data.length);
}

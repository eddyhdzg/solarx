import { collection, query, where, limit } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { Panel } from "solarx-types";

export default function useProjectShares(projectId: string = "null") {
  const firestore = useFirestore();
  const panelsRef = collection(firestore, "panels");
  const panelsQuery = query(
    panelsRef,
    where("projectId", "==", projectId),
    limit(20)
  );

  return useFirestoreCollectionData<Panel>(panelsQuery, {
    initialData: [],
    idField: "id",
  });
}

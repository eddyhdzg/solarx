import { collection, query, limit, where } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { Panel } from "solarx-types";

export default function useProjectSharesExist(projectId: string = "null") {
  const firestore = useFirestore();
  const panelsRef = collection(firestore, "panels");
  const panelsQuery = query(
    panelsRef,
    where("projectId", "==", projectId),
    limit(1)
  );

  const { data, status } = useFirestoreCollectionData<Panel>(panelsQuery, {
    initialData: [],
    idField: "id",
  });

  if (status === "loading") {
    return false;
  }

  return Boolean(data.length);
}

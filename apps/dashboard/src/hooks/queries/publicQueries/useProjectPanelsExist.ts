import { collection, query, limit, where } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { Panel } from "solarx-types";
import { defaultDoc, initialCollectionData } from "constant";

export default function useProjectPanelsExist(projectId: string = defaultDoc) {
  const firestore = useFirestore();
  const panelsRef = collection(firestore, "panels");
  const panelsQuery = query(
    panelsRef,
    where("projectId", "==", projectId),
    limit(1)
  );
  const { data, status } = useFirestoreCollectionData<Panel>(panelsQuery, {
    idField: "id",
    initialData: initialCollectionData,
  });

  if (status === "loading") {
    return false;
  }

  return Boolean(data.length);
}

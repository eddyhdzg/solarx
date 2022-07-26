import { collection, query, where } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { Panel } from "solarx-types";

interface usePanelsProps {
  projectId: string;
  priceId: string;
  uid: string;
}

export default function usePanels({ projectId, priceId, uid }: usePanelsProps) {
  const firestore = useFirestore();
  const panelsRef = collection(firestore, "panels");
  const panelsQuery = query(
    panelsRef,
    where("projectId", "==", projectId),
    where("priceId", "==", priceId),
    where("owner", "==", uid)
  );

  return useFirestoreCollectionData<Panel>(panelsQuery, {
    initialData: [],
    idField: "id",
  });
}

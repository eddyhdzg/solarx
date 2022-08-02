import { collection, query, where } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { Panel, InitialCollectionData } from "solarx-types";
import { initialCollectionData, defaultDoc, defaultUid } from "constant";

interface usePanelsProps {
  projectId?: string;
  priceId?: string;
  uid?: string;
}

export default function usePanels({
  projectId = defaultDoc,
  priceId = defaultDoc,
  uid = defaultUid,
}: usePanelsProps) {
  const firestore = useFirestore();
  const panelsRef = collection(firestore, "panels");
  const panelsQuery = query(
    panelsRef,
    where("projectId", "==", projectId),
    where("priceId", "==", priceId),
    where("owner", "==", uid)
  );
  return useFirestoreCollectionData<Panel | InitialCollectionData>(
    panelsQuery,
    {
      idField: "id",
      initialData: initialCollectionData,
    }
  );
}

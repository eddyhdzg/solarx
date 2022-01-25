import { collection, query, where } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { Share } from "solarx-types";

interface useSharesProps {
  projectId: string;
  priceId: string;
  uid: string;
}

export default function useShares({ projectId, priceId, uid }: useSharesProps) {
  const firestore = useFirestore();
  const sharesRef = collection(firestore, "shares");
  const sharesQuery = query(
    sharesRef,
    where("projectId", "==", projectId),
    where("priceId", "==", priceId),
    where("owner", "==", uid)
  );

  return useFirestoreCollectionData<Share>(sharesQuery, {
    initialData: [],
    idField: "id",
  });
}

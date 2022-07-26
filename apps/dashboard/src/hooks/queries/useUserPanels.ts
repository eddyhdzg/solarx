import { collection, orderBy, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { UserPanel } from "solarx-types";

export default function useUserPanels(uid: string) {
  const firestore = useFirestore();
  const userPanelsRef = collection(firestore, "users", uid, "userPanels");
  const userPanelsQuery = query(userPanelsRef, orderBy("roi", "desc"));

  return useFirestoreCollectionData<UserPanel>(userPanelsQuery, {
    initialData: [],
    idField: "id",
  });
}

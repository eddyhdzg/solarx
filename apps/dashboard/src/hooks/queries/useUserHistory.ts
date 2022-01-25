import { collection, orderBy, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { UserHistory } from "solarx-types";

export default function useUserHistory(uid: string) {
  const firestore = useFirestore();
  const userHistoryRef = collection(firestore, "users", uid, "userHistory");
  const userHistoryQuery = query(userHistoryRef, orderBy("date", "desc"));

  return useFirestoreCollectionData<UserHistory>(userHistoryQuery, {
    initialData: [],
    idField: "id",
  });
}

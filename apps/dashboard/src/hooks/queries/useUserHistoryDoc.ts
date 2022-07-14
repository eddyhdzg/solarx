import { doc } from "firebase/firestore";
import { useFirestore, useFirestoreDocData } from "reactfire";
import { UserHistory } from "solarx-types";

export default function useUserHistoryDoc(uid: string = " ", id: string = " ") {
  const firestore = useFirestore();
  const useUserHistoryRef = doc(firestore, "users", uid, "userHistory", id);

  return useFirestoreDocData<UserHistory>(useUserHistoryRef, {
    initialData: null,
    idField: "id",
  });
}

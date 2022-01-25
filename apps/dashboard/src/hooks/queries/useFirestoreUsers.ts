import { collection, orderBy, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { FirestoreUser } from "solarx-types";

export default function useFirestoreUsers() {
  const firestore = useFirestore();
  const usersRef = collection(firestore, "users");
  const usersQuery = query(usersRef, orderBy("created"));

  return useFirestoreCollectionData<FirestoreUser>(usersQuery, {
    initialData: [],
    idField: "uid",
  });
}

import { collection } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { FirestoreUser } from "types";

export default function useFirestoreUsers() {
  const firestore = useFirestore();
  const usersRef = collection(firestore, "users");

  return useFirestoreCollectionData<FirestoreUser>(usersRef, {
    initialData: [],
    idField: "uid",
  });
}

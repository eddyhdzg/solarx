import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { User } from "types";

export default function useUsers() {
  const usersRef = useFirestore().collection("users");

  return useFirestoreCollectionData<User>(usersRef, {
    initialData: [],
    idField: "id",
  });
}

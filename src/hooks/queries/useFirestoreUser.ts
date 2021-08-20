import { useFirestore, useFirestoreDocData } from "reactfire";
import { User } from "types";

export default function useFirestoreUser(uid: User["uid"]) {
  const userRef = useFirestore().collection("users").doc(uid);

  return useFirestoreDocData<User>(userRef, {
    idField: "uid",
  });
}

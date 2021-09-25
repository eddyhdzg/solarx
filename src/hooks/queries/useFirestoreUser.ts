import { doc } from "firebase/firestore";
import { useFirestore, useFirestoreDocData, useUser } from "reactfire";
import { FirestoreUser } from "types";

export default function useFirestoreUser() {
  const { data } = useUser();
  const firestore = useFirestore();
  const userRef = doc(firestore, "users", data?.uid || "null");

  return useFirestoreDocData<FirestoreUser>(userRef, {
    idField: "uid",
    initialData: {
      avatar: "",
      created: "",
      displayName: "",
      email: "",
      uid: "",
      role: null,
    },
  });
}

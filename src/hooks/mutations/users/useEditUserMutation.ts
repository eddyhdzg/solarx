import { useFirestore } from "reactfire";
import { FirestoreUser } from "types";
import { doc, updateDoc } from "firebase/firestore";

export default function useEditUserMutation() {
  const firestore = useFirestore();

  const editUserMutation = (id: string, data?: FirestoreUser) => {
    const userRef = doc(firestore, "users", id);
    return updateDoc(userRef, { ...data });
  };

  return editUserMutation;
}

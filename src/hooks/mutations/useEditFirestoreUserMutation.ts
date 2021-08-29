import { useFirestore } from "reactfire";
import { FirestoreUser } from "types";
import { useSnackbar } from "notistack";
import { doc, updateDoc } from "firebase/firestore";

export default function useEditFirestoreUserMutation() {
  const firestore = useFirestore();
  const { enqueueSnackbar } = useSnackbar();

  const editFirestoreUserMutation = (id: string, data?: FirestoreUser) => {
    const userRef = doc(firestore, "users", id);
    return updateDoc(userRef, { ...data });
  };

  const handleFirestoreUserMutaion = (id: string, data?: FirestoreUser) => {
    editFirestoreUserMutation(id, data)
      .then(() => {
        enqueueSnackbar("User Edited! 🔥", { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar("User Edition Error 😔", { variant: "error" });
      });
  };

  return { editFirestoreUserMutation, handleFirestoreUserMutaion };
}

import { useFirestore } from "reactfire";
import { User } from "types";
import { useSnackbar } from "notistack";

export default function useEditFirestoreUserMutation() {
  const usersRef = useFirestore().collection("users");
  const { enqueueSnackbar } = useSnackbar();

  const editFirestoreUserMutation = (id?: string, data?: User) => {
    return usersRef.doc(id).update({ ...data });
  };

  const handleFirestoreUserMutaion = (id?: string, data?: User) => {
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

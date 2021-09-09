import { useFirestore } from "reactfire";
import { FirestoreUser } from "types";
import { useSnackbar } from "notistack";
import { doc, updateDoc } from "firebase/firestore";
import { useTranslation } from "react-i18next";

export default function useEditFirestoreUserMutation() {
  const { t } = useTranslation();
  const firestore = useFirestore();
  const { enqueueSnackbar } = useSnackbar();

  const editFirestoreUserMutation = (id: string, data?: FirestoreUser) => {
    const userRef = doc(firestore, "users", id);
    return updateDoc(userRef, { ...data });
  };

  const handleFirestoreUserMutaion = (id: string, data?: FirestoreUser) => {
    editFirestoreUserMutation(id, data)
      .then(() => {
        enqueueSnackbar(t("snackbar.userEdited"), { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.userNotEdited"), { variant: "error" });
      });
  };

  return { editFirestoreUserMutation, handleFirestoreUserMutaion };
}

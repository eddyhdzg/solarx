import { useFirestore } from "reactfire";
import { UserRole } from "types";
import { useSnackbar } from "notistack";
import { doc, updateDoc } from "firebase/firestore";
import { useTranslation } from "react-i18next";

export default function useEditRole() {
  const { t } = useTranslation();
  const firestore = useFirestore();
  const { enqueueSnackbar } = useSnackbar();

  const editRoleMutation = (id: string, role?: UserRole) => {
    const userRef = doc(firestore, "users", id);
    const newRole: { role: UserRole } = {
      role: role ? role : "DEFAULT",
    };

    return updateDoc(userRef, { ...newRole });
  };

  const handleRoleMutaion = (id: string, role?: UserRole) => {
    editRoleMutation(id, role)
      .then(() => {
        enqueueSnackbar(t("snackbar.roleEdited"), { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.roleNotEdited"), { variant: "error" });
      });
  };

  return { editRoleMutation, handleRoleMutaion };
}

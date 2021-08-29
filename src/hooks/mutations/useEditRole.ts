import { useFirestore } from "reactfire";
import { UserRole } from "types";
import { useSnackbar } from "notistack";
import { doc, updateDoc } from "firebase/firestore";

export default function useEditRole() {
  const firestore = useFirestore();
  const { enqueueSnackbar } = useSnackbar();

  const editRoleMutation = (id: string, role?: UserRole) => {
    const userRef = doc(firestore, "users", id);
    const newRole = {
      role: role ? role : "default",
    };

    return updateDoc(userRef, { ...newRole });
  };

  const handleRoleMutaion = (id: string, role?: UserRole) => {
    editRoleMutation(id, role)
      .then(() => {
        enqueueSnackbar("Role Edited! 🔥", { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar("Role Edition Error 😔", { variant: "error" });
      });
  };

  return { editRoleMutation, handleRoleMutaion };
}

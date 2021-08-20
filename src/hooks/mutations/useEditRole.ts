import { useFirestore } from "reactfire";
import { UserRole } from "types";
import { useSnackbar } from "notistack";

export default function useEditRole() {
  const usersRef = useFirestore().collection("users");
  const { enqueueSnackbar } = useSnackbar();

  const editRoleMutation = (id?: string, role?: UserRole) => {
    const newRole = {
      role: role ? role : "default",
    };

    return usersRef.doc(id).update(newRole);
  };

  const handleRoleMutaion = (id?: string, role?: UserRole) => {
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

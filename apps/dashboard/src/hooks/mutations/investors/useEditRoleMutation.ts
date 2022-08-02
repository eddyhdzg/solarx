import { useFirestore } from "reactfire";
import { UserRole } from "solarx-types";
import { doc, updateDoc } from "firebase/firestore";

export default function useEditRoleMutation() {
  const firestore = useFirestore();

  const editRoleMutation = (id: string, role?: UserRole) => {
    const userRef = doc(firestore, "investors", id);
    const newRole: { role: UserRole } = {
      role: role ? role : "DEFAULT",
    };

    return updateDoc(userRef, newRole);
  };

  return editRoleMutation;
}

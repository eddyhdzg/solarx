import { useFirestore } from "reactfire";
import { Investor } from "solarx-types";
import { doc, updateDoc } from "firebase/firestore";

export default function useEditUserMutation() {
  const firestore = useFirestore();

  const editUserMutation = (id: string, data?: Investor) => {
    const userRef = doc(firestore, "users", id);
    return updateDoc(userRef, { ...data });
  };

  return editUserMutation;
}

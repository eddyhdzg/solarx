import { useFirestore } from "reactfire";
import { EditProjectNumberSchema } from "hooks";
import { doc, updateDoc } from "firebase/firestore";

export default function useEditProjectNumberMutation() {
  const firestore = useFirestore();

  const editProjectNumberMutation = (
    id: string,
    data: EditProjectNumberSchema
  ) => {
    const projectDocRef = doc(firestore, "projects", id);
    return updateDoc(projectDocRef, data);
  };

  return editProjectNumberMutation;
}

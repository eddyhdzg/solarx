import { useFirestore } from "reactfire";
import { IEditProjectNumberSchema } from "hooks";
import { doc, updateDoc } from "firebase/firestore";

export default function useEditProjectNumberMutation() {
  const firestore = useFirestore();

  const editProjectNumberMutation = (
    id: string,
    data: IEditProjectNumberSchema
  ) => {
    const projectDocRef = doc(firestore, "projects", id);
    return updateDoc(projectDocRef, data);
  };

  return editProjectNumberMutation;
}

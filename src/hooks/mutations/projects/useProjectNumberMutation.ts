import { useFirestore } from "reactfire";
import { IProjectNumberSchema } from "hooks";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";

export default function useEditProjectNumberMutation() {
  const firestore = useFirestore();

  const editProjectNumberMutation = (
    id: string,
    data: IProjectNumberSchema
  ) => {
    const projectDocRef = doc(firestore, "projects", id);
    return updateDoc(projectDocRef, { ...data, lastUpdate: serverTimestamp() });
  };

  return editProjectNumberMutation;
}

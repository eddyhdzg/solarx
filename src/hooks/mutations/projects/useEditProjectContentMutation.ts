import { useFirestore } from "reactfire";
import { IEditProjectContentSchema } from "hooks";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";

export default function useEditProjectContentMutation() {
  const firestore = useFirestore();

  const editProjectContentMutation = (
    id: string,
    data: IEditProjectContentSchema
  ) => {
    const projectDocRef = doc(firestore, "projects", id);
    return updateDoc(projectDocRef, { ...data, lastUpdate: serverTimestamp() });
  };

  return editProjectContentMutation;
}

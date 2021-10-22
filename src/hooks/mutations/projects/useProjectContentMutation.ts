import { useFirestore } from "reactfire";
import { IProjectContentSchema } from "hooks";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";

export default function useProjectContentMutation() {
  const firestore = useFirestore();

  const editProjectContentMutation = (
    id: string,
    data: IProjectContentSchema
  ) => {
    const projectDocRef = doc(firestore, "projects", id);
    return updateDoc(projectDocRef, { ...data, lastUpdate: serverTimestamp() });
  };

  return editProjectContentMutation;
}

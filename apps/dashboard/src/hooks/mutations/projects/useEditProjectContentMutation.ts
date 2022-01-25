import { useFirestore } from "reactfire";
import { IEditProjectContentSchema } from "hooks";
import { doc, setDoc } from "firebase/firestore";

export default function useEditProjectContentMutation() {
  const firestore = useFirestore();

  const editProjectContentMutation = (
    id: string,
    data: IEditProjectContentSchema
  ) => {
    const projectDocRef = doc(firestore, "projects", id, "data", "content");
    return setDoc(projectDocRef, data, { merge: true });
  };

  return editProjectContentMutation;
}

import { useFirestore } from "reactfire";
import { Project } from "solarx-types";
import { IProjectGeneralSchema } from "hooks";
import { doc, updateDoc } from "firebase/firestore";

export default function useProjectGeneralMutation() {
  const firestore = useFirestore();

  const editProjectGeneralMutation = (
    id: string,
    { state, ...data }: IProjectGeneralSchema
  ) => {
    const project: Project = {
      ...data,
      ...(state && { state: state?.name }),
    };
    const projectDocRef = doc(firestore, "projects", id);
    return updateDoc(projectDocRef, {
      ...project,
    });
  };

  return editProjectGeneralMutation;
}

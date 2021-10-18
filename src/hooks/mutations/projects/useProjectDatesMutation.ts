import { useFirestore } from "reactfire";
import { Project } from "types";
import { IProjectDatesSchema } from "hooks";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { formater } from "utils";

export default function useProjectDatesMutation() {
  const firestore = useFirestore();

  const editProjectDatesMutation = (
    id: string,
    { fundedDate, releaseDate, operationDate }: IProjectDatesSchema
  ) => {
    const project: Project = {
      ...(fundedDate !== undefined && {
        fundedDate: fundedDate ? formater(fundedDate).toDate() : null,
      }),
      ...(releaseDate !== undefined && {
        releaseDate: releaseDate ? formater(releaseDate).toDate() : null,
      }),
      ...(operationDate !== undefined && {
        operationDate: operationDate ? formater(operationDate).toDate() : null,
      }),
    };
    const projectDocRef = doc(firestore, "projects", id);
    return updateDoc(projectDocRef, {
      lastUpdate: serverTimestamp(),
      ...project,
    });
  };

  return editProjectDatesMutation;
}

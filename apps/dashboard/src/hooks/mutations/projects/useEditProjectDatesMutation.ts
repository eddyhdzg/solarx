import { useFirestore } from "reactfire";
import { Project } from "solarx-types";
import { IEditProjectDatesSchema } from "hooks";
import { doc, updateDoc } from "firebase/firestore";
import { toTimestamp } from "utils";

export default function useEditProjectDatesMutation() {
  const firestore = useFirestore();

  const editProjectDatesMutation = (
    id: string,
    { fundedDate, releaseDate, operationDate }: IEditProjectDatesSchema
  ) => {
    const project: Project = {
      ...(fundedDate !== undefined && {
        fundedDate: fundedDate ? toTimestamp(fundedDate) : null,
      }),
      ...(releaseDate !== undefined && {
        releaseDate: releaseDate ? toTimestamp(releaseDate) : null,
      }),
      ...(operationDate !== undefined && {
        operationDate: operationDate ? toTimestamp(operationDate) : null,
      }),
    };

    const projectDocRef = doc(firestore, "projects", id);
    return updateDoc(projectDocRef, {
      ...project,
    });
  };

  return editProjectDatesMutation;
}

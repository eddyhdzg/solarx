import { useFirestore, useFirestoreDocData } from "reactfire";
import { Project } from "types";

export default function useProject(projectId: string | undefined) {
  const projectRef = useFirestore().collection("projects").doc(projectId);

  return useFirestoreDocData<Project>(projectRef, {
    initialData: undefined,
    idField: "id",
  });
}

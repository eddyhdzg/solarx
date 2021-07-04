import { useFirestore, useFirestoreDocDataOnce } from "reactfire";
import { Project } from "types";

export default function useProject(projectId: string | undefined) {
  const projectRef = useFirestore().collection("projects").doc(projectId);

  return useFirestoreDocDataOnce<Project>(projectRef, {
    idField: "id",
  });
}

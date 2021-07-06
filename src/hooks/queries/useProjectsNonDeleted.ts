import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { Project } from "types";

export default function useProjectsNonDeleted() {
  const projectsRef = useFirestore()
    .collection("projects")
    .where("softDelete", "==", false);

  return useFirestoreCollectionData<Project>(projectsRef, {
    initialData: [],
    idField: "id",
  });
}

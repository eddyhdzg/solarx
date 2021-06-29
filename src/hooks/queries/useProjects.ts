import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { Project } from "types";

export default function useProjects() {
  const projectsRef = useFirestore().collection("projects");

  return useFirestoreCollectionData<Project>(projectsRef, {
    initialData: [],
    idField: "id",
  });
}

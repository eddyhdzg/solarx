import { collection, where, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { Project } from "types";

export default function usePublicProjects() {
  const firestore = useFirestore();
  const projectsRef = collection(firestore, "projects");
  const projectsQuery = query(projectsRef, where("archived", "==", false));

  return useFirestoreCollectionData<Project>(projectsQuery, {
    initialData: [],
    idField: "id",
  });
}

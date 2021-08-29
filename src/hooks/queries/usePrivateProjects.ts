import { collection } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { Project } from "types";

export default function usePrivateProjects() {
  const firestore = useFirestore();
  const projectsRef = collection(firestore, "projects");

  return useFirestoreCollectionData<Project>(projectsRef, {
    initialData: [],
    idField: "id",
  });
}

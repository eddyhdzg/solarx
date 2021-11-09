import { doc } from "firebase/firestore";
import { useFirestore, useFirestoreDocData } from "reactfire";
import { Project } from "types";

export default function useProject(projectId: string = "") {
  const firestore = useFirestore();
  const projectRef = doc(firestore, "projects", projectId);

  return useFirestoreDocData<Project>(projectRef, {
    initialData: {},
    idField: "id",
  });
}

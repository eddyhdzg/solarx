import { doc } from "firebase/firestore";
import { useFirestore, useFirestoreDocData } from "reactfire";
import { Project, InitialDocData } from "solarx-types";
import { initialDocData, defaultDoc } from "constant";

export default function useProject(projectId: string = defaultDoc) {
  const firestore = useFirestore();
  const projectRef = doc(firestore, "projects", projectId);
  return useFirestoreDocData<Project | InitialDocData>(projectRef, {
    idField: "id",
    initialData: initialDocData,
  });
}

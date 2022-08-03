import { collection, orderBy, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { Project } from "solarx-types";
import { initialCollectionData } from "constant";

export default function usePrivateProjects() {
  const firestore = useFirestore();
  const projectsRef = collection(firestore, "projects");
  const projectsQuery = query(projectsRef, orderBy("created"));
  return useFirestoreCollectionData<Project>(projectsQuery, {
    idField: "id",
    initialData: initialCollectionData,
  });
}

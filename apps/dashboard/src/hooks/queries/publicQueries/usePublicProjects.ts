import { initialCollectionData } from "constant";
import { collection, where, query, orderBy } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { Project, InitialCollectionData } from "solarx-types";

export default function usePublicProjects() {
  const firestore = useFirestore();
  const projectsRef = collection(firestore, "projects");
  const projectsQuery = query(
    projectsRef,
    where("active", "==", true),
    orderBy("created")
  );
  return useFirestoreCollectionData<Project | InitialCollectionData>(
    projectsQuery,
    {
      idField: "id",
      initialData: initialCollectionData,
    }
  );
}

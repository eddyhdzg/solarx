import { collection, where, query, orderBy } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { Project } from "solarx-types";
import { initialCollectionData } from "constant";

export default function usePublicProjects() {
  const firestore = useFirestore();
  const projectsRef = collection(firestore, "projects");
  const projectsQuery = query(
    projectsRef,
    where("active", "==", true),
    orderBy("created")
  );
  return useFirestoreCollectionData<Project>(projectsQuery, {
    idField: "id",
    initialData: initialCollectionData,
  });
}

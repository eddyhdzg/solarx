import { doc } from "firebase/firestore";
import { useFirestore, useFirestoreDocData } from "reactfire";
import { ProjectContent } from "solarx-types";

export default function useProjectContent(projectId: string) {
  const firestore = useFirestore();
  const projectContentRef = doc(
    firestore,
    "projects",
    projectId,
    "data",
    "content"
  );

  return useFirestoreDocData<ProjectContent>(projectContentRef, {
    initialData: null,
  });
}

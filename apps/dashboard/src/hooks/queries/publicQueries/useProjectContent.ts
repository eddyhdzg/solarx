import { doc } from "firebase/firestore";
import { useFirestore, useFirestoreDocData } from "reactfire";
import { ProjectContent, InitialDocData } from "solarx-types";
import { initialDocData, defaultDoc } from "constant";

export default function useProjectContent(projectId: string = defaultDoc) {
  const firestore = useFirestore();
  const projectContentRef = doc(
    firestore,
    "projects",
    projectId,
    "data",
    "content"
  );
  return useFirestoreDocData<ProjectContent | InitialDocData>(
    projectContentRef,
    {
      initialData: initialDocData,
    }
  );
}

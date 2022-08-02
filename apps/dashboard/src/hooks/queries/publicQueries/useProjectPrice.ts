import { doc } from "firebase/firestore";
import { useFirestore, useFirestoreDocData } from "reactfire";
import { ProjectPrice, InitialDocData } from "solarx-types";
import { initialDocData, defaultDoc } from "constant";

export default function useProjectPrice(
  projectId: string = defaultDoc,
  priceId: string = defaultDoc
) {
  const firestore = useFirestore();
  const projectDiscountsRef = doc(
    firestore,
    "projects",
    projectId,
    "prices",
    priceId
  );
  return useFirestoreDocData<ProjectPrice | InitialDocData>(
    projectDiscountsRef,
    {
      initialData: initialDocData,
      idField: "id",
    }
  );
}

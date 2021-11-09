import { doc } from "firebase/firestore";
import { useFirestore, useFirestoreDocData } from "reactfire";
import { ProjectPrice } from "types";

export default function useProjectPrice(
  projectId: string = "",
  priceId: string = ""
) {
  const firestore = useFirestore();
  const projectDiscountsRef = doc(
    firestore,
    "projects",
    projectId,
    "prices",
    priceId
  );

  return useFirestoreDocData<ProjectPrice>(projectDiscountsRef, {
    initialData: {},
    idField: "id",
  });
}

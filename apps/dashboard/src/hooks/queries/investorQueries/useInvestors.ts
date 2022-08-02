import { initialCollectionData } from "constant";
import { collection, orderBy, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { Investor } from "solarx-types";

export default function useInvestors() {
  const firestore = useFirestore();
  const investorsRef = collection(firestore, "investors");
  const investorsQuery = query(investorsRef, orderBy("created"));
  return useFirestoreCollectionData<Investor>(investorsQuery, {
    idField: "uid",
    initialData: initialCollectionData,
  });
}

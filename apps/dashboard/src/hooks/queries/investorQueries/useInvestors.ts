import { initialCollectionData } from "constant";
import { collection, orderBy, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { Investor } from "solarx-types";

export default function useInvestors() {
  const firestore = useFirestore();
  const usersRef = collection(firestore, "users");
  const usersQuery = query(usersRef, orderBy("created"));
  return useFirestoreCollectionData<Investor>(usersQuery, {
    idField: "uid",
    initialData: initialCollectionData,
  });
}

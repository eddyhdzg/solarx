import { doc } from "firebase/firestore";
import { useFirestore, useFirestoreDocData } from "reactfire";
import { Investor, InitialDocData } from "solarx-types";
import { defaultUid, initialDocData } from "constant";

export default function useInvestor(uid: string = defaultUid) {
  const firestore = useFirestore();
  const investorRef = doc(firestore, "investors", uid);
  return useFirestoreDocData<Investor | InitialDocData>(investorRef, {
    idField: "uid",
    initialData: initialDocData,
  });
}

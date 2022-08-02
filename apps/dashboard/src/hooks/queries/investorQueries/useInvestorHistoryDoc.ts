import { doc } from "firebase/firestore";
import { useFirestore, useFirestoreDocData } from "reactfire";
import { InvestorHistory, InitialDocData } from "solarx-types";
import { defaultUid, defaultDoc, initialDocData } from "constant";

export default function useInvestorHistoryDoc(
  uid: string = defaultUid,
  id: string = defaultDoc
) {
  const firestore = useFirestore();
  const useInvestorHistoryRef = doc(
    firestore,
    "investors",
    uid,
    "investorHistory",
    id
  );
  return useFirestoreDocData<InvestorHistory | InitialDocData>(
    useInvestorHistoryRef,
    {
      idField: "id",
      initialData: initialDocData,
    }
  );
}

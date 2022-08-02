import { collection, orderBy, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { InvestorHistory, InitialCollectionData } from "solarx-types";
import { defaultUid, initialCollectionData } from "constant";

export default function useInvestorHistory(uid: string = defaultUid) {
  const firestore = useFirestore();
  const investorHistoryRef = collection(
    firestore,
    "investors",
    uid,
    "investorHistory"
  );
  const investorHistoryQuery = query(
    investorHistoryRef,
    orderBy("date", "desc")
  );
  return useFirestoreCollectionData<InvestorHistory | InitialCollectionData>(
    investorHistoryQuery,
    {
      idField: "id",
      initialData: initialCollectionData,
    }
  );
}

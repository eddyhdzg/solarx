import { collection, query, where, orderBy, limit } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { InvestorHistory } from "solarx-types";
import { defaultUid, initialCollectionData } from "constant";

export default function useLastInvestorMonthlyRevenue(
  uid: string = defaultUid
) {
  const firestore = useFirestore();
  const investorsHistoryRef = collection(
    firestore,
    "investors",
    uid,
    "investorHistory"
  );
  const investorLastHistoryQuery = query(
    investorsHistoryRef,
    where("title", "==", "Monthly revenue"),
    orderBy("date", "desc"),
    limit(1)
  );
  const { data, ...rest } = useFirestoreCollectionData<InvestorHistory>(
    investorLastHistoryQuery,
    {
      idField: "id",
      initialData: initialCollectionData,
    }
  );
  return { data: data && data.length ? data[0] : null, ...rest };
}

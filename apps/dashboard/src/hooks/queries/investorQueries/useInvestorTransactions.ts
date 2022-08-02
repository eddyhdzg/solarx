import {
  collection,
  orderBy,
  OrderByDirection,
  query,
} from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { InvestorTransaction, InitialCollectionData } from "solarx-types";
import { defaultUid, initialCollectionData } from "constant";

export default function useInvestorTransactions(
  uid: string = defaultUid,
  directionStr: OrderByDirection = "desc"
) {
  const firestore = useFirestore();
  const investorTransactionsRef = collection(
    firestore,
    "investors",
    uid,
    "investorTransactions"
  );
  const investorTransactionsQuery = query(
    investorTransactionsRef,
    orderBy("date", directionStr)
  );
  return useFirestoreCollectionData<
    InvestorTransaction | InitialCollectionData
  >(investorTransactionsQuery, {
    idField: "id",
    initialData: initialCollectionData,
  });
}

import { collection, orderBy, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { InvestorPanel } from "solarx-types";
import { defaultUid, initialCollectionData } from "constant";

export default function useInvestorPanels(uid: string = defaultUid) {
  const firestore = useFirestore();
  const investorPanelsRef = collection(
    firestore,
    "investors",
    uid,
    "investorPanels"
  );
  const investorPanelsQuery = query(investorPanelsRef, orderBy("roi", "desc"));
  return useFirestoreCollectionData<InvestorPanel>(investorPanelsQuery, {
    idField: "id",
    initialData: initialCollectionData,
  });
}

import { doc } from "firebase/firestore";
import { useFirestore, useFirestoreDocData } from "reactfire";
import { Payment, InitialDocData } from "solarx-types";
import { defaultUid, defaultDoc, initialDocData } from "constant";

export default function useInvestorPaymentDoc(
  uid: string = defaultUid,
  id: string = defaultDoc
) {
  const firestore = useFirestore();
  const useInvestorPaymentRef = doc(
    firestore,
    "investors",
    uid,
    "payments",
    id
  );
  return useFirestoreDocData<Payment | InitialDocData>(useInvestorPaymentRef, {
    idField: "id",
    initialData: initialDocData,
  });
}

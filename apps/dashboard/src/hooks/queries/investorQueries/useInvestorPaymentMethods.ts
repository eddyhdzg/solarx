import { collection, orderBy, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { PaymentMethod } from "solarx-types";
import { defaultUid, initialCollectionData } from "constant";

export default function useInvestorPaymentMethods(uid: string = defaultUid) {
  const firestore = useFirestore();
  const investorPaymentMethodsRef = collection(
    firestore,
    "investors",
    uid,
    "payment_methods"
  );
  const investorPaymentMethodsQuery = query(
    investorPaymentMethodsRef,
    orderBy("created", "asc")
  );
  return useFirestoreCollectionData<PaymentMethod>(
    investorPaymentMethodsQuery,
    {
      idField: "id",
      initialData: initialCollectionData,
    }
  );
}

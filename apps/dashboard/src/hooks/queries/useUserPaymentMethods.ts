import { collection, orderBy, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { PaymentMethod } from "solarx-types";

export default function useUserPaymentMethods(uid: string = "") {
  const firestore = useFirestore();
  const userPaymentMethodsRef = collection(
    firestore,
    "users",
    uid,
    "payment_methods"
  );
  const userPaymentMethodsQuery = query(
    userPaymentMethodsRef,
    orderBy("created", "asc")
  );

  return useFirestoreCollectionData<PaymentMethod>(userPaymentMethodsQuery, {
    initialData: [],
  });
}

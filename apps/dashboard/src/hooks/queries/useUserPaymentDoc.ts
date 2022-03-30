import { doc } from "firebase/firestore";
import { useFirestore, useFirestoreDocData } from "reactfire";
import { Payment } from "solarx-types";

export default function useUserPaymentDoc(uid: string = " ", id: string = " ") {
  const firestore = useFirestore();
  const useUserPaymentRef = doc(firestore, "users", uid, "payments", id);

  return useFirestoreDocData<Payment>(useUserPaymentRef, {
    initialData: {},
    idField: "id",
  });
}

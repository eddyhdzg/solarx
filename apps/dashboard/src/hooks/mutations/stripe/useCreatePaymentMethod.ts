import { useFirestore, useUser } from "reactfire";
import { collection, addDoc } from "firebase/firestore";

export default function useCreatePaymentMethod() {
  const firestore = useFirestore();
  const user = useUser();

  const createPaymentMethod = (paymentMethodId: string = "") => {
    const uid = user.data?.uid || "";
    const projectDocRef = collection(
      firestore,
      "investors",
      uid,
      "payment_methods"
    );
    return addDoc(projectDocRef, { id: paymentMethodId });
  };

  return createPaymentMethod;
}

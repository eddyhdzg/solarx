import { useFirestore, useUser } from "reactfire";
import { collection, addDoc } from "firebase/firestore";

export default function useCreatePaymentMethod() {
  const firestore = useFirestore();
  const user = useUser();

  const createPaymentMethod = (paymentMethodId: string = "") => {
    const projectDocRef = collection(
      firestore,
      "users",
      user.data?.uid || "",
      "payment_methods"
    );
    return addDoc(projectDocRef, { id: paymentMethodId });
  };

  return createPaymentMethod;
}

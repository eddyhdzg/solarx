import { useUser } from "reactfire";
import useUserPaymentMethods from "./useUserPaymentMethods";

export default function useCurrUserPaymentMethods() {
  const user = useUser();
  return useUserPaymentMethods(user.data?.uid);
}

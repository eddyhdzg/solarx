import { useUser } from "reactfire";
import { useInvestorPaymentMethods } from "hooks";

export default function useCurrInvestorPaymentMethods() {
  const user = useUser();
  return useInvestorPaymentMethods(user.data?.uid);
}

import { OrderByDirection } from "firebase/firestore";
import { useUser } from "reactfire";
import { useInvestorTransactions } from "hooks";

export default function useCurrInvestorTransactions(
  directionStr: OrderByDirection = "desc"
) {
  const user = useUser();
  return useInvestorTransactions(user.data?.uid, directionStr);
}

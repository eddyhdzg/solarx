import { OrderByDirection } from "firebase/firestore";
import { useUser } from "reactfire";
import useUserTransactions from "./useUserTransactions";

export default function useCurrUserTransactions(
  directionStr: OrderByDirection = "desc"
) {
  const user = useUser();
  return useUserTransactions(user.data?.uid || "", directionStr);
}

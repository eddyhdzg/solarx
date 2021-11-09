import { useUser } from "reactfire";
import useLastUserMonthlyRevenue from "./useLastUserMonthlyRevenue";

export default function useCurrLastUserMonthlyRevenue() {
  const user = useUser();
  return useLastUserMonthlyRevenue(user.data?.uid || "");
}

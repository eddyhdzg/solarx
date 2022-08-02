import { useUser } from "reactfire";
import { useLastInvestorMonthlyRevenue } from "hooks";

export default function useCurrLastInvestorMonthlyRevenue() {
  const user = useUser();
  return useLastInvestorMonthlyRevenue(user.data?.uid);
}

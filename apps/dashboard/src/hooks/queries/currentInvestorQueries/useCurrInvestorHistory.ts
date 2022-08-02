import { useUser } from "reactfire";
import { useInvestorHistory } from "hooks";

export default function useCurrInvestorHistory() {
  const user = useUser();
  return useInvestorHistory(user.data?.uid);
}

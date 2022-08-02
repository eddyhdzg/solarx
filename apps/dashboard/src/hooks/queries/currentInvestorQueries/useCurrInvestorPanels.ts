import { useUser } from "reactfire";
import { useInvestorPanels } from "hooks";

export default function useCurrInvestorPanels() {
  const user = useUser();
  return useInvestorPanels(user.data?.uid);
}

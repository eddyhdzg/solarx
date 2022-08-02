import { useUser } from "reactfire";
import { useInvestorWallet } from "hooks";

export default function useCurrInvestorWallet() {
  const user = useUser();
  return useInvestorWallet(user.data?.uid);
}

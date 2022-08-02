import { useUser } from "reactfire";
import { useInvestor } from "hooks";

export default function useCurrInvestor() {
  const user = useUser();
  return useInvestor(user.data?.uid);
}

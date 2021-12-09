import { useUser } from "reactfire";
import useUserWallet from "./useUserWallet";

export default function useCurrUserWallet() {
  const user = useUser();
  return useUserWallet(user.data?.uid || "");
}

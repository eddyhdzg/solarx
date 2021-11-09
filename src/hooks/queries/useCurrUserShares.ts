import { useUser } from "reactfire";
import useUserShares from "./useUserShares";

export default function useCurrUserShares() {
  const user = useUser();
  return useUserShares(user.data?.uid || "");
}

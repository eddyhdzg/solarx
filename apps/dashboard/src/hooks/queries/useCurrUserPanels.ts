import { useUser } from "reactfire";
import useUserPanels from "./useUserPanels";

export default function useCurrUserPanels() {
  const user = useUser();
  return useUserPanels(user.data?.uid || "");
}

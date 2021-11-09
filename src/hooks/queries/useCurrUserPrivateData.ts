import { useUser } from "reactfire";
import useUserPrivateData from "./useUserPrivateData";

export default function useCurrUserPrivateData() {
  const user = useUser();
  return useUserPrivateData(user.data?.uid || "");
}

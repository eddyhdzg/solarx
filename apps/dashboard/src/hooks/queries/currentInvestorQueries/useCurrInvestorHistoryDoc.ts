import { useUser } from "reactfire";
import { useInvestorHistoryDoc } from "hooks";

/**
 *
 * Returns current investor history document by documentId
 * @param id documentId
 * @returns history document or null
 */
export default function useCurrInvestorHistoryDoc(id?: string) {
  const user = useUser();
  return useInvestorHistoryDoc(user.data?.uid, id);
}

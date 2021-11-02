import { useIdTokenResult, useUser } from "reactfire";
import { UserRole } from "types";

export default function useRole() {
  const user = useUser();
  const idTokenResult = useIdTokenResult(user.data!);
  return idTokenResult?.data?.claims?.role as UserRole;
}

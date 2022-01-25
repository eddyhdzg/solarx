import { useSigninCheck } from "reactfire";
import { UserRole } from "solarx-types";
import { adminArray } from "constant";

export default function useIsAdmin() {
  const { status, data: signInCheckResult } = useSigninCheck({
    forceRefresh: false,
    initialData: {
      isAdmin: false,
    },
    validateCustomClaims: (userClaims) => {
      return {
        hasRequiredClaims: adminArray.has(userClaims.role as UserRole),
        errors: {},
      };
    },
  });

  return {
    status,
    isAdmin:
      signInCheckResult?.signedIn && signInCheckResult?.hasRequiredClaims,
  };
}

import { CenterLoader } from "components";
import { useSigninCheck } from "reactfire";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

export default function Router() {
  const { status, data: signinResult } = useSigninCheck();

  if (status === "loading") {
    return <CenterLoader />;
  }

  return signinResult.signedIn ? <PrivateRoutes /> : <PublicRoutes />;
}

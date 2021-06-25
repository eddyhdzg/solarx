import { CenterLoader } from "components";
import { useSigninCheck } from "reactfire";
import PrivateRoutes from "./PrivateRoutes";

export default function Router() {
  const { status } = useSigninCheck();

  if (status === "loading") {
    return <CenterLoader />;
  }

  return <PrivateRoutes />;
}

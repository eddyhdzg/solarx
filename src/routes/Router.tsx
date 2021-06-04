import { CenterLoader } from "components";
import { useUser } from "reactfire";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

export default function Router() {
  const { status, data: user } = useUser();

  if (status === "loading") {
    return <CenterLoader />;
  }

  return user ? <PrivateRoutes /> : <PublicRoutes />;
}

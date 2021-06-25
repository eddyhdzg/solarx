import { Route, RouteProps } from "react-router";
import { useSigninCheck } from "reactfire";
import { CenterLoader } from "components";

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { status, data: signInCheckResult } = useSigninCheck();

  return (
    <Route
      {...rest}
      render={() => {
        if (status === "loading") {
          return <CenterLoader />;
        }
        return signInCheckResult.signedIn ? children : <h1>Please Log In</h1>;
      }}
    />
  );
};

export default PrivateRoute;

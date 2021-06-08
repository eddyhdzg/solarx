import { Redirect, Route, RouteProps } from "react-router";
import { useSigninCheck } from "reactfire";
import { CenterLoader } from "components";

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { status, data: signInCheckResult } = useSigninCheck();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (status === "loading") {
          return <CenterLoader />;
        }
        return signInCheckResult.signedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;

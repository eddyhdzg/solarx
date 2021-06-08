import { Redirect, Route, RouteProps } from "react-router";
import { useSigninCheck } from "reactfire";
import { CenterLoader } from "components";

const PublicRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { status, data: signInCheckResult } = useSigninCheck();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (status === "loading") {
          return <CenterLoader />;
        }
        return signInCheckResult.signedIn ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    />
  );
};

export default PublicRoute;

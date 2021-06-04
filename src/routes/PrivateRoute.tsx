import { Redirect, Route, RouteProps } from "react-router";
import { useUser } from "reactfire";
import { CenterLoader } from "components";

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { status, data: user } = useUser();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (status === "loading") {
          return <CenterLoader />;
        }
        return user ? (
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

import { Redirect, Route, RouteProps } from "react-router";
import { useUser } from "reactfire";
import { CenterLoader } from "components";

const PublicRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { status, data: user } = useUser();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (status === "loading") {
          return <CenterLoader />;
        }
        return user ? (
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

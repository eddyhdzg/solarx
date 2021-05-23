import { Redirect, Route, Switch } from "react-router";
import { useTheme, useMediaQuery } from "@material-ui/core";
import { MobileSubSidenav } from "components";
import { routesPathsTree } from "constant";

export default function Router() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Switch>
      {routesPathsTree.map(({ path, subRoutes }) => (
        <Route key={path} path={path}>
          <Switch>
            {subRoutes.map(({ subPath }) => (
              <Route
                key={subPath}
                path={path + subPath}
                component={() => <p>{path + subPath}</p>}
              />
            ))}

            {isDesktop && (
              <Route
                render={() => (
                  <Redirect to={`${path}${subRoutes[0].subPath}`} />
                )}
              />
            )}

            {subRoutes.map(({ subPath }) => (
              <Route
                key={subPath}
                path={path}
                component={() => <MobileSubSidenav />}
              />
            ))}
          </Switch>
        </Route>
      ))}

      <Route render={() => <Redirect to="/home" />} />
    </Switch>
  );
}

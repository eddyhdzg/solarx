import { Redirect, Route, Switch } from "react-router";
import { useTheme, useMediaQuery } from "@material-ui/core";
import { MobileSubSidenav } from "components";
import { routesTree } from "constant";

export default function Router() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Switch>
      {Object.entries(routesTree).map(([path, { sections }]) => (
        <Route key={path} path={path}>
          <Switch>
            {sections.map(({ subRoutes }) =>
              subRoutes.map(({ subRoute, component: Component }) => (
                <Route
                  key={subRoute}
                  path={path + subRoute}
                  render={() => <Component />}
                />
              ))
            )}

            {isDesktop && (
              <Route
                render={() => (
                  <Redirect
                    to={`${path}${sections[0].subRoutes[0].subRoute}`}
                  />
                )}
              />
            )}

            {sections.map(({ subRoutes }) =>
              subRoutes.map(({ subRoute }) => (
                <Route
                  key={subRoute}
                  path={path}
                  render={() => <MobileSubSidenav />}
                />
              ))
            )}
          </Switch>
        </Route>
      ))}

      <Route render={() => <Redirect to="/home" />} />
    </Switch>
  );
}

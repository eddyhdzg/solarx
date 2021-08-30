import { Redirect, Route, Switch } from "react-router";
import { useTheme, useMediaQuery } from "@material-ui/core";
import PrivateRoute from "./PrivateRoute";
import { MobileSubSidenav, Layout } from "components";
import { useRouterTree } from "hooks";

export default function PrivateRoutes() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const routerTree = useRouterTree();

  return (
    <Layout>
      <Switch>
        {Object.entries(routerTree).map(([path, { sections }]) => (
          <Route key={path} path={path}>
            <Switch>
              {sections.map(({ subRoutes }) =>
                subRoutes.map(
                  ({ subRoute, component: Component, isPrivate }) => {
                    const RouteType = isPrivate ? PrivateRoute : Route;

                    return (
                      <RouteType key={subRoute} path={path + subRoute}>
                        <Component />
                      </RouteType>
                    );
                  }
                )
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
                  <Route key={subRoute} path={path}>
                    <MobileSubSidenav />
                  </Route>
                ))
              )}
            </Switch>
          </Route>
        ))}

        <Route render={() => <Redirect to="/portfolio" />} />
      </Switch>
    </Layout>
  );
}

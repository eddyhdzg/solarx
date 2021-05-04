import { Layout } from "components";
import { Redirect, Route, Switch } from "react-router";
import { useTheme, useMediaQuery } from "@material-ui/core";

interface IRoute {
  path: string;
  subRoutes: {
    subPath: string;
  }[];
}

const routes: IRoute[] = [
  {
    path: "/home",
    subRoutes: [
      {
        subPath: "/buy",
      },
      {
        subPath: "/sell",
      },
      {
        subPath: "/crowdfunding",
      },
      {
        subPath: "/investment-funds",
      },
      {
        subPath: "/bonds",
      },
    ],
  },
  {
    path: "/portfolio",
    subRoutes: [
      {
        subPath: "/link-a-1",
      },
      {
        subPath: "/link-b-1",
      },
      {
        subPath: "/link-b-2",
      },
    ],
  },
  {
    path: "/trading",
    subRoutes: [
      {
        subPath: "/link-c-1",
      },
      {
        subPath: "/link-d-1",
      },
    ],
  },
  {
    path: "/projects",
    subRoutes: [
      {
        subPath: "/link-e-1",
      },
      {
        subPath: "/link-e-2",
      },
    ],
  },
  {
    path: "/more",
    subRoutes: [
      {
        subPath: "/link-f-1",
      },
    ],
  },
];

export default function App() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Layout>
      <Switch>
        {routes.map(({ path, subRoutes }) => (
          <Route key={path} path={path}>
            <Switch>
              {subRoutes.map(({ subPath }) => (
                <Route
                  key={subPath}
                  path={path + subPath}
                  component={() => <p>{path + subPath}</p>}
                />
              ))}

              {!isDesktop &&
                subRoutes.map(({ subPath }) => (
                  <Route
                    key={subPath}
                    path={path}
                    component={() => <p>{subPath}</p>}
                  />
                ))}

              {isDesktop && (
                <Route
                  render={() => (
                    <Redirect to={`${path}${subRoutes[0].subPath}`} />
                  )}
                />
              )}
            </Switch>
          </Route>
        ))}

        <Route render={() => <Redirect to="/home" />} />
      </Switch>
    </Layout>
  );
}

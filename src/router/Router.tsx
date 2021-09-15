import { Route, Switch } from "react-router";
import { useRouterTree } from "hooks";
import { CenterLoader, Layout } from "components";
import { Redirect } from "react-router-dom";

export default function Router() {
  const { routerTree, status } = useRouterTree();

  if (status === "loading") {
    return <CenterLoader />;
  }

  return (
    <Layout>
      <Switch>
        {Object.entries(routerTree).map(([path, { component: Component }]) => (
          <Route key={path} path={path}>
            <Component />
          </Route>
        ))}
        <Route render={() => <Redirect to="/wallet" />} />
      </Switch>
    </Layout>
  );
}

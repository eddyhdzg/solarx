import { Route, Redirect, Switch } from "react-router";
import PublicRoute from "./PublicRoute";
import { LoginPage } from "pages";

export default function PublicRoutes() {
  return (
    <Switch>
      <PublicRoute path="/login">
        <LoginPage />
      </PublicRoute>
      <Route render={() => <Redirect to="/login" />} />
    </Switch>
  );
}

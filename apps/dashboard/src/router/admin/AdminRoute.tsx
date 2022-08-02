import { Switch, Route } from "react-router-dom";
import {
  AdminWrapper,
  AdminHomePage,
  AdminEditProjectPage,
  AdminProjectsPage,
  AdminUsersPage,
  AdminLocalPage,
} from "components";

const AdminRoute = () => {
  return (
    <AdminWrapper>
      <Switch>
        <Route exact path="/admin">
          <AdminHomePage />
        </Route>
        <Route exact path="/admin/projects">
          <AdminProjectsPage />
        </Route>
        <Route exact path="/admin/projects/:id">
          <AdminEditProjectPage />
        </Route>
        <Route exact path="/admin/investors">
          <AdminUsersPage />
        </Route>
        <Route exact path="/admin/local">
          <AdminLocalPage />
        </Route>
      </Switch>
    </AdminWrapper>
  );
};

export default AdminRoute;

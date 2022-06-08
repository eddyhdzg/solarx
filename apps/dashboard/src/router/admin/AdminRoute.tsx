import { Switch, Route } from "react-router-dom";
import { AdminWrapper } from "atomic";
import {
  AdminHomePage,
  AdminEditProjectPage,
  AdminProjectsPage,
  AdminUsersPage,
  AdminLocalPage,
} from "pages";
import { FirebaseStorageProvider } from "providers";

const AdminRoute = () => {
  return (
    <AdminWrapper>
      <FirebaseStorageProvider>
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
          <Route exact path="/admin/users">
            <AdminUsersPage />
          </Route>
          <Route exact path="/admin/local">
            <AdminLocalPage />
          </Route>
        </Switch>
      </FirebaseStorageProvider>
    </AdminWrapper>
  );
};

export default AdminRoute;

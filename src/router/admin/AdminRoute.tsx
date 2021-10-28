import { Switch, Route } from "react-router-dom";
import { AdminWrapper } from "components";
import {
  AdminHomePage,
  AdminCreateProjectPage,
  AdminEditProjectPage,
  AdminProjectsPage,
  AdminUsersPage,
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
          <Route exact path="/admin/projects/create-project">
            <AdminCreateProjectPage />
          </Route>
          <Route exact path="/admin/projects/:id">
            <AdminEditProjectPage />
          </Route>
          <Route exact path="/admin/users">
            <AdminUsersPage />
          </Route>
        </Switch>
      </FirebaseStorageProvider>
    </AdminWrapper>
  );
};

export default AdminRoute;

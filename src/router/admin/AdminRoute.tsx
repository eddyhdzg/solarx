import { Switch, Route } from "react-router-dom";
import { AdminWrapper } from "components";
import {
  AdminHome,
  AdminCreateProject,
  AdminEditProject,
  AdminProjects,
  AdminUsers,
} from "pages";
import { FirebaseStorageProvider } from "providers";

const AdminRoute = () => {
  return (
    <AdminWrapper>
      <FirebaseStorageProvider>
        <Switch>
          <Route exact path="/admin">
            <AdminHome />
          </Route>
          <Route exact path="/admin/projects">
            <AdminProjects />
          </Route>
          <Route exact path="/admin/projects/create-project">
            <AdminCreateProject />
          </Route>
          <Route exact path="/admin/projects/:id">
            <AdminEditProject />
          </Route>
          <Route exact path="/admin/users">
            <AdminUsers />
          </Route>
        </Switch>
      </FirebaseStorageProvider>
    </AdminWrapper>
  );
};

export default AdminRoute;

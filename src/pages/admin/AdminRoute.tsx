import { Switch, Route } from "react-router-dom";
import CreateProject from "./createProject/CreateProject";
import EditProject from "./editProject/EditProject";

const AdminRoute = () => {
  return (
    <Switch>
      <Route exact path="/admin/projects">
        Projects
      </Route>
      <Route exact path="/admin/projects/create-project">
        <CreateProject />
      </Route>
      <Route exact path="/admin/projects/edit-project/:id">
        <EditProject />
      </Route>
    </Switch>
  );
};

export default AdminRoute;

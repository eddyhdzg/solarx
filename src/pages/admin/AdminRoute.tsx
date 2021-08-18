import { Switch, Route } from "react-router-dom";
import Projects from "./projects/Projects";
import CreateProject from "./createProject/CreateProject";
import EditProject from "./editProject/EditProject";
import Users from "./users/Users";

const AdminRoute = () => {
  return (
    <Switch>
      <Route exact path="/admin/projects">
        <Projects />
      </Route>
      <Route exact path="/admin/projects/create-project">
        <CreateProject />
      </Route>
      <Route exact path="/admin/projects/:id">
        <EditProject />
      </Route>
      <Route exact path="/admin/users">
        <Users />
      </Route>
    </Switch>
  );
};

export default AdminRoute;

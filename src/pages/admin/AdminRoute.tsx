import { Switch, Route } from "react-router-dom";
import CreateProject from "./createProject/CreateProject";

const AdminRoute = () => {
  return (
    <Switch>
      <Route exact path="/admin/projects">
        <CreateProject />
      </Route>
    </Switch>
  );
};

export default AdminRoute;

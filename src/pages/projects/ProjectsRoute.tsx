import { Switch, Route } from "react-router-dom";
import Projects from "./projects/Projects";
import Project from "./project/Project";

const ProjectsRoute = () => {
  return (
    <Switch>
      <Route exact path="/projects/link-e-1">
        <Projects />
      </Route>
      <Route exact path="/projects/link-e-1/:id">
        <Project />
      </Route>
    </Switch>
  );
};

export default ProjectsRoute;

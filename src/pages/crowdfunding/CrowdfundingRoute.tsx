import { Switch, Route } from "react-router-dom";
import Projects from "./projects/Projects";
import Project from "./project/Project";

const CrowdfundingRoute = () => {
  return (
    <Switch>
      <Route exact path="/crowdfunding/projects">
        <Projects />
      </Route>
      <Route exact path="/crowdfunding/projects/:id">
        <Project />
      </Route>
    </Switch>
  );
};

export default CrowdfundingRoute;

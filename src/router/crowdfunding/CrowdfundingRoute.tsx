import { Switch, Route } from "react-router-dom";
import { CrowdfundingProject, CrowdfundingProjects } from "pages";

const CrowdfundingRoute = () => {
  return (
    <Switch>
      <Route exact path="/crowdfunding">
        <CrowdfundingProjects />
      </Route>
      <Route exact path="/crowdfunding/:id">
        <CrowdfundingProject />
      </Route>
    </Switch>
  );
};

export default CrowdfundingRoute;

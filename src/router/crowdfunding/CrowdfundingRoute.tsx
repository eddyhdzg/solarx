import { Switch, Route } from "react-router-dom";
import { CrowdfundingProjectPage, CrowdfundingProjectsPage } from "pages";

const CrowdfundingRoute = () => {
  return (
    <Switch>
      <Route exact path="/crowdfunding">
        <CrowdfundingProjectsPage />
      </Route>
      <Route exact path="/crowdfunding/:id">
        <CrowdfundingProjectPage />
      </Route>
    </Switch>
  );
};

export default CrowdfundingRoute;

import { Switch, Route } from "react-router-dom";
import {
  CrowdfundingProjectPage,
  CrowdfundingProjectsPage,
  CheckoutPage,
} from "pages";

const CrowdfundingRoute = () => {
  return (
    <Switch>
      <Route exact path="/crowdfunding">
        <CrowdfundingProjectsPage />
      </Route>
      <Route exact path="/crowdfunding/:id">
        <CrowdfundingProjectPage />
      </Route>
      <Route exact path="/crowdfunding/:id/checkout">
        <CheckoutPage />
      </Route>
    </Switch>
  );
};

export default CrowdfundingRoute;

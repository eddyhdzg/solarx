import { Switch, Route } from "react-router-dom";
import { MoreAccountInformation, MorePreferences, MoreHome } from "pages";

const MoreRoute = () => {
  return (
    <Switch>
      <Route exact path="/more">
        <MoreHome />
      </Route>
      <Route exact path="/more/preferences">
        <MorePreferences />
      </Route>
      <Route exact path="/more/account-information">
        <MoreAccountInformation />
      </Route>
    </Switch>
  );
};

export default MoreRoute;

import { Switch, Route } from "react-router-dom";
import {
  MoreHomePage,
  PreferencesPage,
  AccountInformationPage,
  HistoryPage,
} from "pages";

const MoreRoute = () => {
  return (
    <Switch>
      <Route exact path="/more">
        <MoreHomePage />
      </Route>
      <Route exact path="/more/preferences">
        <PreferencesPage />
      </Route>
      <Route exact path="/more/history">
        <HistoryPage />
      </Route>
      <Route exact path="/more/profile">
        <AccountInformationPage />
      </Route>
    </Switch>
  );
};

export default MoreRoute;

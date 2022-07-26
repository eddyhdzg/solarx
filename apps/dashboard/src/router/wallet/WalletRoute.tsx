import { Switch, Route } from "react-router-dom";
import { WalletPage } from "components";

const WalletRoute = () => {
  return (
    <Switch>
      <Route exact path="/wallet">
        <WalletPage />
      </Route>
    </Switch>
  );
};

export default WalletRoute;

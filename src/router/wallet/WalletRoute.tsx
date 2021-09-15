import { Switch, Route } from "react-router-dom";
import { WalletHome } from "pages";

const WalletRoute = () => {
  return (
    <Switch>
      <Route exact path="/wallet">
        <WalletHome />
      </Route>
    </Switch>
  );
};

export default WalletRoute;

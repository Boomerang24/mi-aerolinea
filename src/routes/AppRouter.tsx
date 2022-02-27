import { Route, Switch } from "react-router-dom";
import { CheckDepartureScreen } from "../components/checkflights/CheckDepartureScreen";
import { CheckReturnScreen } from "../components/checkflights/CheckReturnScreen";
import { CheckoutScreen } from "../components/checkout/CheckoutScreen";
import { MainScreen } from "../components/mainscreen/MainScreen";
import { Navbar } from "../components/mainscreen/Navbar";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/checkout" component={CheckoutScreen} />
        <Route path="/check-departure" component={CheckDepartureScreen} />
        <Route path="/check-return" component={CheckReturnScreen} />

        <Route path="/*" component={MainScreen} />
      </Switch>
    </>
  );
};

import { Route, Switch } from "react-router-dom";
import { CheckFlightScreen } from "../components/checkflights/CheckFlightScreen";
import { CheckoutScreen } from "../components/checkout/CheckoutScreen";
import { MainScreen } from "../components/mainscreen/MainScreen";
import { Navbar } from "../components/mainscreen/Navbar";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/checkout" component={CheckoutScreen} />
        <Route path="/checkflight" component={CheckFlightScreen} />

        <Route path="/*" component={MainScreen} />
      </Switch>
    </>
  );
};

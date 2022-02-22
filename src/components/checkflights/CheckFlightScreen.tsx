import React from "react";
import { useHistory } from "react-router-dom";
import { CheckoutCard } from "../checkout/CheckoutCard";

export const CheckFlightScreen = () => {
  const history = useHistory();

  const goCheckout = () => {
    history.replace("/checkout");
  };

  return (
    <div className="screen-wrapper">
      <h1>Choose your departure flight</h1>
      <div className="checkflightscreen__flights-wrapper">
        <CheckoutCard />
        <CheckoutCard />
        <CheckoutCard />
        <CheckoutCard />
      </div>
      <h1>Choose your return flight</h1>
      <div className="checkflightscreen__flights-wrapper">
        <CheckoutCard />
        <CheckoutCard />
        <CheckoutCard />
        <CheckoutCard />
      </div>
      <button
        //TODO: create button styles
        className="mainscreen__flight-button checkflightscreen__confirm-button"
        onClick={goCheckout}
      >
        Confirm Selection
      </button>
    </div>
  );
};

import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CheckoutCard } from "../checkout/CheckoutCard";

export const CheckFlightScreen = () => {
  const history = useHistory();

  const { originCity, destinationCity } = useSelector(
    (state: RootStateOrAny) => state.cities
  );
  const { departureDate, returnDate } = useSelector(
    (state: RootStateOrAny) => state.flightDates
  );
  const { counter } = useSelector(
    (state: RootStateOrAny) => state.ticketCounter
  );

  const goCheckout = () => {
    history.replace("/checkout");
  };

  return (
    <div className="screen-wrapper">
      <h1>Choose your departure flight</h1>
      <div className="checkflightscreen__flights-wrapper">
        <CheckoutCard
          originCity={originCity}
          destinationCity={destinationCity}
          departureDate={departureDate}
          flightHour="8:00pm"
          ticketPrice={4700}
          ticketCounter={counter}
          returnDate={returnDate}
        />
        {/* <CheckoutCard /> */}
      </div>
      <h1>Choose your return flight</h1>
      <div className="checkflightscreen__flights-wrapper">
        {/* <CheckoutCard /> */}
        {/* <CheckoutCard /> */}
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

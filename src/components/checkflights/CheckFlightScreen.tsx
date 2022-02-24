import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CheckoutCard } from "../checkout/CheckoutCard";
import { CheckoutCardProps } from "../checkout/interfaces/interfaces";

export const CheckFlightScreen = () => {
  const history = useHistory();

  const goCheckout = () => {
    history.replace("/checkout");
  };

  const { availableFlights } = useSelector(
    (state: RootStateOrAny) => state.selectedFlights
  );

  return (
    <div className="screen-wrapper">
      <h1>Choose your departure flight</h1>
      <div className="checkflightscreen__flights-wrapper">
        {availableFlights.map(
          ({
            id,
            originCity,
            destinationCity,
            departureDate,
            flightHour,
            ticketPrice,
            passengers,
            returnDate,
            selected,
          }: CheckoutCardProps) => (
            <CheckoutCard
              key={id}
              originCity={originCity}
              destinationCity={destinationCity}
              departureDate={departureDate}
              flightHour={flightHour}
              ticketPrice={ticketPrice}
              passengers={passengers}
              returnDate={returnDate}
              selected={selected}
            />
          )
        )}
      </div>
      <h1>Choose your return flight</h1>
      <div className="checkflightscreen__flights-wrapper">
        <h1>Wuenas</h1>
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

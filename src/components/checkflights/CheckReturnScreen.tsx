import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setSelectedReturn } from "../../actions/selectedFlight";
import { FlightCheckoutCard } from "../checkout/CheckoutCard";
import { FlightProps } from "../checkout/interfaces/interfaces";

export const CheckReturnScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { departureFlight, availableFlights } = useSelector(
    (state: RootStateOrAny) => state.selectedFlights
  );

  const getSelectedFlight = availableFlights.find((flight: any) => {
    return flight.selected === true;
  });

  const goCheckout = () => {
    history.push("/checkout");
    dispatch(setSelectedReturn(getSelectedFlight));
  };

  return (
    <div className="screen-wrapper">
      <h1>Departure</h1>
      <div className="checkflightscreen__flights-wrapper disabled">
        <FlightCheckoutCard {...departureFlight} />
      </div>
      <h1>Choose your return flight</h1>
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
          }: FlightProps) => (
            <FlightCheckoutCard
              key={id}
              id={id}
              originCity={destinationCity}
              destinationCity={originCity}
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

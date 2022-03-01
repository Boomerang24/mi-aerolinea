import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setSelectedReturn } from "../../actions/selectedFlight";
import { FlightCheckoutCard } from "../checkout/CheckoutCard";
import { IFlights } from "../checkout/interfaces/interfaces";

export const CheckReturnScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  //TODO: Create store for departureFlights, returnFlights
  //TODO: dispatch to send Flights to store
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
            flightDate,
            roundTrip,
            flightHour,
            ticketPrice,
            passengers,
            selected,
          }: IFlights) => (
            <FlightCheckoutCard
              key={id}
              id={id}
              originCity={destinationCity}
              destinationCity={originCity}
              flightDate={flightDate}
              roundTrip={roundTrip}
              flightHour={flightHour}
              ticketPrice={ticketPrice}
              passengers={passengers}
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

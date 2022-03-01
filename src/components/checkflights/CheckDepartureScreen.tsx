import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  resetSelectedCards,
  setSelectedDeparture,
} from "../../actions/selectedFlight";
import { FlightCheckoutCard } from "../checkout/CheckoutCard";
import { IFlights } from "../checkout/interfaces/interfaces";

export const CheckDepartureScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  //TODO: Create store for departureFlights, returnFlights
  //TODO: dispatch to send Flights to store
  const { availableFlights } = useSelector(
    (state: RootStateOrAny) => state.selectedFlights
  );

  //TODO: Could be a hook
  const getSelectedFlight = availableFlights.find((flight: any) => {
    return flight.selected === true;
  });

  const handleConfirmFlight = () => {
    history.push("/check-return");
    dispatch(resetSelectedCards());
    dispatch(setSelectedDeparture(getSelectedFlight));
  };

  return (
    <div className="screen-wrapper">
      <h1>Choose your departure flight</h1>
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
        onClick={handleConfirmFlight}
      >
        Confirm Flight
      </button>
    </div>
  );
};

import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  resetSelectedCards,
  setSelectedDeparture,
} from "../../actions/selectedFlight";
import { CheckoutCard } from "../checkout/CheckoutCard";
import { CheckoutCardProps } from "../checkout/interfaces/interfaces";

export const CheckDepartureScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { availableFlights } = useSelector(
    (state: RootStateOrAny) => state.selectedFlights
  );

  //TODO: Could be a hook
  const getSelectedFlight = availableFlights.find((flight: any) => {
    return flight.selected === true;
  });

  const handleConfirmFlight = () => {
    history.replace("/check-return");
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
            departureDate,
            flightHour,
            ticketPrice,
            passengers,
            returnDate,
            selected,
          }: CheckoutCardProps) => (
            <CheckoutCard
              key={id}
              id={id}
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

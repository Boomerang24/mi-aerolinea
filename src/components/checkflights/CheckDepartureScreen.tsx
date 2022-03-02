import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  resetSelectedCards,
  setAvailableFlights,
  setSelectedDeparture,
} from "../../actions/selectedFlight";
import { useFlights } from "../../hooks/useFlights";
import { FlightCheckoutCard } from "../checkout/CheckoutCard";
import { IFlights } from "../checkout/interfaces/interfaces";

export const CheckDepartureScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { availableFlights } = useSelector(
    (state: RootStateOrAny) => state.selectedFlights
  );

  const { passengers } = useSelector((state: RootStateOrAny) => state.tickets);

  const { originCity, destinationCity } = useSelector(
    (state: RootStateOrAny) => state.cities
  );
  const { departureDate, returnDate } = useSelector(
    (state: RootStateOrAny) => state.flightDates
  );
  const getSelectedFlight = availableFlights.find((flight: any) => {
    return flight.selected === true;
  });

  const handleConfirmFlight = () => {
    history.push("/check-return");
    dispatch(resetSelectedCards());
    dispatch(setSelectedDeparture(getSelectedFlight));
    const { returnFlights } = useFlights({
      originCity,
      passengers,
      destinationCity,
      departureDate,
      returnDate,
    });
    dispatch(setAvailableFlights(returnFlights));
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
              originCity={originCity}
              destinationCity={destinationCity}
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
        className="mainscreen__flight-button checkflightscreen__confirm-button"
        onClick={handleConfirmFlight}
      >
        Confirm Flight
      </button>
    </div>
  );
};

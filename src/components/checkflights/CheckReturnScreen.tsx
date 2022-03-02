import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setSelectedReturn } from "../../actions/selectedFlight";
import { uiCloseModal } from "../../actions/ui";
import { FlightCheckoutCard } from "../checkout/CheckoutCard";
import { IFlights } from "../checkout/interfaces/interfaces";

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
    dispatch(uiCloseModal());
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
        onClick={goCheckout}
      >
        Confirm Selection
      </button>
    </div>
  );
};

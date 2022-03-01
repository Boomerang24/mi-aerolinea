import { FlightProps } from "../components/checkout/interfaces";
import { types } from "../types";

export type SelectedFlightAction = {
  type: string;
  payload: FlightProps;
};

export const setSelectedDeparture = (flight: FlightProps) => {
  return {
    type: types.selectedDepartureFlight,
    payload: flight,
  };
};

export const setSelectedReturn = (flight: FlightProps) => {
  return {
    type: types.selectedReturnFlight,
    payload: flight,
  };
};

export const setAvailableFlights = (flights: FlightProps[]) => {
  return {
    type: types.availableFlights,
    payload: flights,
  };
};

export const setSelectedCard = (card: FlightProps) => ({
  type: types.toggleSelectedCard,
  payload: card,
});

export const resetSelectedCards = () => ({ type: types.resetSelectedCards });

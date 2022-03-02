import { IFlights } from "../components/checkout/interfaces";
import { types } from "../types";

export type SelectedFlightAction = {
  type: string;
  payload: IFlights;
};

export const setSelectedDeparture = (flight: IFlights) => {
  return {
    type: types.selectedDepartureFlight,
    payload: flight,
  };
};

export const setSelectedReturn = (flight: IFlights) => {
  return {
    type: types.selectedReturnFlight,
    payload: flight,
  };
};

export const setAvailableFlights = (flights: IFlights[]) => {
  return {
    type: types.availableFlights,
    payload: flights,
  };
};

export const resetSelectedFlights = () => ({
  type: types.resetSelectedFlights,
});

export const setSelectedCard = (card: IFlights) => ({
  type: types.toggleSelectedCard,
  payload: card,
});

export const resetSelectedCards = () => ({ type: types.resetSelectedCards });

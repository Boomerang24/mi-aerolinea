import { CheckoutCardProps } from "../components/checkout/interfaces/interfaces";
import { types } from "../types/types";

export type SelectedFlightAction = {
  type: string;
  payload: CheckoutCardProps;
};

export const setSelectedDeparture = (flight: CheckoutCardProps) => {
  return {
    type: types.selectedDepartureFlight,
    payload: flight,
  };
};

export const setSelectedReturn = (flight: CheckoutCardProps) => {
  return {
    type: types.selectedReturnFlight,
    payload: flight,
  };
};

export const setAvailableFlights = (flights: CheckoutCardProps[]) => {
  return {
    type: types.availableFlights,
    payload: flights,
  };
};

export const setSelectedCard = (card: CheckoutCardProps) => ({
  type: types.toggleSelectedCard,
  payload: card,
});

export const resetSelectedCards = () => ({ type: types.resetSelectedCards });

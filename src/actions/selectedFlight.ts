import { types } from "../types/types";

export type SelectedFlightAction = {
  type: string;
  payload: string;
};

export const setSelectedDeparture = (flight: string) => {
  return {
    type: types.selectedDepartureFlight,
    payload: flight,
  };
};

export const setSelectedReturn = (flight: string) => {
  return {
    type: types.selectedReturnFlight,
    payload: flight,
  };
};

export const setAvailableFlights = (flights: any) => {
  return {
    type: types.availableFlights,
    payload: flights,
  };
};

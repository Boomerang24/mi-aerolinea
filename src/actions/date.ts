import { types } from "../types/types";

export type DateAction = {
  type: string;
  payload: string;
};

export const setDeparture = (date: string): DateAction => {
  return {
    type: types.departureDate,
    payload: date,
  };
};

export const setReturn = (date: string): DateAction => ({
  type: types.returnDate,
  payload: date,
});

export const setFlightType = (flight: string): DateAction => ({
  type: types.flightType,
  payload: flight,
});

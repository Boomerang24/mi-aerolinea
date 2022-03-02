import { types } from "../types";
import { Action } from "./interfaces";

export const setDeparture = (date: string): Action<string> => ({
  type: types.departureDate,
  payload: date,
});

export const setReturn = (date: string): Action<string> => ({
  type: types.returnDate,
  payload: date,
});

export const setFlightType = (flight: string): Action<string> => ({
  type: types.flightType,
  payload: flight,
});

export const resetDates = () => ({ type: types.resetDates });

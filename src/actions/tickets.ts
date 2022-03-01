import { types } from "../types";
import { Action } from "./interfaces";

export const doPassengerIncrease = (value: number): Action<number> => ({
  type: types.passengersIncrease,
  payload: value,
});

export const doPassengerDecrease = (value: number): Action<number> => ({
  type: types.passengersDecrease,
  payload: value,
});

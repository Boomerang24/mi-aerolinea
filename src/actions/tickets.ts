import { types } from "../types/types";

export type CounterAction = { type: string; payload: { value: number } };

export const doPassengerIncrease = (value: number): CounterAction => ({
  type: types.passengersIncrease,
  payload: { value },
});

export const doPassengerDecrease = (value: number): CounterAction => ({
  type: types.passengersDecrease,
  payload: { value },
});

export const getFlightPrice = (value: number): CounterAction => ({
  type: types.getFlightPrice,
  payload: { value },
});

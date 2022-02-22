import { types } from "../types/types";

export type CounterAction = { type: string; payload: { value: number } };

export const doCounterIncrease = (value: number): CounterAction => ({
  type: types.counterIncrease,
  payload: { value },
});

export const doCounterDecrease = (value: number): CounterAction => ({
  type: types.counterDecrease,
  payload: { value },
});

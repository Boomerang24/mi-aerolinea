import { types } from "../types/types";
import { CounterAction } from "../actions/counter";

export const initialCounter = {
  counter: 1,
};

export const counterReducer = (
  state = initialCounter,
  action: CounterAction
) => {
  const { counter } = state;

  switch (action.type) {
    case types.counterIncrease:
      return {
        counter: counter + action.payload.value,
      };

    case types.counterDecrease:
      return {
        counter: counter - action.payload.value,
      };

    default:
      return state;
  }
};

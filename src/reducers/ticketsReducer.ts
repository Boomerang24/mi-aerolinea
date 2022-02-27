import { types } from "../types/types";
import { CounterAction } from "../actions/tickets";

export const initialCounter = {
  passengers: 1,
};

export const ticketsReducer = (
  state = initialCounter,
  action: CounterAction
) => {
  const { passengers } = state;

  switch (action.type) {
    case types.passengersIncrease:
      return {
        passengers: passengers + action.payload.value,
      };

    case types.passengersDecrease:
      return {
        passengers: passengers - action.payload.value,
      };

    default:
      return state;
  }
};

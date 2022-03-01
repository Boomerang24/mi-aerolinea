import { types } from "../types/types";
import { Action } from "../actions/interfaces";

export const initialCounter = {
  passengers: 1,
};

export const ticketsReducer = (
  state = initialCounter,
  action: Action<number>
) => {
  const { passengers } = state;

  switch (action.type) {
    case types.passengersIncrease:
      return {
        passengers: passengers + action.payload,
      };

    case types.passengersDecrease:
      return {
        passengers: passengers - action.payload,
      };

    default:
      return state;
  }
};

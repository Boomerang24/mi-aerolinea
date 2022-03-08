import { types } from "../types/types";
import { Action } from "../actions/interfaces";

export const initialCounter = {
  passengers: 1,
  totalToPay: 0,
};

export const ticketsReducer = (
  state = initialCounter,
  action: Action<number>
) => {
  const { passengers } = state;

  switch (action.type) {
    case types.passengersIncrease:
      return {
        ...state,
        passengers: passengers + action.payload,
      };

    case types.passengersDecrease:
      return {
        ...state,
        passengers: passengers - action.payload,
      };

    case types.totalTicketPrice:
      return {
        ...state,
        totalToPay: action.payload,
      };

    case types.resetPassengers:
      return initialCounter;

    default:
      return state;
  }
};

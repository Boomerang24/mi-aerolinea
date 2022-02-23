import { DateAction } from "../actions/date";
import { types } from "../types/types";

const initialDates = {
  departureDate: new Date().toDateString(),
  returnDate: "",
  flightType: null,
};

export const dateReducer = (state = initialDates, action: DateAction) => {
  switch (action.type) {
    case types.departureDate:
      return {
        ...state,
        departureDate: action.payload,
        returnDate: initialDates.returnDate,
      };

    case types.returnDate:
      return {
        ...state,
        returnDate: action.payload,
      };

    case types.flightType:
      return {
        ...state,
        flightType: action.payload,
      };

    case types.resetDates:
      return initialDates;

    default:
      return state;
  }
};

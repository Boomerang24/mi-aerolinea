import { SelectedFlightAction } from "../actions/selectedFlight";
import { types } from "../types/types";

const initialSelectedFlights = {
  departureFlight: "",
  returnFlight: "",
  availableFlights: [],
};

export const selectedFlightsReducer = (
  state = initialSelectedFlights,
  action: SelectedFlightAction
) => {
  switch (action.type) {
    case types.selectedDepartureFlight:
      return {
        ...state,
        departureFlight: action.payload,
      };

    case types.selectedReturnFlight:
      return {
        ...state,
        returnFlight: action.payload,
      };

    case types.availableFlights:
      return {
        ...state,
        availableFlights: action.payload,
      };

    default:
      return state;
  }
};

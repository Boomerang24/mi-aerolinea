import { SelectedFlightAction } from "../actions/selectedFlight";
import { IFlights } from "../components/checkout/interfaces/interfaces";
import { types } from "../types";

const initialSelectedFlights = {
  departureFlight: "",
  returnFlight: "",
  availableFlights: [] as IFlights[],
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

    case types.toggleSelectedCard:
      return {
        ...state,
        availableFlights: state.availableFlights.map((flight) =>
          flight.id === action.payload.id
            ? { ...action.payload, selected: true }
            : flight
        ),
      };

    case types.deleteDepartureCard:
      return {
        ...state,
        departureFlight: "",
      };

    case types.deleteReturnCard:
      return {
        ...state,
        returnFlight: "",
      };

    case types.resetSelectedCards:
      return {
        ...state,
        availableFlights: state.availableFlights.map(
          (flight) => (flight = { ...flight, selected: false })
        ),
      };

    case types.resetSelectedFlights:
      return initialSelectedFlights;

    default:
      return state;
  }
};

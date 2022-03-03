import { Action, ICity } from "../actions/interfaces";
import { types } from "../types";

const initialCities = {
  availableCities: [] as ICity[],
  originCity: "",
  destinationCity: "",
  cityType: null,
};

export const citiesReducer = (
  state = initialCities,
  action: Action<(string | number)[]>
) => {
  switch (action.type) {
    case types.loadCities:
      return {
        ...state,
        availableCities: [...action.payload],
      };

    case types.originCity:
      return {
        ...state,
        originCity: action.payload,
      };

    case types.destinationCity:
      return {
        ...state,
        destinationCity: action.payload,
      };

    case types.cityType:
      return {
        ...state,
        cityType: action.payload,
      };

    case types.resetCities:
      return initialCities;

    default:
      return state;
  }
};

import { CityAction } from "../actions/cities";
import { types } from "../types/types";

const initialCities = {
  originCity: "",
  destinationCity: "",
  cityType: null,
};

export const citiesReducer = (state = initialCities, action: CityAction) => {
  switch (action.type) {
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

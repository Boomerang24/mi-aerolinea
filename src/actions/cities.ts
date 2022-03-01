import { types } from "../types";
import { Action } from "./interfaces";

export const setOriginCity = (
  city: string | number
): Action<string | number> => {
  return {
    type: types.originCity,
    payload: city,
  };
};

export const setDestinationCity = (
  city: string | number
): Action<string | number> => {
  return {
    type: types.destinationCity,
    payload: city,
  };
};

export const setCityType = (cityLocation: string): Action<string | number> => {
  return {
    type: types.cityType,
    payload: cityLocation,
  };
};

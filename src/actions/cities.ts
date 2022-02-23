import { types } from "../types/types";

export type CityAction = {
  type: string;
  payload: string | unknown;
};

export const setOriginCity = (city: string | unknown): CityAction => {
  return {
    type: types.originCity,
    payload: city,
  };
};

export const setDestinationCity = (city: string | unknown): CityAction => {
  return {
    type: types.destinationCity,
    payload: city,
  };
};

export const setCityType = (cityLocation: string): CityAction => {
  return {
    type: types.cityType,
    payload: cityLocation,
  };
};

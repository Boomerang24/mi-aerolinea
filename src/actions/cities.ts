import { loadCities } from "../helpers/loadCities";
import { types } from "../types";
import { Action } from "./interfaces";

export const startLoadingCities = () => {
  return async (dispatch: any) => {
    //TODO: Check dispatch type
    // : (arg0: { type: string; payload: ICity[] }) => void
    const storeCities = await loadCities();
    dispatch(setCities(storeCities));
  };
};

const setCities = (citiesId: { id: string }[]) => ({
  type: types.loadCities,
  payload: citiesId,
});

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

export const resetCities = () => ({ type: types.resetCities });

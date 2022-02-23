import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";
import { counterReducer } from "./counterReducer";
import { dateReducer } from "./dateReducer";
import { citiesReducer } from "./citiesReducer";

export const rootReducer = combineReducers({
  ui: uiReducer,
  cities: citiesReducer,
  ticketCounter: counterReducer,
  flightDates: dateReducer,
});

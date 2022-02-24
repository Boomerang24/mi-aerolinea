import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";
import { ticketsReducer } from "./ticketsReducer";
import { dateReducer } from "./dateReducer";
import { citiesReducer } from "./citiesReducer";
import { selectedFlightsReducer } from "./selectedFlightsReducer";

export const rootReducer = combineReducers({
  ui: uiReducer,
  cities: citiesReducer,
  tickets: ticketsReducer,
  flightDates: dateReducer,
  selectedFlights: selectedFlightsReducer,
});

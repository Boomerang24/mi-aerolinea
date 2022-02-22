import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";
import { counterReducer } from "./counterReducer";
import { dateReducer } from "./dateReducer";

export const rootReducer = combineReducers({
  ui: uiReducer,
  ticketCounter: counterReducer,
  flightDates: dateReducer,
});

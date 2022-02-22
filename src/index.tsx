import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MyAirline from "./MyAirline";
import { store } from "./store/store";

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <BrowserRouter>
        <MyAirline />
      </BrowserRouter>
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);

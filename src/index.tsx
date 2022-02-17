import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MyAirline from './MyAirline';

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <MyAirline />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);

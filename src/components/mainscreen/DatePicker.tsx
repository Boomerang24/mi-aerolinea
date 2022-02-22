import React, { ChangeEventHandler, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { setDeparture, setReturn } from "../../actions/date";
import { uiCloseModal } from "../../actions/ui";

export const DatePicker = () => {
  const dispatch = useDispatch();

  const { flightType, departureDate } = useSelector(
    (state: RootStateOrAny) => state.flightDates
  );

  const handleDate = (value: Date) => {
    if (flightType === "departure") {
      dispatch(setDeparture(value.toDateString()));
    } else {
      dispatch(setReturn(value.toDateString()));
    }
    dispatch(uiCloseModal());
  };

  const [value] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={handleDate}
        value={value}
        minDate={new Date(departureDate)}
      />
    </div>
  );
};

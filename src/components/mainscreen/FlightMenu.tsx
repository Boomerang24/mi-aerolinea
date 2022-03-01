import { MouseEvent } from "react";
import { ImAirplane } from "react-icons/im";
import { useHistory } from "react-router-dom";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import { CalendarModal } from "./CalendarModal";
import { CityPicker } from "./CityPicker";
import { PassengersButtons } from "./PassengersButtons";

import { uiOpenModal } from "../../actions/ui";
import { setFlightType } from "../../actions/date";
import { useFlights } from "../../hooks/useFlights";
import { setAvailableFlights } from "../../actions/selectedFlight";

export const FlightMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { passengers } = useSelector((state: RootStateOrAny) => state.tickets);

  const { originCity, destinationCity } = useSelector(
    (state: RootStateOrAny) => state.cities
  );
  const { departureDate, returnDate } = useSelector(
    (state: RootStateOrAny) => state.flightDates
  );

  const goCheckDeparture = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    history.push("/check-departure");
    const { departureFlights } = useFlights({
      originCity,
      passengers,
      destinationCity,
      departureDate,
      returnDate,
    });
    dispatch(setAvailableFlights(departureFlights));
  };

  const handleFlight = (flightType: string) => {
    dispatch(setFlightType(flightType));
    dispatch(uiOpenModal());
  };

  return (
    <div className="mainscreen__flight-menu">
      <div className="mainscreen__flight-wrapper">
        <div className="mainscreen__places">
          <h3>Origin</h3>
          <CityPicker site="origin" />
        </div>
        <div className="mainscreen__places">
          <h3>Destination</h3>
          <CityPicker site="destination" />
        </div>
      </div>
      <div className="mainscreen__flight-wrapper">
        <div
          className="mainscreen__dates pointer"
          onClick={() => handleFlight("departure")}
        >
          <h3>Departure</h3>
          <p>{departureDate}</p>
          <hr />
        </div>
        <div
          className="mainscreen__dates pointer"
          onClick={() => handleFlight("return")}
        >
          <h3>Return</h3>
          <p>{returnDate}</p>
          <hr />
        </div>
        <CalendarModal />
      </div>
      <div className="mainscreen__wrapper-people_buttton">
        <div className="mainscreen__people">
          <h4>Passengers</h4>
          <PassengersButtons />
        </div>
        <button
          className="mainscreen__flight-button"
          onClick={goCheckDeparture}
        >
          Search flights{" "}
          <span>
            <ImAirplane />
          </span>
        </button>
      </div>
    </div>
  );
};

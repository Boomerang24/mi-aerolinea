import { useDispatch } from "react-redux";
import {
  resetSelectedCards,
  setSelectedCard,
} from "../../actions/selectedFlight";
import { FlightProps } from "./interfaces";

export const FlightCheckoutCard = ({ ...props }: FlightProps) => {
  const {
    originCity,
    destinationCity,
    departureDate,
    flightHour,
    ticketPrice,
    passengers,
    selected,
  } = props;

  const total = ticketPrice * passengers;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetSelectedCards());
    dispatch(setSelectedCard(props));
  };

  return (
    <div
      className={`checkoutcard__card-wrapper pointer ${
        selected && "checkoutcard__selected-card"
      }`}
      onClick={() => handleClick()}
    >
      <div className="checkoutcard__card-origin-destination">
        <p>Origin</p>
        <p>Destination</p>
      </div>
      <div className="checkoutcard__card-origin-destination mt-10">
        <h4>{originCity}</h4>
        <h4>{destinationCity}</h4>
      </div>
      <hr />
      <div className="checkoutcard__card-details">
        <div className="checkoutcard__card-details-wrapper">
          <p>Date of flight</p>
          {/* //TODO: date is static */}
          <span>{departureDate}</span>
        </div>
        <div className="checkoutcard__card-details-wrapper">
          <p>Time of flight</p>
          <p>{flightHour}</p>
        </div>
        <div className="checkoutcard__card-details-wrapper">
          <p>Flight Price</p>
          <p>{ticketPrice}</p>
        </div>
        <div className="checkoutcard__card-details-wrapper">
          <p>Passengers</p>
          <p>{passengers}</p>
        </div>
      </div>
      <hr />
      <div className="checkoutcard__card-summary">
        <span>Total - $ {total}</span>
      </div>
    </div>
  );
};

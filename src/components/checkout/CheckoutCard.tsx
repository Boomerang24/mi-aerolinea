import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
  deleteDepartureCard,
  deleteReturnCard,
  resetSelectedCards,
  setSelectedCard,
} from "../../actions/selectedFlight";
import { IFlights } from "./interfaces";

export const FlightCheckoutCard = ({ ...props }: IFlights) => {
  const { departureFlight } = useSelector(
    (state: RootStateOrAny) => state.selectedFlights
  );

  const {
    originCity,
    destinationCity,
    flightDate,
    flightHour,
    ticketPrice,
    passengers,
    selected,
    deleteCard,
  } = props;

  const total = ticketPrice * passengers;

  const dispatch = useDispatch();

  const handleDelete = () => {
    if (departureFlight !== "") {
      dispatch(deleteDepartureCard());
    } else {
      dispatch(deleteReturnCard());
    }
  };

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
          <span>{flightDate}</span>
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
        {deleteCard && (
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete Flight
          </button>
        )}
        <span>Total - $ {!ticketPrice ? "0" : total}</span>
      </div>
    </div>
  );
};

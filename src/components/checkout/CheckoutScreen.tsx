import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { FlightCheckoutCard } from "./CheckoutCard";
import { CheckoutModal } from "./CheckoutModal";
import { uiOpenModal } from "../../actions/ui";
import { totalTicketPrice } from "../../actions/tickets";
import { useEffect } from "react";

export const CheckoutScreen = () => {
  const dispatch = useDispatch();

  const { departureFlight, returnFlight } = useSelector(
    (state: RootStateOrAny) => state.selectedFlights
  );

  const { ticketPrice: departureTicket } = departureFlight;
  const { ticketPrice: returnTicket } = returnFlight;
  const { passengers } = useSelector((state: RootStateOrAny) => state.tickets);

  const emptyFlights = departureFlight === "" && returnFlight === "";

  useEffect(() => {
    let grandTotal;
    if (departureFlight === "") {
      grandTotal = returnTicket * passengers;
      dispatch(totalTicketPrice(grandTotal));
    }
    if (returnFlight === "") {
      grandTotal = departureTicket * passengers;
      dispatch(totalTicketPrice(grandTotal));
    }
    if (departureFlight !== "" && returnFlight !== "") {
      grandTotal = (departureTicket + returnTicket) * passengers;
      dispatch(totalTicketPrice(grandTotal));
    }
  }, [departureFlight, returnFlight]);

  const toggleModalReducer = () => {
    dispatch(uiOpenModal());
  };

  return (
    <div className="screen-wrapper">
      <h1>Current reservations</h1>
      <div className="checkflightscreen__flights-wrapper">
        {departureFlight && (
          <FlightCheckoutCard {...departureFlight} deleteCard />
        )}
        {returnFlight && <FlightCheckoutCard {...returnFlight} deleteCard />}
      </div>
      <button
        className={`mainscreen__flight-button ${emptyFlights && `disabled`}`}
        onClick={toggleModalReducer}
        disabled={emptyFlights}
      >
        Complete Purchase
      </button>

      <CheckoutModal />
    </div>
  );
};

import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { FlightCheckoutCard } from "./CheckoutCard";
import { CheckoutModal } from "./CheckoutModal";
import { uiOpenModal } from "../../actions/ui";

export const CheckoutScreen = () => {
  const dispatch = useDispatch();

  const { departureFlight, returnFlight } = useSelector(
    (state: RootStateOrAny) => state.selectedFlights
  );

  const emptyFlights = departureFlight === "" && returnFlight === "";

  const toggleModalReducer = () => {
    dispatch(uiOpenModal());
  };

  return (
    <div className="screen-wrapper">
      <h1>Current reservations - 2</h1>
      <div className="checkflightscreen__flights-wrapper disabled">
        <FlightCheckoutCard {...departureFlight} />
        <FlightCheckoutCard {...returnFlight} />
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

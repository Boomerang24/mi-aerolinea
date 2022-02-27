import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { CheckoutCard } from "./CheckoutCard";
import { CheckoutModal } from "./CheckoutModal";
import { uiOpenModal } from "../../actions/ui";

export const CheckoutScreen = () => {
  const dispatch = useDispatch();

  const { departureFlight, returnFlight } = useSelector(
    (state: RootStateOrAny) => state.selectedFlights
  );

  const toggleModalReducer = () => {
    dispatch(uiOpenModal());
  };

  return (
    <div className="screen-wrapper">
      <h1>Current reservations - 2</h1>
      <div className="checkflightscreen__flights-wrapper">
        <CheckoutCard {...departureFlight} />
        <CheckoutCard {...returnFlight} />
      </div>
      <button
        //TODO: create button styles
        className="mainscreen__flight-button"
        onClick={toggleModalReducer}
      >
        Complete Purchase
      </button>
      <CheckoutModal />
    </div>
  );
};

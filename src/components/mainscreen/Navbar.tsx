import { FaLuggageCart } from "react-icons/fa";
import { MdOutlineAirplaneTicket } from "react-icons/md";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { resetCities } from "../../actions/cities";
import { resetDates } from "../../actions/date";
import { resetSelectedFlights } from "../../actions/selectedFlight";
import { resetPassengers } from "../../actions/tickets";

export const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { departureFlight, returnFlight } = useSelector(
    (state: RootStateOrAny) => state.selectedFlights
  );

  const goHome = () => {
    history.push("/");
    dispatch(resetDates());
    dispatch(resetCities());
    dispatch(resetPassengers());
    dispatch(resetSelectedFlights());
  };

  const goCheckout = () => {
    if (departureFlight === "" && returnFlight === "") {
      Swal.fire("", "There are no current reservations", "info");
    } else {
      history.push("/checkout");
    }
  };

  return (
    <div className="mainscreen__navbar">
      <div className="mainscreen__home-logo pointer" onClick={goHome}>
        miAerolinea
        <MdOutlineAirplaneTicket />
      </div>
      <div className="mainscreen__checkout pointer" onClick={goCheckout}>
        <FaLuggageCart className="mainscreen__cart-logo" />
        <span className="hide-element_medium-breakpoint">Checkout</span>
      </div>
    </div>
  );
};

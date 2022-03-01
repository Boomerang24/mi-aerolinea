import { FaLuggageCart } from "react-icons/fa";
import { MdOutlineAirplaneTicket } from "react-icons/md";
import { useHistory } from "react-router-dom";

export const Navbar = () => {
  const history = useHistory();

  const goHome = () => {
    history.push("/");
  };

  const goCheckout = () => {
    history.push("/checkout");
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

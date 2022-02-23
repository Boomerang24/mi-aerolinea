import { CheckoutCardProps } from "./interfaces/interfaces";

export const CheckoutCard = ({ ...props }: CheckoutCardProps) => {
  const {
    originCity,
    destinationCity,
    departureDate,
    flightHour,
    ticketPrice,
    ticketCounter,
  } = props;

  const total = ticketPrice * ticketCounter;

  return (
    <div className="checkoutcard__card-wrapper">
      <div className="checkoutcard__card-origin-destination">
        <p>Origin</p>
        <p>Destination</p>
      </div>
      <div className="checkoutcard__card-origin-destination">
        <h3>{originCity}</h3>
        <h3>{destinationCity}</h3>
      </div>
      <hr />
      <div className="checkoutcard__card-details">
        <div className="checkoutcard__card-details-wrapper">
          <p>Date of flight</p>
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
          <p>{ticketCounter}</p>
        </div>
      </div>
      <hr />
      <div className="checkoutcard__card-summary">
        <span>Total - $ {total}</span>
      </div>
    </div>
  );
};

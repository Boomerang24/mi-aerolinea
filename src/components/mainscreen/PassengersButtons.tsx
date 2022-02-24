import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
  doPassengerIncrease,
  doPassengerDecrease,
} from "../../actions/tickets";

export const PassengersButtons = () => {
  const dispatch = useDispatch();

  const { passengers } = useSelector((state: RootStateOrAny) => state.tickets);

  const PassengersIncrease = () => {
    dispatch(doPassengerIncrease(1));
  };

  const PassengersDecrease = () => {
    passengers >= 1 && dispatch(doPassengerDecrease(1));
  };

  return (
    <div className="buttonsContainer">
      <button
        className="buttonMinus"
        disabled={!passengers}
        onClick={() => PassengersDecrease()}
      >
        -
      </button>
      <div className="countLabel">{passengers}</div>
      <button className="buttonAdd" onClick={() => PassengersIncrease()}>
        +
      </button>
    </div>
  );
};

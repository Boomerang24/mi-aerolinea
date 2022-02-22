import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { doCounterIncrease, doCounterDecrease } from "../../actions/counter";

export const PassengersButtons = () => {
  const dispatch = useDispatch();

  const { counter } = useSelector(
    (state: RootStateOrAny) => state.ticketCounter
  );

  const counterIncrease = () => {
    dispatch(doCounterIncrease(1));
  };

  const counterDecrease = () => {
    counter >= 1 && dispatch(doCounterDecrease(1));
  };

  return (
    <div className="buttonsContainer">
      <button
        className="buttonMinus"
        disabled={!counter}
        onClick={() => counterDecrease()}
      >
        -
      </button>
      <div className="countLabel">{counter}</div>
      <button className="buttonAdd" onClick={() => counterIncrease()}>
        +
      </button>
    </div>
  );
};

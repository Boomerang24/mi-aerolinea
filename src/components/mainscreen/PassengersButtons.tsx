import { useState } from 'react';

export const PassengersButtons = () => {

    const [counter, setCounter] = useState(0);

    const handleCounter = () => {
        setCounter( (prev) => prev + 1);
    }

    return (
        <div className="buttonsContainer">
           <button
                className="buttonMinus"
           >
                -
            </button> 
           <div className="countLabel">{ counter }</div>
            <button
                 className="buttonAdd"
                 onClick={ handleCounter }
            >
               +
            </button>
        </div>
    )
}

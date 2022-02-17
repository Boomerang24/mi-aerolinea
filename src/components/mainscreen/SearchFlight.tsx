import { ImAirplane } from 'react-icons/im';
import CityPicker from './CityPicker';
import { PassengersButtons } from './PassengersButtons';

export const SearchFlight = () => {
    return (
        <div className="mainscreen__flight-menu">
            <div className='mainscreen__flight-wrapper'>
                <div className="mainscreen__places">
                    <h3>Origin</h3>
                    <CityPicker />
                </div>
                <div className="mainscreen__places">
                    <h3>Destination</h3>
                    <CityPicker />
                </div>
            </div>
            <div className="mainscreen__flight-wrapper">
                <div className='mainscreen__dates'>
                    <h3>Departure</h3>
                    <p>Thur Feb 17, 2022</p>
                    <hr />
                </div>
                <div className='mainscreen__dates'>
                    <h3>Return</h3>
                    <p>Sat Feb 19, 2022</p>
                    <hr />
                </div>
                {/* <DatePicker /> */}
            </div>
            <div className="mainscreen__wrapper-people_buttton">
                <div className="mainscreen__people">
                    <h4>Passengers</h4>
                    <PassengersButtons />
                </div>
                <button className='mainscreen__flight-button'>
                    Search flights <span><ImAirplane /></span>
                </button>
            </div>
        </div>
    )
}

import { ImAirplane } from 'react-icons/im';
import CityPicker from './CityPicker';
import DateTimePicker from './DateTimePicker';
import Passengers from './Passengers';

export const SearchFlight = () => {
    return (
        <div className="mainscreen__flight-menu">
            <div className="mainscreen__places">
                <h3>Origin</h3>
                <CityPicker />
            </div>
            <div className="mainscreen__places">
                <h3>Destination</h3>
                <CityPicker />
                {/* <span>Destination</span> */}
            </div>
            <div className="mainscreen__dates">
                <DateTimePicker dateLabel='Destination Date'/>
            </div>
            <div className="mainscreen__dates">
                <DateTimePicker dateLabel='Return Date'/>
            </div>
            <div className="mainscreen__people">
                <Passengers />
            </div>
            <button className='mainscreen__flight-button'>
                Search flights <span><ImAirplane /></span>
            </button>
        </div>
    )
}

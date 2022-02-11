import { IoMdArrowDropdown } from 'react-icons/io'
import { ImAirplane } from 'react-icons/im';
import { TravelSlider } from './TravelSlider';

export const SearchFlight = () => {
    return (
        <div className="mainscreen__searchflight">
            <div className="limit-background">
                <div className="mainscreen__places">
                    <h3>-City-</h3>
                    <span>Origin</span>
                </div>
                <div className="mainscreen__places">
                    <h3>-City-</h3>
                    <span>Destination</span>
                </div>
                <div className="mainscreen__dates">
                    <span>Departure</span>
                    <h3>Sat, 12 feb, 2022</h3>
                </div>
                <div className="mainscreen__dates">
                    <span>Return</span>
                    <h3>Sun, 13 feb, 2022</h3>
                </div>
                <div className="mainscreen__people">
                    <div>
                        <span>Passangers</span>
                        <p>1 Adult</p>
                    </div>
                    <IoMdArrowDropdown />
                </div>
                <button className='mainscreen__flight-button'>
                    Search flights <span><ImAirplane /></span>
                </button>
            </div>
            <div className="gallery">
                <TravelSlider />
            </div>
        </div>
    )
}

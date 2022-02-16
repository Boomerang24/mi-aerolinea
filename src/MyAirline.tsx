import './styles/styles.scss';
import { Navbar } from './components/mainscreen/Navbar';
import { SearchFlight } from './components/mainscreen/SearchFlight';
import { PopularDestinations } from './components/mainscreen/PopularDestinations';
import { TravelSlider } from './components/mainscreen/TravelSlider';
import { SliderData } from './data/SliderData';
import { CheckoutScreen } from './components/checkout/CheckoutScreen';
import { CheckoutModal } from './components/checkout/CheckoutModal';


function MyAirline() {
  return (
    <>
      <Navbar />
      <div className="mainscreen__searchflight">
        <SearchFlight />
        <TravelSlider slides={ SliderData }/>
      </div>
      <PopularDestinations />
      {/* <CheckoutScreen />
      <CheckoutModal /> */}
    </>
  );
}

export default MyAirline;

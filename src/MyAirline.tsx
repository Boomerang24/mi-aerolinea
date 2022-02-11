import './styles/styles.scss';
import { Navbar } from './components/mainscreen/Navbar';
import { SearchFlight } from './components/mainscreen/SearchFlight';
import { PopularDestinations } from './components/mainscreen/PopularDestinations';


function MyAirline() {
  return (
    <>
      <Navbar />
      <SearchFlight />
      <PopularDestinations />
    </>
  );
}

export default MyAirline;

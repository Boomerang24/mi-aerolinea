import { IFlights } from "../components/checkout/interfaces";
import { cities } from "../data/citiesData";
import { flightHours } from "../data/flightHours";

interface useFlightsProps {
  originCity: number | string;
  passengers: number;
  destinationCity: number | string;
  departureDate: string;
  returnDate: string;
}

interface useFlightsReturn {
  departureFlights: IFlights[];
  returnFlights: IFlights[];
}

export const useFlights = ({
  originCity,
  passengers,
  destinationCity,
  departureDate,
  returnDate,
}: useFlightsProps): useFlightsReturn => {
  const selectedCity = cities.filter((city) => city.id === originCity);
  const destinationName = cities.filter((city) => city.id === destinationCity);

  const departureFlights = flightHours.map((hour, id) => ({
    id: id,
    originCity: selectedCity[0].name,
    destinationCity: destinationName[0].name,
    flightDate: departureDate,
    roundTrip: false,
    flightHour: hour,
    ticketPrice: selectedCity[0].ticketPrice,
    passengers,
    selected: false,
  }));

  const returnFlights = flightHours.map((hour, id) => ({
    id: id,
    originCity: destinationName[0].name,
    destinationCity: selectedCity[0].name,
    flightDate: returnDate,
    roundTrip: true,
    flightHour: hour,
    ticketPrice: selectedCity[0].ticketPrice,
    passengers,
    selected: false,
  }));

  return { departureFlights, returnFlights };
};

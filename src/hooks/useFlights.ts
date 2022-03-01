import { FlightProps } from "../components/checkout/interfaces";
import { cities } from "../data/citiesData";
import { flightHours } from "../data/flightHours";

interface useFlightsProps {
  originCity: number | string;
  passengers: number;
  destinationCity: number | string;
  departureDate: string;
  returnDate: string;
}

export const useFlights = ({
  originCity,
  passengers,
  destinationCity,
  departureDate,
  returnDate,
}: useFlightsProps): FlightProps[] => {
  const selectedCity = cities.filter((city) => city.id === originCity);
  const destinationName = cities.filter((city) => city.id === destinationCity);

  const availableFlights = flightHours.map((hour, id) => ({
    id: id,
    originCity: selectedCity[0].name,
    destinationCity: destinationName[0].name,
    departureDate,
    flightHour: hour,
    ticketPrice: selectedCity[0].ticketPrice,
    passengers,
    returnDate,
    selected: false,
  }));

  return availableFlights;
};

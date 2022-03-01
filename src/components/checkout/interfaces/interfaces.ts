export interface IFlights {
  id?: number;
  originCity: string;
  destinationCity: string;
  flightDate: string;
  roundTrip: boolean;
  flightHour: string;
  ticketPrice: number;
  passengers: number;
  selected: boolean;
}

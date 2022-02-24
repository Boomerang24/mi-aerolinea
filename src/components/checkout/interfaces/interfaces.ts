export interface CheckoutCardProps {
  id?: number;
  originCity: string;
  destinationCity: string;
  departureDate: string;
  flightHour: string;
  ticketPrice: number;
  passengers: number;
  returnDate?: string;
  selected: boolean;
}

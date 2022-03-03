export type Action<T> = {
  type: string;
  payload: T;
};

export type ICity = {
  id: number;
  name: string;
  ticketPrice: number;
};

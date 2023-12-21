import { createContext } from 'utils';
import type { TReservation } from 'types';

export const {
  Provider: ReservationsProvider,
  useContext: useContextReservations,
} = createContext<Array<TReservation>>([]);

import type { TDish, TReservation } from 'types';

import catalog from './fixtures/catalog.json';
import reservations from './fixtures/reservations.json';

export interface LoginValues {
  email: string;
  password: string;
}

export interface RegisterValues {
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

export interface ReserveValues {
  name: string;
  email: string;
  phone: string;
  guests: number;
  createdAt: string;
}

export interface Client {
  donate: () => Promise<void>;
  catalog: () => Promise<Array<TDish>>;
  reserve: (values: ReserveValues) => Promise<boolean>;
  reservations: () => Promise<Array<TReservation>>;
}

const client: Client = {
  donate: Promise.resolve,

  catalog: () => Promise.resolve(catalog),

  reserve: () => Promise.resolve(true),

  reservations: () => Promise.resolve(reservations),
};

export default client;

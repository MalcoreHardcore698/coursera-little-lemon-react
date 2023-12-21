import type { ReactElement } from 'react';

export type RouteType = {
  path: string;
  component: () => ReactElement;
  exact?: boolean;
}

export type TDish = {
  _id: string;
  title: string;
  image: string;
  description: string;
  price: number;
};

export interface TReservation {
  _id: string;
  dish: TDish;
  createdAt: string;
}

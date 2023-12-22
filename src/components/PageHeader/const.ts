import { ROUTES } from 'const';

export const LINKS = [
  {
    path: ROUTES.ROOT,
    title: 'Home'
  },
  {
    path: ROUTES.ABOUT,
    title: 'About'
  },
  {
    path: ROUTES.CATALOG,
    title: 'Menu'
  },
  {
    path: ROUTES.RSERVATIONS,
    title: 'Reservations'
  },
  {
    path: ROUTES.ORDER_ONLINE,
    title: 'Order Online',
    disabled: true,
  },
  {
    path: ROUTES.LOGIN,
    title: 'Login',
    disabled: true,
  }
];

import client from 'api';
import type { ReserveValues } from 'api/client';

export const useReservations = () => {
  const onFetch = () => client.reservations();

  const onReserve = (values: ReserveValues) => client.reserve(values);

  return {
    onFetch,
    onReserve,
  };
};

import { useEffect } from 'react';
import type { PropsWithChildren } from 'react';

import { useReservations } from 'context';

const LazyReservations: React.FC<PropsWithChildren> = ({ children }) => {
  const { onFetch } = useReservations()

  useEffect(() => {
    onFetch()
  }, [onFetch])

  return <>{children}</>
};

export default LazyReservations;

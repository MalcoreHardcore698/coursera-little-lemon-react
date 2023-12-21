import React from 'react';

import Animated from 'components/Animated';
import PageReservations from 'features/PageReservations';

const Reservations: React.FC = () => (
  <Animated.Fade>
    <PageReservations />
  </Animated.Fade>
);

export default Reservations;

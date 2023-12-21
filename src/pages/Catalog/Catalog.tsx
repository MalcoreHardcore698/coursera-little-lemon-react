import React from 'react';

import Animated from 'components/Animated';
import PageCatalog from 'features/PageCatalog';

const Catalog: React.FC = () => (
  <Animated.Fade>
    <PageCatalog />
  </Animated.Fade>
);

export default Catalog;

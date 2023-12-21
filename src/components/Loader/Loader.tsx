import React from 'react';

import Animated from 'components/Animated';

import './Loader.scss';

/**
 * Base loader component
 */
const Loader: React.FC = () => (
  <Animated.Fade className='wrapper' />
);

export default Loader;

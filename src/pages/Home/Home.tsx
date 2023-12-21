import React from 'react';

import Hero from 'components/Hero';
import Animated from 'components/Animated';
import Carousel from 'features/Carousel';

const Home: React.FC = () => (
  <Animated.Fade>
    <Hero />
    <Carousel />
  </Animated.Fade>
);

export default Home;

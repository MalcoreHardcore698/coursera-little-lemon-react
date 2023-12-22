import React from 'react';

import Animated from 'components/Animated';
import SectionHero from 'features/SectionHero';
import SectionCarousel from 'features/SectionCarousel';

const Home: React.FC = () => (
  <Animated.Fade>
    <SectionHero />
    <SectionCarousel />
  </Animated.Fade>
);

export default Home;

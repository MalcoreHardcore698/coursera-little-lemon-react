import React from 'react';

import Animated from 'components/Animated';
import PageAbout from 'features/PageAbout';

const About: React.FC = () => (
  <Animated.Fade>
    <PageAbout />
  </Animated.Fade>
);

export default About;

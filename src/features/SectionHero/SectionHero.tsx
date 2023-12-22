import React from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from 'const';
import Button from 'components/Button';
import Animated from 'components/Animated';
import HeroImage from 'assets/images/gourmet.jpg';

import './SectionHero.scss';

/**
 * Wide presentation component with text and background
 */
const SectionHero: React.FC = () => (
  <section className='section-hero'>
    <div className='section-hero__content'>
      <Animated.SlideDown>
        <h1>Little Lemon</h1>
      </Animated.SlideDown>
      <Animated.SlideDown>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      </Animated.SlideDown>

      <Animated.Fade>
        <NavLink to={ROUTES.RSERVATIONS}>
          <Button>Reserve a Table</Button>
        </NavLink>
      </Animated.Fade>
    </div>

    <div className='section-hero__image'>
      <img src={HeroImage} alt='Serving delicious dish' />
    </div>
  </section>
);

export default SectionHero;

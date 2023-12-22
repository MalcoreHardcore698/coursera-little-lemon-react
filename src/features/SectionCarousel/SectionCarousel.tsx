import React from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from 'const';
import { useCatalog } from 'context';
import Button from 'components/Button';
import Card from 'components/Card';

import './SectionCarousel.scss';

const SectionCarousel: React.FC = () => {
  const { catalog } = useCatalog();

  return (
    <section className='section-carousel'>
      <header className='section-carousel__header'>
        <h1>This Week's Specials</h1>
        <NavLink to={ROUTES.RSERVATIONS}>
          <Button>Online Menu</Button>
        </NavLink>
      </header>

      <div className='section-carousel__content'>
        {catalog.slice(0, 3).map(dish => <Card key={dish._id} dish={dish} />)}
      </div>
    </section>
  );
};

export default SectionCarousel;

import React from 'react';

import { ROUTES } from 'const';
import { useCatalog } from 'context';
import Button from 'components/Button';
import Card from 'components/Card';

import './Carousel.scss';
import { NavLink } from 'react-router-dom';

const Carousel: React.FC = () => {
  const { catalog } = useCatalog();

  return (
    <div className='carousel'>
      <div className='carousel-header'>
        <h1>This Week's Specials</h1>
        <NavLink to={ROUTES.RSERVATIONS}>
          <Button>Online Menu</Button>
        </NavLink>
      </div>

      <div className='carousel-content'>
        {catalog.slice(0, 3).map(dish => <Card key={dish._id} dish={dish} />)}
      </div>
    </div>
  );
};

export default Carousel;

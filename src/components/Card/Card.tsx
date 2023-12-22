import React from 'react'
import { AsyncImage } from 'loadable-image';
import { MdDeliveryDining } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import { LOCATORS, ROUTES } from 'const';
import Button from 'components/Button';
import type { TDish } from 'types';

import './Card.scss';

interface Props {
  /**
   * Dish object
   */
  dish: TDish;
}

/**
 * Base dish card component with defined styles
 */
const Card: React.FC<Props> = ({ dish }) => (
  <article data-testid={LOCATORS.CARD} className='card'>
    <div className='card-image'>
      <AsyncImage
        src={dish.image}
        alt={dish.title}
        style={{ width: '100%', height: 300 }}
        loader={<div className='card-image__placeholder' />}
      />
    </div>

    <div className='card-content'>
      <header className='card-content-title'>
        <h3>{dish.title}</h3>
        <h3 className='card-content-tag'>${dish.price}</h3>
      </header>

      <p>{dish.description}</p>
    </div>

    <NavLink to={ROUTES.RSERVATIONS}>
      <Button data-testid={LOCATORS.BTN_ORDER}>
        Order a Delivery
        <MdDeliveryDining size={30} />
      </Button>
    </NavLink>
  </article>
);

export default Card;

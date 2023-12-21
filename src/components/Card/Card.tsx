import React from 'react'
import { AsyncImage } from 'loadable-image';
import { MdDeliveryDining } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import { ROUTES } from 'const';
import Button from 'components/Button';
import type { TDish } from 'types';

import './Card.scss';

interface Props {
  dish: TDish;
}

const Card: React.FC<Props> = ({ dish }) => (
  <div className='card'>
    <div className='card-image'>
      <AsyncImage
        src={dish.image}
        alt={dish.title}
        style={{ width: '100%', height: 300 }}
        loader={<div className='card-image__placeholder' />}
      />
    </div>

    <div className='card-content'>
      <div className='card-content-title'>
        <h3>{dish.title}</h3>
        <h3 className='card-content-tag'>${dish.price}</h3>
      </div>

      <p>{dish.description}</p>
    </div>

    <NavLink to={ROUTES.RSERVATIONS}>
      <Button>
        Order a Delivery
        <MdDeliveryDining size={30} />
      </Button>
    </NavLink>
  </div>
);

export default Card;

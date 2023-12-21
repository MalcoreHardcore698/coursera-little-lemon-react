import React, { useMemo, useState } from 'react';
import { AsyncImage } from 'loadable-image';

import FormReserve from 'features/FormReserve';

import './PageReservations.scss';

const BACKGROUND = 'https://a.cdn-hotels.com/gdcs/production141/d778/6b200721-9661-4680-aca2-d6e33ce46cf0.jpg';

const PageReservations: React.FC = () => {
  const [reserved, setReserved] = useState(false);

  const content = useMemo(() => {
    if (reserved) {
      return <p>Thank you!</p>;
    }

    return (
      <>
        <p>Please fill in and submit form to book your reservation at Little Lemon.</p>
        <FormReserve onSuccess={() => setReserved(true)} />
      </>
    );
  }, [reserved]);

  return (
    <div className='page-reservations'>
      <div className='page-reservations__background'>
        <AsyncImage
          src={BACKGROUND}
          alt='Page Reservations'
          style={{ width: '100%', height: '100%' }}
          loader={<div className='card-image__placeholder' />}
        />
      </div>

      <div className='page-reservations__container'>
        <div className='container-text'>
          <h2>Experience the perfect balance of tradition and luxury.</h2>
          <p>At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of <em>tradition</em>.</p>
          <p>Book a table with us to share in this experience.</p>
        </div>

        <div className='container-form'>
          <h1>Reserve a Table</h1>
          {content}
        </div>
      </div>
    </div>
  );
};

export default PageReservations;

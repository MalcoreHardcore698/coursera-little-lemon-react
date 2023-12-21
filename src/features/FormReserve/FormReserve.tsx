import React, { useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { useReservations } from 'context';
import type { ReserveValues } from 'api/client';
import Form from 'components/Form';

import { schema } from './schema';

interface Props {
  onSuccess?: () => void;
}

const FormReserve: React.FC<Props> = ({ onSuccess }) => {
  const { onReserve } = useReservations();

  const { handleSubmit, register, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback((values: Omit<ReserveValues, 'dishId'>) => {
    onReserve(values).then(() => {
      onSuccess?.();
      reset();
    });
  }, [reset, onReserve, onSuccess]);

  return (
    <Form submitText='Reserve' onSubmit={handleSubmit(onSubmit)}>
      <div className='field'>
        <label htmlFor="name">Full Name</label>
        <input type='text' placeholder='John Doe' {...register('name')} />
        <span className='error-message'>{errors.name?.message}</span>
      </div>

      <div className='field'>
        <label htmlFor="email">Email</label>
        <input type='text' placeholder='text@email.com' {...register('email')}/>
        <span className='error-message'>{errors.email?.message}</span>
      </div>

      <div className='field'>
        <label htmlFor='phone'>Telephone</label>
        <input type='tel' placeholder='233 00 000 0000' {...register('phone')}/>
        <span className='error-message'>{errors.phone?.message}</span>
      </div>

      <div className='field guest'>
        <label htmlFor='guests'>Guests</label>
        <input type='number' placeholder='2' {...register('guests')}/>
        <span className='error-message'>{errors.guests?.message}</span>
      </div>

      <div className='field'>
        <label htmlFor='createdAt'>Date & Time</label>
        <input type='datetime-local' {...register('createdAt')} />
        <span className='error-message'>{errors.createdAt?.message}</span>
      </div>
    </Form>
  );
};

export default FormReserve;

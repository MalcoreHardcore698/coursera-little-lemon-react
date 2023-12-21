import React from 'react';
import type { PropsWithChildren } from 'react';

import Button from 'components/Button';

import './Form.scss';

interface Props extends PropsWithChildren {
  submitText?: string;
  onSubmit?: () => void;
}

const Form: React.FC<Props> = ({ submitText = 'Submit', children, onSubmit }) => (
  <form className='form' onSubmit={onSubmit}>
    <fieldset>
      {children}
      <Button type='submit'>
        {submitText}
      </Button>
    </fieldset>
  </form>
);

export default Form;

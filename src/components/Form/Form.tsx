import React from 'react';
import type { PropsWithChildren } from 'react';

import Button from 'components/Button';

import './Form.scss';

interface Props extends PropsWithChildren {
  /**
   * Text displayed in the button
   */
  submitText?: string;
  /**
   * Function to be called when sending data
   */
  onSubmit?: () => void;
}

/**
 * Base form component with defined styles
 */
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

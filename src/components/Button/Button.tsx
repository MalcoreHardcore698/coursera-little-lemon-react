import React from 'react';
import type { HTMLProps, PropsWithChildren } from 'react';
import cn from 'classnames';

import './Button.scss';

interface Props extends PropsWithChildren, HTMLProps<HTMLButtonElement> {
  /**
   * Built-In HTML button property
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * Property adjusts indentation and button colors
   */
  appearance?: 'text' | 'default';
}

/**
 * Base button component with defined styles
 */
const Button: React.FC<Props> = ({ className, appearance = 'default', children, onClick, ...props }) => (
  <button {...props} className={cn('button', appearance, className)} onClick={onClick}>
    {children}
  </button>
);

export default Button;

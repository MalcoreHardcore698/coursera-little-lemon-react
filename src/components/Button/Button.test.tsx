import { fireEvent, render, screen } from '@testing-library/react';

import { LOCATORS } from 'const';

import Button from './Button';

const mockOnClick = jest.fn();

const BUTTON_TEXT = 'Click';

describe('Button', () => {
  test('should render button', () => {
    render(<Button />);

    const button = screen.getByTestId(LOCATORS.BTN);

    // The button should exists
    expect(button).toBeInTheDocument();
  });

  test('should render button text', () => {
    render(<Button>{BUTTON_TEXT}</Button>);

    const text = screen.getByText(BUTTON_TEXT);

    // The mock text should displayed
    expect(text).toBeInTheDocument();
  });

  test('should call onClick', () => {
    render(<Button onClick={mockOnClick}>{BUTTON_TEXT}</Button>);

    // Click by the submit button
    const text = screen.getByText(BUTTON_TEXT);
    fireEvent.click(text);

    // The mock function was called
    expect(mockOnClick).toBeCalled();
  });
});

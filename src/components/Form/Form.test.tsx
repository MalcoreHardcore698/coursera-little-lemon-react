import { fireEvent, render, screen } from '@testing-library/react';

import Form from './Form';

const mockOnSubmit = jest.fn();

const SUBMIT_TEXT = 'test submit';

describe('Form', () => {
  test('should render submitText', () => {
    render(<Form submitText={SUBMIT_TEXT} />);

    const text = screen.getByText(SUBMIT_TEXT);

    // The mock submit text exists
    expect(text).toBeInTheDocument();
  });

  test('should call onSubmit', () => {
    render(<Form submitText={SUBMIT_TEXT} onSubmit={mockOnSubmit} />);

    // Click by the submit button
    const text = screen.getByText(SUBMIT_TEXT);
    fireEvent.click(text);

    // The mock function was called
    expect(mockOnSubmit).toBeCalled();
  });
});

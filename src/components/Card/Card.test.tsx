import { render, screen } from '@testing-library/react';

import { LOCATORS } from 'const';

import Card from './Card';
import { MemoryRouter } from 'react-router-dom';
import { HTMLProps } from 'react';

const MOCK_DISH = {
  _id: '1',
  image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  title: 'Greek Salad',
  price: 12.99,
  description: 'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.'
};

jest.mock('loadable-image', () => ({
  __esModule: true,
  ...jest.requireActual('loadable-image'),
  AsyncImage: (props: HTMLProps<HTMLImageElement>) => <img alt='Test' {...props} />,
}));

jest.mock('react-router-dom', () => ({
  __esModule: true,
  ...jest.requireActual('react-router-dom'),
}));

describe('Card', () => {
  test('should render card', async () => {
    render(
      <MemoryRouter>
        <Card dish={MOCK_DISH} />
      </MemoryRouter>
    );

    const card = screen.getByTestId(LOCATORS.CARD);

    // The card should exists
    expect(card).toBeInTheDocument();
  });

  test('should render card image', async () => {
    render(
      <MemoryRouter>
        <Card dish={MOCK_DISH} />
      </MemoryRouter>
    );

    const img = screen.getByAltText(MOCK_DISH.title);

    // The mock dish image should displayed
    expect(img).toBeInTheDocument();
  });

  test('should render card content', async () => {
    render(
      <MemoryRouter>
        <Card dish={MOCK_DISH} />
      </MemoryRouter>
    );

    const title = screen.getByText(MOCK_DISH.title);
    // The mock dish title should displayed
    expect(title).toBeInTheDocument();

    const price = screen.getByText('$' + MOCK_DISH.price);
    // The mock dish title should displayed
    expect(price).toBeInTheDocument();

    const description = screen.getByText(MOCK_DISH.description);
    // The mock dish title should displayed
    expect(description).toBeInTheDocument();
  });

  test('should render card button', async () => {
    render(
      <MemoryRouter>
        <Card dish={MOCK_DISH} />
      </MemoryRouter>
    );

    const button = screen.getByTestId(LOCATORS.BTN_ORDER);

    // The button should displayed
    expect(button).toBeInTheDocument();
  });
});

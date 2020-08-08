import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { format, subDays } from 'date-fns';
import App from './App';

jest.mock('react-fit', () => ({
  __esModule: true,
  default: (props) => props.children,
}));

const delay = (s) => new Promise((resolve) => setTimeout(resolve, s * 1000));

const getCalendarButton = () =>
  screen.getByRole('button', {
    name: (_content, element) =>
      element.className ===
      'react-date-picker__calendar-button react-date-picker__button',
  });

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('able to change the date', async () => {
  render(<App />);

  console.time('click calendar');
  userEvent.click(getCalendarButton());
  console.timeEnd('click calendar');

  console.time('pick T');
  const T = format(new Date(), 'MMMM d, y');
  userEvent.click(screen.getByRole('button', { name: T }));
  console.timeEnd('pick T');
  await delay(0.1);

  console.time('pick T-1');
  const T_1 = format(subDays(new Date(), '1'), 'MMMM d, y');
  userEvent.click(screen.getByRole('button', { name: T_1 }));
  console.timeEnd('pick T-1');
  await delay(0.1);

  console.time('pick T-2');
  const T_2 = format(subDays(new Date(), '2'), 'MMMM d, y');
  userEvent.click(screen.getByRole('button', { name: T_2 }));
  console.timeEnd('pick T-2');
  await delay(0.1);

  console.time('pick T-3');
  const T_3 = format(subDays(new Date(), '3'), 'MMMM d, y');
  userEvent.click(screen.getByRole('button', { name: T_3 }));
  console.timeEnd('pick T-3');
  await delay(0.1);

  expect(true).toEqual(false);
});

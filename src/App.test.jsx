import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { format, subDays } from 'date-fns';
import App from './App';

const SECOND = 1000; // ms
const today = new Date();
const yesterday = subDays(new Date(), 1);

const getOpenCalendarButton = () =>
  screen.getByRole('button', {
    name: (_content, element) =>
      element.className ===
      'react-date-picker__calendar-button react-date-picker__button',
  });

test(
  'should not get a timeout error',
  async () => {
    render(<App />);

    for (let i = 0; i < 2; i++) {
      console.time(`#${i + 1} open calendar`);
      userEvent.click(getOpenCalendarButton());
      console.timeEnd(`#${i + 1} open calendar`);

      console.time(`#${i + 1} pick today`);
      userEvent.click(
        screen.getByRole('button', { name: format(today, 'MMMM d, y') })
      );
      console.timeEnd(`#${i + 1} pick today`);

      console.time(`#${i + 1} pick yesterday`);
      userEvent.click(
        screen.getByRole('button', { name: format(yesterday, 'MMMM d, y') })
      );
      console.timeEnd(`#${i + 1} pick yesterday`);

      console.time(`#${i + 1} unmount calendar`);
      userEvent.click(screen.getByRole('button', { name: 'Hide' }));
      console.timeEnd(`#${i + 1} unmount calendar`);

      console.time(`#${i + 1} wait for "Show" button`);
      await waitFor(() => expect(screen.getByRole('button', { name: 'Show' })));
      console.timeEnd(`#${i + 1} wait for "Show" button`);

      console.time(`#${i + 1} mount calendar`);
      userEvent.click(screen.getByRole('button', { name: 'Show' }));
      console.timeEnd(`#${i + 1} mount calendar`);
    }

    expect(document.querySelector('input[name="date"]').value).toEqual(
      format(yesterday, 'y-MM-dd')
    );
  },
  5 * SECOND // Jest's default timeout
);

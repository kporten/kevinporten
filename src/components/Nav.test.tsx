import userEvent from '@testing-library/user-event';
import React from 'react';

import { renderWithIntl, screen, waitFor } from '../../jest/test-utils';

import Nav from './Nav';

it('renders and is visible', () => {
  renderWithIntl(<Nav />);

  expect(screen.getByTestId('nav')).toBeVisible();
});

it('opens menu with animation on click', async () => {
  renderWithIntl(<Nav />);

  userEvent.click(screen.getByRole('button'));

  expect(screen.getByTestId('nav').querySelector('li')).toHaveStyle({
    opacity: 0,
  });

  await waitFor(() => {
    expect(screen.getByTestId('nav').querySelector('li')).toHaveStyle({
      opacity: 1,
    });
  });

  expect(screen.getByTestId('nav').querySelector('ul')).toBeVisible();
});

import React from 'react';
import userEvent from '@testing-library/user-event';

import { renderWithIntl, waitFor } from '../../jest/test-utils';

import Nav from './Nav';

it('renders and is visible', () => {
  const { getByTestId } = renderWithIntl(<Nav />);

  expect(getByTestId('nav')).toBeVisible();
});

it('opens menu with animation on click', async () => {
  const { getByTestId, getByRole } = renderWithIntl(<Nav />);

  userEvent.click(getByRole('button'));

  expect(getByTestId('nav').querySelector('li')).toHaveStyle({
    opacity: 0,
  });

  await waitFor(() => {
    expect(getByTestId('nav').querySelector('li')).toHaveStyle({
      opacity: 1,
    });
  });

  expect(getByTestId('nav').querySelector('ul')).toBeVisible();
});

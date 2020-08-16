import React from 'react';

import { renderWithIntl, screen } from '../../jest/test-utils';

import Header from './Header';

it('renders and is visible', () => {
  renderWithIntl(<Header logoUrl="logoUrl" />);

  expect(screen.getByRole('banner')).toBeVisible();
});

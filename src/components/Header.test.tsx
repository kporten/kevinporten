import React from 'react';

import { renderWithIntl } from '../../jest/test-utils';

import Header from './Header';

it('renders and is visible', () => {
  const { getByRole } = renderWithIntl(<Header logoUrl="logoUrl" />);

  expect(getByRole('banner')).toBeVisible();
});

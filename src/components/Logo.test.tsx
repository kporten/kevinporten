import React from 'react';

import { renderWithIntl, waitFor } from '../../jest/test-utils';
import Logo from './Logo';

it('renders with url as image source', () => {
  const { getByRole } = renderWithIntl(<Logo url="test" />);

  expect(getByRole('img')).toHaveAttribute('src', 'test');
});

it('shows an animation', async () => {
  const { getByRole } = renderWithIntl(<Logo url="test" />);

  expect(getByRole('img')).toHaveStyle({ opacity: 0 });

  await waitFor(() => {
    expect(getByRole('img')).toHaveStyle({ opacity: 1 });
  });
});

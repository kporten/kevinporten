import React from 'react';

import { renderWithIntl, screen, waitFor } from '../../jest/test-utils';
import Logo from './Logo';

it('renders with url as image source', () => {
  renderWithIntl(<Logo url="test" />);

  expect(screen.getByRole('img')).toHaveAttribute('src', 'test');
});

it('shows an animation', async () => {
  renderWithIntl(<Logo url="test" />);

  expect(screen.getByRole('img')).toHaveStyle({ opacity: 0 });

  await waitFor(() => {
    expect(screen.getByRole('img')).toHaveStyle({ opacity: 1 });
  });
});

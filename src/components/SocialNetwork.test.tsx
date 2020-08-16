import React from 'react';
import { render, screen } from '@testing-library/react';

import SocialNetwork from './SocialNetwork';

it('renders not with unsupported link', () => {
  render(<SocialNetwork link="link" />);

  expect(screen.queryByRole('link')).toBeNull();
});

it('renders with supported link', () => {
  render(<SocialNetwork link="github" />);

  expect(screen.queryByRole('link')).toBeVisible();
});

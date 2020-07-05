import React from 'react';
import { render } from '@testing-library/react';

import SocialNetwork from './SocialNetwork';

it('renders not with unsupported link', () => {
  const { queryByRole } = render(<SocialNetwork link="link" />);

  expect(queryByRole('link')).toBeNull();
});

it('renders with supported link', () => {
  const { queryByRole } = render(<SocialNetwork link="github" />);

  expect(queryByRole('link')).toBeVisible();
});

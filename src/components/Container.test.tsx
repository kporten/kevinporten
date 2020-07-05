import React from 'react';
import { render } from '@testing-library/react';

import Container from './Container';

it('renders with children', () => {
  const { getByText } = render(<Container>test</Container>);

  expect(getByText('test')).toBeVisible();
});

it('renders with container class', () => {
  const { getByText } = render(<Container>test</Container>);

  expect(getByText('test')).toHaveClass('container');
});

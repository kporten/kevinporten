import { render, screen } from '@testing-library/react';
import React from 'react';

import Container from './Container';

it('renders with children', () => {
  render(<Container>test</Container>);

  expect(screen.getByText('test')).toBeVisible();
});

it('renders with container class', () => {
  render(<Container>test</Container>);

  expect(screen.getByText('test')).toHaveClass('container');
});

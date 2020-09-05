import { render, screen } from '@testing-library/react';
import React from 'react';

import Tag from './Tag';

it('renders with classname', () => {
  render(<Tag className="class-name">tag</Tag>);

  expect(screen.getByText('tag')).toHaveClass('class-name');
});

it('renders with children', () => {
  render(<Tag>tag</Tag>);

  expect(screen.getByText('tag')).toBeVisible();
});

import React from 'react';
import { render } from '@testing-library/react';

import Tag from './Tag';

it('renders with classname', () => {
  const { getByText } = render(<Tag className="class-name">tag</Tag>);

  expect(getByText('tag')).toHaveClass('class-name');
});

it('renders with children', () => {
  const { getByText } = render(<Tag>tag</Tag>);

  expect(getByText('tag')).toBeVisible();
});

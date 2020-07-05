import React from 'react';

import { renderWithIntl } from '../../jest/test-utils';

import NavButton from './NavButton';

it('renders button with label', () => {
  const { getByRole } = renderWithIntl(
    <NavButton isMenuOpen onClick={jest.fn()} />,
  );

  expect(getByRole('button')).toHaveAttribute('aria-label', 'Menu');
});

it('renders with times icon', () => {
  const { getByRole } = renderWithIntl(
    <NavButton isMenuOpen onClick={jest.fn()} />,
  );

  expect(getByRole('button').querySelector('svg')).toHaveClass('fa-times');
});

it('renders with bars icon', () => {
  const { getByRole } = renderWithIntl(
    <NavButton isMenuOpen={false} onClick={jest.fn()} />,
  );

  expect(getByRole('button').querySelector('svg')).toHaveClass('fa-bars');
});

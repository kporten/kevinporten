import React from 'react';

import { renderWithIntl, screen } from '../../jest/test-utils';

import NavButton from './NavButton';

it('renders button with label', () => {
  renderWithIntl(<NavButton isMenuOpen onClick={jest.fn()} />);

  expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Menu');
});

it('renders with times icon', () => {
  renderWithIntl(<NavButton isMenuOpen onClick={jest.fn()} />);

  expect(screen.getByRole('button').querySelector('svg')).toHaveClass(
    'fa-times',
  );
});

it('renders with bars icon', () => {
  renderWithIntl(<NavButton isMenuOpen={false} onClick={jest.fn()} />);

  expect(screen.getByRole('button').querySelector('svg')).toHaveClass(
    'fa-bars',
  );
});

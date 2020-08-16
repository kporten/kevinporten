import React from 'react';

import { renderWithIntl, screen } from '../../jest/test-utils';

import Footer from './Footer';

it('renders with classname', () => {
  renderWithIntl(<Footer made="test" className="class-name" />);

  expect(screen.getByTestId('footer')).toHaveClass('class-name');
});

it('renders with made text', () => {
  renderWithIntl(<Footer made="made" />);

  expect(screen.getByText('made')).toBeVisible();
});

it('renders with made text and split on ❤', () => {
  renderWithIntl(<Footer made="before ❤ after" />);

  expect(screen.getByText('❤')).toHaveClass('text-red-700');
});

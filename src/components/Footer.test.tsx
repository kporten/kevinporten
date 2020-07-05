import React from 'react';

import { renderWithIntl } from '../../jest/test-utils';

import Footer from './Footer';

it('renders with classname', () => {
  const { getByTestId } = renderWithIntl(
    <Footer made="test" className="class-name" />,
  );

  expect(getByTestId('footer')).toHaveClass('class-name');
});

it('renders with made text', () => {
  const { getByText } = renderWithIntl(<Footer made="made" />);

  expect(getByText('made')).toBeVisible();
});

it('renders with made text and split on ❤', () => {
  const { getByText } = renderWithIntl(<Footer made="before ❤ after" />);

  expect(getByText('❤')).toHaveClass('text-red-700');
});

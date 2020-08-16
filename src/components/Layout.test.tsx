import React from 'react';

import { renderWithIntl, screen } from '../../jest/test-utils';

import Layout from './Layout';

it('renders with page title', () => {
  renderWithIntl(
    <Layout pageTitle="pageTitle" hasBackground={false}>
      layout
    </Layout>,
  );

  expect(screen.getByText('layout')).toBeVisible();
});

it('renders with landing page layout', () => {
  renderWithIntl(
    <Layout pageTitle="pageTitle" isLanding hasBackground={false}>
      layout
    </Layout>,
  );

  expect(screen.getByRole('main')).not.toHaveClass('bg-white');
});

it('renders with sub page layout', () => {
  renderWithIntl(
    <Layout pageTitle="pageTitle" hasBackground={false}>
      layout
    </Layout>,
  );

  expect(screen.getByRole('main')).toHaveClass('bg-white');
});

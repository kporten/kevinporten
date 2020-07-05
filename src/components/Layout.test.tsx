import React from 'react';

import { renderWithIntl } from '../../jest/test-utils';

import Layout from './Layout';

it('renders with page title', () => {
  const { getByText } = renderWithIntl(
    <Layout pageTitle="pageTitle" hasBackground={false}>
      layout
    </Layout>,
  );

  expect(getByText('layout')).toBeVisible();
});

it('renders with landing page layout', () => {
  const { getByRole } = renderWithIntl(
    <Layout pageTitle="pageTitle" isLanding hasBackground={false}>
      layout
    </Layout>,
  );

  expect(getByRole('main')).not.toHaveClass('bg-white');
});

it('renders with sub page layout', () => {
  const { getByRole } = renderWithIntl(
    <Layout pageTitle="pageTitle" hasBackground={false}>
      layout
    </Layout>,
  );

  expect(getByRole('main')).toHaveClass('bg-white');
});

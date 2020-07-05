import React from 'react';
import { render } from '@testing-library/react';
import { Helmet, HelmetData } from 'react-helmet';

import Seo from './Seo';

it('sets helmet values', () => {
  render(
    <Seo
      title="title"
      description="desc"
      icon={{ light: 'light', dark: 'dark' }}
    />,
  );

  const helmet: HelmetData & {
    metaTags?: [{ name: string; content: string }];
    linkTags?: [{ rel: string; href: string }];
  } = Helmet.peek();

  expect(helmet.title).toBe('title');
  expect(
    helmet?.metaTags?.find(({ name }) => name === 'description')?.content,
  ).toBe('desc');

  expect(helmet.title).toBe('title');
  expect(helmet?.linkTags?.find(({ rel }) => rel === 'icon')?.href).toBe(
    'light',
  );
});

import React from 'react';
import { Helmet, HelmetData } from 'react-helmet';

import { renderWithIntl } from '../../jest/test-utils';

import Seo from './Seo';

it('sets helmet values', () => {
  renderWithIntl(
    <Seo
      title="title"
      description="desc"
      icon={{ light: 'light', dark: 'dark' }}
    />,
  );

  const helmet = Helmet.peek() as HelmetData & {
    htmlAttributes?: { lang: string };
    metaTags?: [{ name: string; content: string }];
    linkTags?: [{ rel: string; href: string }];
  };

  expect(helmet.htmlAttributes.lang).toBe('en-US');

  expect(helmet.title).toBe('title');

  expect(
    helmet?.metaTags?.find(({ name }) => name === 'description')?.content,
  ).toBe('desc');

  expect(helmet?.linkTags?.find(({ rel }) => rel === 'icon')?.href).toBe(
    'light',
  );
});

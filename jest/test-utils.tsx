import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { IntlContextProvider, IntlProvider } from 'gatsby-plugin-intl';
import React from 'react';

import en from '../src/i18n/en.json';

const WithIntl: React.FC = ({ children }) => (
  <IntlProvider locale="en-US" messages={en}>
    <IntlContextProvider value={{ language: 'en-US' }}>
      {children}
    </IntlContextProvider>
  </IntlProvider>
);

const renderWithIntl = (
  ui: React.ReactElement,
  options?: RenderOptions,
): RenderResult => render(ui, { wrapper: WithIntl, ...options });

export * from '@testing-library/react';
export { renderWithIntl };

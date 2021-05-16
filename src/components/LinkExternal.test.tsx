import React from 'react';
import { mount } from '@cypress/react';

import LinkExternal from './LinkExternal';

it('should render http link', () => {
  mount(<LinkExternal href="https://www.kevinporten.dev" />);

  cy.findByRole('link').should('have.prop', 'target', '_blank');
  cy.findByRole('link').should('have.text', 'https://www.kevinporten.dev');
});

it('should render mailto link', () => {
  mount(
    <LinkExternal href="mailto:hello@kevinporten.dev">
      hello@kevinporten.dev
    </LinkExternal>,
  );

  cy.findByRole('link').should('not.have.prop', 'target', '_blank');
  cy.findByRole('link').should('have.text', 'hello@kevinporten.dev');
});

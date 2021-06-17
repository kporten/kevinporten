import React from 'react';
import { mount } from '@cypress/react';

import Page from './Page';

it('should render page content', () => {
  mount(<Page>content</Page>);

  cy.findByText('content').should('be.visible');
});

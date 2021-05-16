import React from 'react';
import { mount } from '@cypress/react';

import Title from './Title';

it('should render http link', () => {
  mount(<Title primary="Kevin Porten" secondary="Web Developer" />);

  cy.findByText('Kevin Porten').should('be.visible');
  cy.findByText('Web Developer').should('be.visible');
});

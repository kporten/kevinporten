import React from 'react';
import { mount } from '@cypress/react';

import Profile from './Profile';

it('should render image with alt text', () => {
  mount(<Profile />);

  cy.findByRole('img').should('have.prop', 'alt', 'Kevin Porten');
});

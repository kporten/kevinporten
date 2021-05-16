beforeEach(() => {
  cy.visit('/');
});

it('should render index page', () => {
  cy.findByText('Kevin Porten').should('be.visible');
  cy.findByText('Web Developer').should('be.visible');

  cy.findByRole('link', { name: 'hello@kevinporten.dev' }).should('be.visible');
});

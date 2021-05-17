beforeEach(() => {
  cy.visit('http://localhost:3000/does-not-exist', {
    failOnStatusCode: false,
  });
});

it('should render 404 page', () => {
  cy.findByText('404').should('be.visible');
  cy.findByText('Not found').should('be.visible');
});

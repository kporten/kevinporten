describe('404', () => {
  before(() => {
    cy.visit('/en/not-found');
  });

  it('checks if page title is correct', () => {
    cy.title().should('match', /not found/i);
  });

  it('checks if page is visible', () => {
    cy.findByTestId('page-404').should('be.visible');
  });

  it('checks if section is visible', () => {
    cy.findByTestId('page-404').find('h1').should('be.visible');
  });

  it('checks if illustration is visible', () => {
    cy.findByTestId('page-404').find('svg').should('be.visible');
  });

  it('checks if back link is visible', () => {
    cy.findByTestId('page-404').find('a[href="/en/"]').should('be.visible');
  });
});

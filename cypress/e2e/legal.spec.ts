describe('Legal', () => {
  before(() => {
    cy.visit('/en/legal');
  });

  it('checks if page title is correct', () => {
    cy.title().should('match', /legal notice.+data protection/i);
  });

  it('checks if page is visible', () => {
    cy.findByTestId('page-legal').should('be.visible');
  });

  it('checks if sections are visible', () => {
    cy.findByTestId('page-legal').find('h1').should('be.visible');
    cy.findByTestId('page-legal').find('.content > p').should('be.visible');
  });
});

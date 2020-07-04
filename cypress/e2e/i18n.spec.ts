describe('I18n', () => {
  before(() => {
    cy.visit('/en');
  });

  it('checks if language changes', () => {
    cy.findByTestId('footer-langs').find('button').first().click();
    cy.url().should('include', '/de');
  });
});

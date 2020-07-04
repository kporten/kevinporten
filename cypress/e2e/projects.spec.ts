describe('Projects', () => {
  before(() => {
    cy.visit('/en/projects');
  });

  it('checks if page title is correct', () => {
    cy.title().should('match', /projects/i);
  });

  it('checks if page is visible', () => {
    cy.findByTestId('page-projects').should('be.visible');
  });

  it('checks if sections are visible', () => {
    cy.findByTestId('page-projects').find('h1').should('be.visible');
  });

  it('checks if projects are visible', () => {
    cy.findAllByTestId('page-projects-grid')
      .children('div')
      .should('be.visible');
  });
});

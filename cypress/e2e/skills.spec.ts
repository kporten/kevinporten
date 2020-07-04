describe('Skills', () => {
  before(() => {
    cy.visit('/en/skills');
  });

  it('checks if page title is correct', () => {
    cy.title().should('match', /skills/i);
  });

  it('checks if page is visible', () => {
    cy.findByTestId('page-skills').should('be.visible');
  });

  it('checks if sections are visible', () => {
    cy.findByTestId('page-skills').find('h1').should('be.visible');
  });

  it('checks if skills are visible', () => {
    cy.findAllByTestId('page-skills-grid').children('div').should('be.visible');
  });
});

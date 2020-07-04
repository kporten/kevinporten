describe('Index', () => {
  before(() => {
    cy.visit('/en');
  });

  it('checks if page title is correct', () => {
    cy.title().should('match', /home/i);
  });

  it('checks if page is visible', () => {
    cy.findByTestId('page-index').should('be.visible');
  });

  it('checks if word transition is visible', () => {
    cy.findByTestId('page-index')
      .find('h1 > span:nth-child(2)')
      .should('be.visible');
  });

  it('checks if description is visible', () => {
    cy.findByTestId('page-index-description')
      .children('p')
      .should('be.visible');
  });

  it('checks if social network list elements are visible', () => {
    cy.findByTestId('page-index-social-networks')
      .children('li')
      .should('be.visible');
  });

  it('checks if picture is visible', () => {
    cy.findByTestId('page-index-img')
      .find('picture > img')
      .should('be.visible');
  });
});

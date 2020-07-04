describe('Navigation', () => {
  it('checks if logo link works', () => {
    cy.visit('/en/legal');
    cy.findByTestId('logo').click();
    cy.url().should('match', /\/en\/$/);
  });

  it('checks if home link works', () => {
    cy.visit('/en/legal');
    cy.findByTestId('nav').children('button').click();
    cy.findByTestId('nav').find('a').eq(0).click();
    cy.url().should('match', /\/en\/$/);
  });

  it('checks if skills link works', () => {
    cy.visit('/en');
    cy.findByTestId('nav').children('button').click();
    cy.findByTestId('nav').find('a').eq(1).click();
    cy.url().should('match', /\/skills$/);
  });

  it('checks if projects link works', () => {
    cy.visit('/en');
    cy.findByTestId('nav').children('button').click();
    cy.findByTestId('nav').find('a').eq(2).click();
    cy.url().should('match', /\/projects$/);
  });

  it('checks if legal link works', () => {
    cy.visit('/en');
    cy.findByTestId('footer-legal-data').click();
    cy.url().should('match', /\/legal$/);
  });
});

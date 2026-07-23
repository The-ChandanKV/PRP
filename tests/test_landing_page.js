describe('Landing Page Tests', () => {
  before(() => {
    cy.visit('/');
  });

  it('should display the hero section', () => {
    cy.get('.hero').should('be.visible');
    cy.get('.hero h1').contains('Welcome to Our App');
    cy.get('.hero .cta-primary').should('exist');
    cy.get('.hero .cta-secondary').should('exist');
  });

  it('should display features grid with glassmorphism', () => {
    cy.get('.features-grid').should('be.visible');
    cy.get('.feature-card').should('have.length.greaterThan', 2);
  });

  it('should have a sticky navigation bar', () => {
    cy.get('.navbar').should('have.class', 'sticky');
  });

  it('should scale CTA buttons on hover', () => {
    const primaryButton = cy.get('.cta-primary');
    primaryButton.trigger('mouseenter');
    primaryButton.should('have.css', 'transform').and('match', /scale\(1\.05\)/);
  });
});

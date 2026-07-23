describe('Landing Page Tests', () => {
  it('should display the hero section with background and CTAs', () => {
    cy.visit('/');
    cy.get('h1').should('be.visible');
    cy.get('.cta-primary').should('have.class', 'hover-effect');
    cy.get('.cta-secondary').should('have.class', 'hover-effect');
  });

  it('should display the features grid with glassmorphism effect', () => {
    cy.visit('/');
    cy.get('.features-grid').children().should('have.length.greaterThan', 2);
    cy.get('.feature-card').first().trigger('mouseover');
    cy.get('.feature-card').first().should('have.class', 'hover-elevate');
  });

  it('should implement scroll trigger animations for features', () => {
    cy.visit('/');
    cy.scrollTo(0, 500);
    cy.get('.feature-card').first().should('be.visible');
  });

  it('should have a floating navigation bar that changes opacity on scroll', () => {
    cy.visit('/');
    cy.get('.navbar').should('have.css', 'opacity', '1');
    cy.scrollTo(0, 200);
    cy.get('.navbar').should('have.css', 'opacity').and('lessThan', '1');
  });
});
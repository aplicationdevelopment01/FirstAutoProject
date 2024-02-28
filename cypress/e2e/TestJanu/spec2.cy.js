describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/TestJanu/TestAutomation')
  })
  it('passes', () => {
    cy.get('.btn.btn-primary').should('be.visible');
  })
})
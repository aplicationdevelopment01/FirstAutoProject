describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/TestJanu/TestAutomation')
  }) 
  it('Logo should be visible', () => {
    cy.get('.app-logo').should('be.visible')
  })
})
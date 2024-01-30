describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/TestJanu/TestAutomation?_ts=638422191431680668')
    cy.get('input#Input_Date').type('2024-01-01')
  })
})
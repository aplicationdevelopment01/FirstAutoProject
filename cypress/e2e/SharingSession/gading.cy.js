describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/TestJanu/TestAutomation?_ts=638422191431680668')
    cy.wait(1000)
    cy.get('input#Input_Date').type('2024-01-01')
    cy.get('#UploadBinary').selectFile('../../Cypress/FirstAutoProject/cypress/e2e/TestJanu/logo-ct.png')
    cy.get('input#Input_Date').type('2024-02-01')
  })
})
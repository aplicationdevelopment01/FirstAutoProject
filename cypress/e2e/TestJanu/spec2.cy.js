describe('template spec', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.visit('https://samaktamitrapt-tst.outsystemsenterprise.com/Media/Login')
  })
  it('Positive Login', () =>{
    cy.get('#Input_UsernameVal').type('superadmin_news')
    cy.get('#Input_UsernameVal').should('have.value','superadmin_news')
    cy.get('#Input_PasswordVal').type('123456')
    cy.get('#b4-Button > button[type=\"submit"').contains('Log in').click().wait(3000)
    cy.url().should('include', '/Media/Home').wait(5000)
    cy.get('#New4 > img').should('be.visible')
  })
})
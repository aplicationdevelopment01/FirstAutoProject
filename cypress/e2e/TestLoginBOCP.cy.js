describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/SML_BankOfProject_Web/login')
  })
  it('passes', () => {
    cy.get('input[id=Input_UsernameVal2]').type('sa1')
  // {enter} causes the form to submit
    const password = "123456"
    cy.get('input[id=Input_PasswordVal2]').type(`${password}{enter}`, { log: false })
    cy.url().should('include', '/')
    cy.viewport(1280, 720)
  })
  it('Superadmin Has Manage', () => {
    cy.get('span').should('contain', "Manage")
  })
})
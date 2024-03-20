describe('login fibo', () => {
  beforeEach(() => {
    cy.visit('https://samaktamitrapt-tst.outsystemsenterprise.com/FIBO/Login')
    cy.get('span.input-text').type('superadminfibo')
    cy.get('span.input-password').type('123456')
    cy.get('button.btn.btn-primary.btn-large').click()
    cy.wait(10000);
  cy.contains('superadminfibo').should('exist')
  })
  
  it('should Add Location Type Equipment',()=>{
    cy.get('#b2-b3-SubMenuHeader').click()
    cy.get('a[href="/FIBO/ManageLocationType"]').click()
    cy.wait(5000)
    cy.contains('button','Add Location Type Equipment').click({force: true})
    cy.get('#b8-Dropdown1').select(1)
    cy.get('#b8-Dropdown2').select(6)
    cy.get('button.btn.btn-primary.ThemeGrid_MarginGutter').click()
  })
  })
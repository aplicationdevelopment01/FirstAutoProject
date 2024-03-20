describe('login fibo', () => {
  beforeEach(() => {
    cy.visit('https://samaktamitrapt-tst.outsystemsenterprise.com/FIBO/Login')
    cy.get('span.input-text').type('superadminfibo')
    cy.get('span.input-password').type('123456')
    cy.get('button.btn.btn-primary.btn-large').click()
    cy.wait(10000);
  cy.contains('superadminfibo').should('exist')
  })
  
  it('should Add location',()=>{
    cy.get('#b2-b3-SubMenuHeader').click()
    cy.get('a[href="/FIBO/ManageLocationType"]').click()
    cy.wait(5000)
    cy.contains('button','Add Location').click({force: true})
    cy.get('span.input-text').type('rooftop')
    cy.get('span.input-number').type('6')
    cy.get('button.btn.btn-primary.ThemeGrid_MarginGutter').click()
    cy.on('window:alert', (message) => {
      expect(message).to.equal('Data Added Successfully');
    })
  })
  
  })
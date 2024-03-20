describe('login fibo', () => {
    beforeEach(() => {
      cy.visit('https://samaktamitrapt-tst.outsystemsenterprise.com/FIBO/Login')
      cy.get('span.input-text').type('superadminfibo')
      cy.get('span.input-password').type('123456')
      cy.get('button.btn.btn-primary.btn-large').click()
      cy.wait(10000);
    cy.contains('superadminfibo').should('exist')
    })
    })
    
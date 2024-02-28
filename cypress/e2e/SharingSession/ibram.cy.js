describe('template spec', () => {
    beforeEach(() => {
      cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/TestJanu/TestAutomation')
    })
    /*
    it('Logo Should Visible', () => {
      cy.get('.app-logo').should('be.visible')
    })
    it('Number Should Visible', () => {
      cy.get('.margin-left-s').should('be.visible')
    })
    it('test input text', () => {
      cy.get('.input-text').type('Green Office Park')
    })
    */
    it('Testing', () => {
      cy.get('.OSFillParent').find('.OSFillParent')
      cy.get('.OSFillParent').contains('Bolean')
      cy.get('.OSFillParent').contains('Date')
      cy.get('.OSFillParent').contains('DateTime')
      cy.get('.OSFillParent').contains('Text')
      cy.get('.OSFillParent').contains('Upload')
      cy.get('.input-text').type('Green Office Park')
      cy.get('.dropdown-display.dropdown').select('SML Plaza').should('have.value', '2')
      cy.get('.btn.btn-primary').click()
    })
  })
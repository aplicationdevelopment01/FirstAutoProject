class LoginPage {
    visit() {
      cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/SML_BankOfProject_Web/login', {timeout: 30000});
    }
  
    fillCredentials(username, password) {
        cy.get('input[id=Input_UsernameVal2]').clear().type(username);
        cy.get('input[id=Input_PasswordVal2]').clear().type(`${password}{enter}`, { log: false });
    }
  
    getErrorMessage(errorMsg) {
      cy.get('.feedback-message-error .feedback-message-text').should('have.text', errorMsg)
    }
  }
  
  export default new LoginPage();
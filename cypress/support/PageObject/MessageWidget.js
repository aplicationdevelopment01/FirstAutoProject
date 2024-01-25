class MessageWidget{
    getErrorMessage(errorMsg) {
        cy.get('.feedback-message-error .feedback-message-text').should('have.text', errorMsg)
      }
    getWarningMessage(errorMsg) {
        cy.get('.feedback-message-warning .feedback-message-text').should('have.text', errorMsg)
      }
    getSuccessMessage(errorMsg) {
        cy.get('.feedback-message-success .feedback-message-text').should('have.text', errorMsg)
      }
}
export default new MessageWidget();
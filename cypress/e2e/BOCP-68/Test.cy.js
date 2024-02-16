describe('Test Widget', () => {
    it('Should Get Upload Widget', () => {
        cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/TestJanu/TestAutomation')
        cy.get('#UploadBinary')
    })
})

import DatePicker from "../../support/PageObject/DatePicker"

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://samaktamitrapt-tst.outsystemsenterprise.com/Marvel_web/Login')
  })
  it('passes', () => {
    cy.get('#Input_UsernameVal2').clear().type('testercypress@yopmail.com')
    cy.get('#Input_PasswordVal2').clear().type(`${12345678}{enter}`, { log: false })
    //cy.scrollTo('bottom')
    cy.contains('button', '+ New Idea').click()
    cy.get('div[data-tooltip="Select grouping..."]').click()
    cy.get('.vscomp-dropbox-wrapper.vscomp-wrapper.has-clear-button.has-search-input.text-direction-ltr.popup-position-center.focused > .vscomp-dropbox-container > .vscomp-dropbox > .vscomp-options-container >.vscomp-options-list > .vscomp-options').find('div[data-index="2"]').should('be.visible').click()
  })
})
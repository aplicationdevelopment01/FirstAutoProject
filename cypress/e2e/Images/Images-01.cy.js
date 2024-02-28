import DatePicker from "../../support/PageObject/DatePicker"

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://samaktamitrapt-tst.outsystemsenterprise.com/InternshipManagementSystem/')
  })
  it('passes', () => {
    cy.get('input#Input_Username').type('SecHead-Ibram2')
    cy.get('input#Input_Password').type('123456')
    cy.get('.btn.btn-secondary.btn-large.OSFillParent').click()
    cy.wait(3000)

    cy.get('a[href="/InternshipManagementSystem/RequestList"]').click()
    //cy.visit('https://samaktamitrapt-tst.outsystemsenterprise.com/InternshipManagementSystem/RequestList')
    cy.get('.btn.btn-secondary').click()

    DatePicker.fillDatePickerPika("2024", "February", 14)
  
    cy.get('#Input7').click()
    cy.get('.choices__list.choices__list--dropdown > .choices__list').find('div[data-value="abc"]').click()
  })
})
import LoginPage from "../../support/PageObject/LoginPage"
import DatePicker from "../../support/PageObject/DatePicker"
import MessageWidget from "../../support/PageObject/MessageWidget"

describe('Click Button New Cluster', () => {
  beforeEach(() => {
    LoginPage.visit();
  })
  it('Should Create new cluster with same kode cluster within the same project', () => {
    cy.viewport(1280, 720)
    LoginPage.fillCredentials("sa1", "123456")
    cy.get('#b2-LinkManage').should('have.text', "Manage")
    cy.get('#b2-LinkManage').click()
    cy.url().should('include', '/SML_BankOfProject_Web/Manage')
    cy.get('#TabsHeaderItemCluster .osui-tabs__header-item').click()
    cy.get('#b16-ButtonNewCluster').click()
    cy.get('#b16-PopupEdit').should('be.visible')
    cy.contains('label', 'Project')
    cy.contains('label', 'Building Type')
    cy.contains('label', 'Cluster Code')
    cy.contains('label', 'Cluster Name')
    cy.contains('label', 'Description')
    cy.contains('label', 'Start Date')
    cy.contains('label', 'End Date')
    cy.contains('label', 'Is Active')

    cy.wait(2000)
    cy.get('select#b16-Dropdown2').select('GOPEK')
    cy.get('select#b16-Dropdown1').select('High Rise')
    cy.get('#b16-Input_ProjectCode').type('0001')
    cy.get('#b16-Input_ProjectName').type('Cluster Angkasa')
    cy.get('#b16-Input_Description').type('Ini Description')
    DatePicker.fillDatePicker("b16-b4-DatepickerAccessibilityInfo", 2025, "February", 21)
    DatePicker.fillDatePicker("b16-b5-DatepickerAccessibilityInfo", 2025, "February", 22)
    
    cy.get('#b16-SaveNewCluster').click()
    MessageWidget.getWarningMessage("Cluster recently added!")
  })
  it('Should Fill all the data from the form and submit', () => {
    cy.viewport(1280, 720)
    LoginPage.fillCredentials("sa1", "123456")
    cy.get('#b2-LinkManage').should('have.text', "Manage")
    cy.get('#b2-LinkManage').click()
    cy.url().should('include', '/SML_BankOfProject_Web/Manage')
    cy.get('#TabsHeaderItemCluster .osui-tabs__header-item').click()
    cy.get('#b16-ButtonNewCluster').click()
    cy.get('#b16-PopupEdit').should('be.visible')
    cy.contains('label', 'Project')
    cy.contains('label', 'Building Type')
    cy.contains('label', 'Cluster Code')
    cy.contains('label', 'Cluster Name')
    cy.contains('label', 'Description')
    cy.contains('label', 'Start Date')
    cy.contains('label', 'End Date')
    cy.contains('label', 'Is Active')

    cy.wait(2000)
    cy.get('select#b16-Dropdown2').select('GOPEK')
    cy.get('select#b16-Dropdown1').select('High Rise')
    cy.get('#b16-Input_ProjectCode').type('0001')
    cy.get('#b16-Input_ProjectName').type('Cluster Angkasa')
    cy.get('#b16-Input_Description').type('Ini Description')
    DatePicker.fillDatePicker("b16-b4-DatepickerAccessibilityInfo", 2025, "February", 21)
    DatePicker.fillDatePicker("b16-b5-DatepickerAccessibilityInfo", 2025, "February", 22)

    cy.get('#b16-SaveNewCluster').click()
    MessageWidget.getSuccessMessage("Cluster Successfully Added!")
  })
})
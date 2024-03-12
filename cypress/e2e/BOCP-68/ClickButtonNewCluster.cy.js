import LoginPage from "../../support/PageObject/LoginPage"
import DatePicker from "../../support/PageObject/DatePicker"
import MessageWidget from "../../support/PageObject/MessageWidget"
import NewCluster from "../../support/PageObject/NewCluster"

describe('Click Button New Cluster', () => {
  beforeEach(() => {
    LoginPage.visit();
  })
  // it('Should Create new cluster with same kode cluster within the same project', () => {
  //   LoginPage.fillCredentials("saihsan@mailnesia.com", "Sml!@345?")
  //   cy.get('#b2-LinkManage').should('have.text', "Manage")
  //   cy.get('#b2-LinkManage').click()
  //   cy.url().should('include', '/SML_BankOfProject_Web/Manage')
  //   cy.get('#TabsHeaderItemCluster .osui-tabs__header-item').click()
  //   cy.get('#b16-ButtonNewCluster').click()
  //   cy.get('#b16-PopupEdit').should('be.visible')
  //   cy.contains('label', 'Project')
  //   cy.contains('label', 'Building Type')
  //   cy.contains('label', 'Cluster Code')
  //   cy.contains('label', 'Cluster Name')
  //   cy.contains('label', 'Description')
  //   cy.contains('label', 'Start Date')
  //   cy.contains('label', 'End Date')
  //   cy.contains('label', 'Is Active')
  //   cy.get('.input-text > .form-control ')
  //   cy.wait(2000)
  //   cy.get('select#b16-Dropdown2').select('GOPEK')
  //   cy.get('select#b16-Dropdown1').select('High Rise')
  //   cy.get('#b16-Input_ProjectCode').type('0001')
  //   cy.get('#b16-Input_ProjectName').type('Cluster Angkasa')
  //   cy.get('#b16-Input_Description').type('Ini Description')
  //   DatePicker.fillDatePicker("b16-b4-DatepickerAccessibilityInfo", 2025, "February", 21)
  //   DatePicker.fillDatePicker("b16-b5-DatepickerAccessibilityInfo", 2025, "February", 22)
  //   cy.get('#b16-SaveNewCluster').click()
  //   MessageWidget.getWarningMessage("Cluster recently added!")
  // })
  it('Should Fill all the data from the form and submit', () => {
    const VarIterate = 1
    
    

    LoginPage.fillCredentials("saihsan@mailnesia.com", "123")
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

    // Fill the input komen aja ini fitur apa daas
    NewCluster.CreateNeCluster(VarIterate)
  
  })
  // it('Should have required field', () => {
  //   LoginPage.fillCredentials("saihsan@mailnesia.com", "Sml!@345?")
  //   cy.get('#b2-LinkManage').should('have.text', "Manage")
  //   cy.get('#b2-LinkManage').click()
  //   cy.url().should('include', '/SML_BankOfProject_Web/Manage')
  //   cy.get('#TabsHeaderItemCluster .osui-tabs__header-item').click()
  //   cy.get('#b16-ButtonNewCluster').click()
  //   cy.get('#b16-PopupEdit').should('be.visible')
  //   cy.contains('label', 'Project')
  //   cy.contains('label', 'Building Type')
  //   cy.contains('label', 'Cluster Code')
  //   cy.contains('label', 'Cluster Name')
  //   cy.contains('label', 'Description')
  //   cy.contains('label', 'Start Date')
  //   cy.contains('label', 'End Date')
  //   cy.contains('label', 'Is Active') 
  //   cy.get('#b16-SaveNewCluster').click()
  //   cy.get('#b16-Dropdown2-container').find('span.validation-message').should('be.visible')
  //   cy.get('#b16-Dropdown1-container').find('span.validation-message').should('be.visible')
  //   cy.get('.input-text > #b16-Input_ProjectCode').next('span.validation-message').should('be.visible')
  //   cy.get('.input-text > #b16-Input_ProjectName').next('span.validation-message').should('be.visible')
  //   cy.get('span[class=input-date]').find('input[aria-describedby=b16-b4-DatepickerAccessibilityInfo]').next('span.validation-message').should('be.visible')
  //   cy.get('span[class=input-date]').find('input[aria-describedby=b16-b5-DatepickerAccessibilityInfo]').next('span.validation-message').should('be.visible')
  // })
})


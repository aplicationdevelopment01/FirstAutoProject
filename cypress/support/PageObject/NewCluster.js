import DatePicker from "./DatePicker";
import MessageWidget from "./MessageWidget";
import faker from "faker";

class NewCluster{
    CreateNeCluster(){
      const uuid = () => Cypress._.random(0, 1e6)
      const id = uuid()
      const testname = `testname${id}`

      cy.wait(2000)
      cy.get('select#b16-Dropdown2').select('GOPEK')
      cy.get('select#b16-Dropdown1').select('High Rise')
      cy.get('#b16-Input_ProjectCode').clear().type(testname)
      cy.get('#b16-Input_ProjectName').clear().type(faker.company.name())
      cy.get('#b16-Input_Description').clear().type('Ini Description')
      DatePicker.fillDatePicker("b16-b4-DatepickerAccessibilityInfo", 2025, "February", 21)
      DatePicker.fillDatePicker("b16-b5-DatepickerAccessibilityInfo", 2025, "February", 22)
      cy.get('#b16-SaveNewCluster').click()

    }
  }

  export default new NewCluster;
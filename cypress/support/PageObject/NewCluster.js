import DatePicker from "./DatePicker";

class NewCluster{
    CreateNeCluster(Iterate){
      cy.wait(2000)
      cy.get('select#b16-Dropdown2').select('GOPEK')
      cy.get('select#b16-Dropdown1').select('High Rise')
      cy.get('#b16-Input_ProjectCode').clear().type('0001')
      cy.get('#b16-Input_ProjectName').clear().type('Cluster Angkasa '+Iterate)
      cy.get('#b16-Input_Description').clear().type('Ini Description')
      DatePicker.fillDatePicker("b16-b4-DatepickerAccessibilityInfo", 2025, "February", 21)
      DatePicker.fillDatePicker("b16-b5-DatepickerAccessibilityInfo", 2025, "February", 22)
      cy.get('#b16-SaveNewCluster').click()
    }
  }

  export default new NewCluster;
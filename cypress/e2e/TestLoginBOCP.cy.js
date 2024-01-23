import LoginPage from "../support/PageObject/LoginPage"

describe('Test Login', () => {
  beforeEach(() => {
    LoginPage.visit();
  })
  it('passes', () => {
    //cy.intercept('https://samaktamitrapt-dev.outsystemsenterprise.com/SML_BankOfProject_Web/login').as('login');
    cy.wait(6000);
    LoginPage.fillCredentials("12345", "123456");
    LoginPage.getErrorMessage("[SMLUser] - invalid username and password")
    cy.viewport(1280, 720)
  })
})
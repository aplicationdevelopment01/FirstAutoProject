import LoginPage from "../support/PageObject/LoginPage"

describe('Test Login', () => {
  beforeEach(() => {
    LoginPage.visit();
  })
  it('Invalid User', () => {
    LoginPage.fillCredentials("12345", "123456");
    LoginPage.getErrorMessage("[SMLUser] - invalid username and password")
    cy.viewport(1280, 720)
  })
  it('Valid User', () => {
    LoginPage.fillCredentials("sa1", "123456");
    cy.viewport(1280, 720)
  })
})
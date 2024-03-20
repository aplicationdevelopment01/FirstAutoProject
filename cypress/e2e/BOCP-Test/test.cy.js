import LoginPage from "../../support/PageObject/LoginPage"

describe('Test Login', () => {
    beforeEach(() => {
        LoginPage.visit();
    })
    it('Test List Project', () => {
        LoginPage.fillCredentials("saihsan@mailnesia.com", "123")
        cy.get('#b2-LinkManage').should('have.text', "Manage")
        cy.get('#b2-LinkManage').click()
        cy.url().should('include', '/SML_BankOfProject_Web/Manage')
        cy.get('td[data-header="Project Code"]').contains('span', 'NI1O')//.find('td[data-header="Action"]')

        // Iterasi melalui setiap baris tabel
        cy.get('.table > tbody > tr').each(($row, index) => {
            // Jika ini adalah baris kedua (indeks 1), klik tombol aksi di dalamnya
            if (index === 0) { // Indeks dimulai dari 0
                cy.wrap($row).contains('button', 'Detail').click()
            }
        })
    })
})

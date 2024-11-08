describe('Caso de Teste Number Four', () => {
    it('Login com email e senha inválidos', () => {

        cy.visit('https://automationexercise.com')
        cy.get('a[href$=login]').click()
        cy.get('[class="fa fa-home"]').should('be.visible')
        // cy.get('[class="fa fa-home"]').click()
        // (Comentado mas estava sendo utilizado anteriormente para ter a certeza de que passaria pela tela inicial (Home))
        cy.get('[class="fa fa-lock"]').click()
        cy.get('[data-qa="login-email"]').type('11@testesamuelqa.com.br')
        cy.get('[data-qa="login-password"]').type('Samuel12345')
        cy.get('[data-qa="login-button"]').click()
        cy.get('[class="fa fa-lock"]').click()
        cy.contains("New User Signup!").should("be.visible")
        


        
    });
});
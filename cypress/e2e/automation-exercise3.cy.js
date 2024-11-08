describe('Caso de Teste Number Three', () => {
    it('Login com email e senha inválidos', () => {

        cy.visit('https://automationexercise.com')
        cy.get('a[href$=login]').click()
        cy.get('[class="fa fa-home"]').should('be.visible')
        cy.get('[class="fa fa-home"]').click()
        cy.get('[class="fa fa-lock"]').click()
        cy.get('[data-qa="login-email"]').type('2321312s1231232@testesamuelqa.com.br')
        cy.get('[data-qa="login-password"]').type('S122sad35')
        cy.get('[data-qa="login-button"]').click()
        cy.contains('Your email or password is incorrect!').should('be.visible')


        
    });
});
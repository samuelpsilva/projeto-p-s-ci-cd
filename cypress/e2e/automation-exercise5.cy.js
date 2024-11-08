describe('Caso de Teste Number Five', () => {
    it('Registro de Usuário com email já existente', () => {

        cy.visit('https://automationexercise.com')
        cy.get('a[href$=login]').click()
        cy.get('[class="fa fa-home"]').should('be.visible')
        cy.get('[class="fa fa-lock"]').click()
        cy.get('[data-qa="signup-name"]').click()
        cy.get('[data-qa="signup-name"]').type('Samuel')
        cy.get('[data-qa="signup-email"]').type('samuel@1.com')
        cy.get('[data-qa="signup-button"]').click()
        cy.contains('Email Address already exist!').should('be.visible')
    });
});
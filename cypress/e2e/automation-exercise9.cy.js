describe('Caso de Teste Number Nine', () => {
    it('Exercício 9', () => {
        cy.visit('https://automationexercise.com')
        cy.get('[class="fa fa-home"]').should('be.visible')
        cy.get('[href="/products"]').click()
        cy.contains('All Products').should('be.visible')
        cy.get('[name="search"]').click()
        cy.get('[name="search"]').type('Winter Top')
        cy.get('[class="btn btn-default btn-lg"]').click()
        cy.contains('Searched Products').should('be.visible')
        cy.contains('Winter Top').should('be.visible')



    });
});
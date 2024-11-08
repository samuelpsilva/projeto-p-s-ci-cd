describe('Caso de teste number eight', () => {
    it('Exercício 8', () => {
        cy.visit('https://automationexercise.com')
        cy.get('[href="/products"]').click()
        cy.contains('All Products').should('be.visible')
        cy.get('[href="/product_details/1"]').click()
        cy.contains('Blue Top').should('be.visible')
        cy.contains('Category: Women > Tops').should('be.visible')
        cy.contains('Rs. 500').should('be.visible')
        cy.contains('Availability').should('be.visible')
        cy.contains('Condition').should('be.visible')
        cy.contains('Brand').should('be.visible')

    });
});
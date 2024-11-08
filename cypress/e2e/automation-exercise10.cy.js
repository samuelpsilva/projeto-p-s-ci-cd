describe('Caso de teste Number TEN', () => {
    it('Exercício Número 10', () => {
        
        cy.visit('https://automationexercise.com')
        cy.get('[class="fa fa-home"]').should('be.visible')
        
        cy.get('[id="susbscribe_email"]')
          .scrollIntoView()
          .type('samuelqateste@teste.com')
        cy.get(('[id="susbscribe_email"]')).click()
        cy.get('[class="fa fa-arrow-circle-o-right"]').click()
        cy.contains('You have been successfully subscribed!').should('be.visible')
    });
});
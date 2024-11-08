describe('Caso de Teste Number Six', () => {
    it('Contact Us Form', () => {
        
        cy.visit('https://automationexercise.com')
        cy.get('[class="fa fa-envelope"]').click()
        cy.contains("Get In Touch").should('be.visible')
        cy.get('[data-qa="name"]').click()
        cy.get('[data-qa="name"]').type('Samuel')
        cy.get('[data-qa="email"]').click() 
        cy.get('[data-qa="email"]').type('samuel@suporte.com') 
        cy.get('[data-qa="subject"]').click()
        cy.get('[data-qa="subject"]').type("Feedback Automation")
        cy.get('[data-qa="message"]').click()
        cy.get('[data-qa="message"]').type('Ótimo site! A interface é intuitiva e as funcionalidades de automação economizam muito tempo.')
        cy.fixture('example.json').as('arquivo')
        cy.get('[name="upload_file"]').selectFile('@arquivo')

        cy.get('[data-qa="submit-button"]').click()
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible')
        cy.get('[class="btn btn-success"]').click()
        


    });
});
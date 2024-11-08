describe('Automation Exercise Testes Cases Number One', () => {
    it('Registrar um Usuário (1)', () => {
        cy.visit('https://automationexercise.com/test_cases')
        
        cy.get('a[href$=login]').click()

        cy.get('#form > div > div > div:nth-child(3) > div > form > input[type=text]:nth-child(2)').click()

        cy.get('#form > div > div > div:nth-child(3) > div > form > input[type=text]:nth-child(2)').type('Samuel QA')

        cy.get('#form > div > div > div:nth-child(3) > div > form > input[type=email]:nth-child(3)').type('samuel@33213.com')

        cy.get('#form > div > div > div:nth-child(3) > div > form > button').click()

        cy.get("#id_gender1").click()

        cy.get("#password").click().type('Samuel12345')
        
        cy.get('[data-qa="days"]').select('17')

        cy.get('[data-qa="months"]').select('June')

        cy.get('[data-qa="years"]').select('1998')

        cy.get('[name="newsletter"]').click()

        cy.get('[id="optin"]').click()

        cy.get('[data-qa="first_name"]').type('Samuel')

        cy.get('[data-qa="last_name"').type('Silva')

        cy.get('[data-qa="company"]').type('PGATS')

        cy.get('[data-qa="address"]').type('Brasília')

        cy.get('[data-qa="address2"]').type('Rua machado de farias')

        cy.get('[data-qa="country"]').select('Israel')

        cy.get('[data-qa="state"]').type('Goiás')

        cy.get('[data-qa="city"]').type('Floriano')

        cy.get('[data-qa="zipcode"').type('727372-330')

        cy.get('[data-qa="mobile_number"').type('(61)3322-3322')

        cy.get('[data-qa="create-account"]').click()

        cy.get('[data-qa="account-created"]').should('be.visible')

        cy.get('[data-qa="continue-button"]').click()

        //cy.get('[href="/delete_account"]').click()

        //cy.get('[data-qa="account-deleted"]').should('be.visible')

        //cy.get('[data-qa="continue-button"]').click() 


    });
});
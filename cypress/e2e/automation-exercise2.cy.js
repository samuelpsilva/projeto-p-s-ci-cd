describe('Caso de Teste Number Two', () => {
    it('Login com email e senhas corretos', () => {

   // Criando usuário para ser deletado nesse mesmo exercício

   cy.visit('https://automationexercise.com')
   cy.get('a[href$=login]').click()
   cy.get('#form > div > div > div:nth-child(3) > div > form > input[type=text]:nth-child(2)').click()
   cy.get('#form > div > div > div:nth-child(3) > div > form > input[type=text]:nth-child(2)').type('Samuel QA')
   cy.get('#form > div > div > div:nth-child(3) > div > form > input[type=email]:nth-child(3)').type('testeaaad12@testesamuelqa.com.br')
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

   // Após a conta criada (até a linha 29) agora ele deverá acessar
   cy.visit('https://automationexercise.com')   
   cy.get('[class="fa fa-home"]').should('be.visible')
   cy.get('[class="fa fa-home"]').click()
   cy.get('[class="fa fa-lock"]').click()

   cy.contains('Login to your account').should('be.visible')
   cy.get('[data-qa="login-email"]').click()
   cy.get('[data-qa="login-email"]').type('teste12@testesamuelqa.com.br')
   cy.get('[data-qa="login-password"]').type('Samuel12345')
   cy.get('[data-qa="login-button"]').click()
   cy.contains('Samuel QA').should('be.visible')
   cy.get('[class="fa fa-trash-o"]').click()
   cy.contains('Account Deleted!').should('be.visible')



    });
});
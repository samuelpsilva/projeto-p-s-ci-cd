describe('Caso de teste Final number 15', () => {
    it('Exercício 15', () => {

        cy.visit('https://automationexercise.com')
        cy.get('[class="fa fa-home"]').should('be.visible')
        cy.get('[class="fa fa-lock"]').click()
        cy.get('a[href$=login]').click()
        cy.get('#form > div > div > div:nth-child(3) > div > form > input[type=text]:nth-child(2)').click()
        cy.get('#form > div > div > div:nth-child(3) > div > form > input[type=text]:nth-child(2)').type('Samuel QA')
        cy.get('#form > div > div > div:nth-child(3) > div > form > input[type=email]:nth-child(3)').type("sxc00s3333@testesamuelqa.com.br")
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

        cy.get('[class="material-icons card_travel"]').click()
        

        cy.get('body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.single-products > div.productinfo.text-center > a').click()
        cy.get('[class="btn btn-success close-modal btn-block"]').click()
        cy.get('body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div > div:nth-child(4) > div > div.single-products > div.productinfo.text-center > a').click()
        cy.get('[class="btn btn-success close-modal btn-block"]').click()
        cy.get('body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div > div:nth-child(5) > div > div.single-products > div.productinfo.text-center > a').click()
        cy.get('[class="btn btn-success close-modal btn-block"]').click()

        cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(3) > a > i').click()

        cy.get('[class="btn btn-default check_out"]').click()
        //cy.get('Address Details').should('be.visible')
        cy.get('[class="form-control"]').click()
        cy.get('[class="form-control"]').type('Teste certinho!')

        cy.get('[class="btn btn-default check_out"]').click()
        cy.get('[name="name_on_card"]').click()
        cy.get('[name="name_on_card"]').type('Samuel Silva QA')
        cy.get('[data-qa="card-number"]').click()
        cy.get('[data-qa="card-number"]').type('5122 2222 2222 1111')

        cy.get('[data-qa="cvc"]').click()
        cy.get('[data-qa="cvc"]').type('005')

        cy.get('[data-qa="expiry-month"]').click()
        cy.get('[data-qa="expiry-month"]').type('05')

        cy.get('[data-qa="expiry-year"]').click()
        cy.get('[data-qa="expiry-year"]').type('1998')

        cy.get('[class="form-control btn btn-primary submit-button"]').click()


        //cy.get('Order Placed!').should('be.visible')


        cy.get('[class="fa fa-trash-o"]').click()

        cy.get('Account Deleted!').should('be.visible')

        cy.get('[data-qa="continue-button"]').click()
        
    });
});
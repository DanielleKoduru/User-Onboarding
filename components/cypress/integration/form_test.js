//Cypress-Testing Project
describe('Cypress Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });

    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const submitBtn = () => cy.get(`button[id="submitBtn"]`);
    const termsOfService = () => cy.get('[type="checkbox"]').check();

    it('should do some basic math', () => {
        expect(1 + 1).to.equal(2);
        expect(1 + 2).not.to.equal(4);
        expect({}).not.to.equal({}); //===
        expect({}).to.eql({}); //==
    });


    it('should display expected elements', () => {
        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        termsOfService().should('exist');
    });

    describe('Filling out inputs and canceling', () => {
        it('can get to correct url', () => {
            cy.url().should('include', 'localhost');
        });

        it('submit button should be disabled on initial load', () => {
            submitBtn().should('be.disabled');
        });

        it('adding text to input', () => {
            nameInput()
                .should('have.value', '')
                .type('How are you?')
                .should('have.value', 'How are you?')

            emailInput()
                .should('have.value', '')
                .type('teams@teams.com')
                .should('have.value', 'teams@teams.com')

            passwordInput()
                .should('have.value', '')
                .type('What is my password?')
                .should('have.value', 'What is my password?')
        });

        it('should enable submit button when all fields are filled in', () => {
            nameInput().type('Danielle')
            emailInput().type('danielle@teams.com')
            passwordInput().type('123Danielle')
            submitBtn().type('not.be.disabled')
        });
    });


});
Cypress.Commands.add('login', (login, senha) => {
    cy.get('input[formcontrolname="userName"]').type(login);
    cy.get('input[formcontrolname="password"]').type(senha);
    cy.get('button[type="submit"]').click();
})
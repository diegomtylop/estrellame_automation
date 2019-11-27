/// <reference types="cypress" />
describe('Data Driven testing', () => {

  const categorias = require('../fixtures/categorias')

//  categorias.forEach( (cat) => { console.log(cat)})

  categorias.forEach( (cat) => {
    it(` Categoria ${cat}`,() => {
      cy.visit('http://ec2-18-220-72-102.us-east-2.compute.amazonaws.com/estrellame/index.html');
      //dado un usuario autenticado
      cy.get('#email-input').click().type("d.montoya@globant.com");

      cy.get('button.login-button').click()

      cy.contains( cat );
    })
  })
})

//URL de la aplicación
const URL_INICIO = 'http://ec2-18-220-72-102.us-east-2.compute.amazonaws.com/estrellame/index.html';

//Información de las páginas con las cuales se va a interactuar
const paginaLogin = require('../paginas/pagina-login')
const paginaHome = require('../paginas/pagina-home')

//Describe las pruebas que vamos a realizar con el actual archivo
describe('Validaciones en la pantalla de logueo', function(){
  
  /**
   * VALIDACIÓN 1
   * GIVEN: (Dado) que visito la aplicación
   * WHEN: (Cuando) ingreso un correo inválido
   * THEN: (Entonces) espero ver un mensaje de error
   */
  it('Validación con un correo inválido', function(){
    cy.visit( URL_INICIO );
    //Como dar click sobre un elemento
    cy.get( paginaLogin.campoCorreo ).click().type("correoinvalido");

    cy.get( paginaLogin.botonLogin ).click()

    cy.get( paginaLogin.textoError ).should('have.text', 'No se ha ingresado un correo válido')
  })

  /**
   * VALIDACIÓN 2
   * GIVEN: (Dado) que visito la aplicación
   * WHEN: (Cuando) ingreso un correo válido pero de una cuenta que no existe
   * THEN: (Entonces) espero ver un mensaje de error
   */
  it('Validación con un correo que no existe en la aplicación', function(){
    cy.visit(URL_INICIO);
    
    cy.get( paginaLogin.campoCorreo ).click().type("noregistrado@estrellame.com");

    cy.get( paginaLogin.botonLogin ).click()

    cy.get( paginaLogin.textoError ).should('contain', 'no se encuentra registrado')
  })

  /**
   * VALIDACIÓN 3
   * GIVEN: (Dado) que visito la aplicación
   * WHEN: (Cuando) ingreso un correo válido de una cuenta que existe
   * THEN: (Entonces) espero navegar a la pantalla de inicio de la aplicación
   */
  it('Validación de una autenticación exitosa', function(){
    cy.visit(URL_INICIO);
    
    cy.get( paginaLogin.campoCorreo ).click().type("d.montoya@globant.com");

    cy.get( paginaLogin.botonLogin ).click()

    cy.get( paginaHome.imagenUsuario).should('be.visible')

    cy.get( paginaHome.imagenUsuario ).should('contain','Diego')
  });
})

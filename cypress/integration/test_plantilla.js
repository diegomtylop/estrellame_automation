//URL de la aplicación
const URL_INICIO = 'http://ec2-18-220-72-102.us-east-2.compute.amazonaws.com/estrellame/index.html';

//Información de las páginas con las cuales se va a interactuar
const paginaLogin = require('../paginas/pagina-login')
const paginaHome = require('../paginas/pagina-home')

//Describe las pruebas que vamos a realizar con el actual archivo
describe('Nombre de las validaciones que se van a definir', function(){
  
  /**
   * Comentario de los tests
   * GIVEN: (Dado) Precondición
   * WHEN: (Cuando) Interacción
   * THEN: (Entonces) Resultado esperado
   */
  it('Nombre de la validación', function(){
    //En nuestro caso el primer paso siempre será visitar la url de la página
    cy.visit( URL_INICIO );
    
    //Acá empezarías a escribir el paso a paso
  });

  //Si se van a realizar más validaciones se copian de acá hacía abajo
});

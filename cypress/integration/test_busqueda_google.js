describe('Mi primera prueba', function(){
  it('Realiza una búsqueda en google', function(){
    //Cómo navegar a una dirección web
    cy.visit('http://www.google.com');

    //Cómo dar click sobre un elemento
    cy.get('input[name="q"]').click();

    //Cómo escribir en un campo de texto
    cy.get('input[name="q"]').type("El navegador está poseído\n");

    //Cómo validar que un elemento esté visible
    cy.get('.logo').should('be.visible');
  })
})

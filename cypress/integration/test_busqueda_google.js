describe('Mi primera prueba', function(){
  it('No hace mucho que digamos', function(){
    //Cómo navegar a una dirección web
    cy.visit('http://www.google.com');

    //Cómo dar click sobre un elemento
    cy.get('input[name="q"]').click();

    //Cómo escribir en un campo de texto
    cy.get('input[name="q"]').type("WTF\n");
  })
})

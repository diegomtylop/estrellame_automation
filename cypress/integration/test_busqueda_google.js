describe('Mi primera prueba', function(){
  it('no hace mucho que digamos', function(){
    cy.visit('http://www.google.com');
    //Como dar click sobre un elemento
    cy.get('input[name="q"]').click();

    //Como enviar texto a a un elemento
    cy.get('input[name="q"]').type("WTF\n")
  })
})

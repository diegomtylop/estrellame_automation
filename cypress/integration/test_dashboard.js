describe('Ingreso a estrellame', function(){

  it('Valida que el formulario de envío de estrellas esté completo', function(){
    cy.visit('http://ec2-18-220-72-102.us-east-2.compute.amazonaws.com/estrellame/index.html');
    //dado un usuario autenticado
    cy.get('#email-input').click().type("d.montoya@globant.com");

    cy.get('button.login-button').click()

    //CUANDO doy click sobre alguna de las opciones para enviar estrellas
    cy.get('li.excellence').click()

    cy.get('#modalTitle').should('have.text','Excelencia')

    //VALIDAR LOS CAMPOS
    cy.get('#recipient-name').should('be.visible')

    cy.get('#message-text').should('be.visible')

    cy.get('.modal-footer').should('be.visible')
  });
})

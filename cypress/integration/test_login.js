describe('Validaciones en la pantalla de logueo', function(){


  it('valida que el correo sea valido', function(){
    cy.visit('http://ec2-18-220-72-102.us-east-2.compute.amazonaws.com/estrellame/index.html');
    //Como dar click sobre un elemento
    cy.get('#email-input').click().type("correoinvalido");

    cy.get('button.login-button').click()

    cy.get('#login-error').should('have.text', 'No se ha ingresado un correo válido')
  })

  it('valida que el correo esté registrado', function(){
    cy.visit('http://ec2-18-220-72-102.us-east-2.compute.amazonaws.com/estrellame/index.html');
    //Como dar click sobre un elemento
    cy.get('#email-input').click().type("noregistrado@estrellame.com");

    cy.get('button.login-button').click()

    cy.get('#login-error').should('contain', ' no se encuentra registrado')
  })

  it('autentica al usuario', function(){
    cy.visit('http://ec2-18-220-72-102.us-east-2.compute.amazonaws.com/estrellame/index.html');
    //Como dar click sobre un elemento
    cy.get('#email-input').click().type("d.montoya@globant.com");

    cy.get('button.login-button').click()

    cy.get('#username').should('be.visible')

    cy.get('#username').should('contain','Diego')
  });
})

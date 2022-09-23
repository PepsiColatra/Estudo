describe('Login e registro de usuarios alurapic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    })

     it('verificar mensagens validacao', () => {
         cy.contains('a', 'Register now').click();
         cy.contains('button', 'Register').click();
         cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
         cy.contains('button', 'Register').click();
         cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
         cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
         cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
     })

     it('saber se o email é invalido', () => {
         cy.contains('a', 'Register now').click();
         cy.contains('button', 'Register').click();
         cy.get('input[formcontrolname="email"]', ).type('Fábio');
         cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
        
     })

     it('saber se o username é invalido', () => {
         cy.contains('a', 'Register now').click();
         cy.contains('button', 'Register').click();
         cy.get('input[formcontrolname="userName"]', ).type('Pepsi');
         cy.contains('button', 'Register').click();
         cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
                
     })

    it('saber se o username é valido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]', ).type('pepsis');
        cy.contains('small', 'User available').should('be.visible');
        
    })

      it('saber se o username ja foi usado', () => {
          cy.contains('a', 'Register now').click();
          cy.contains('button', 'Register').click();
          cy.get('input[formcontrolname="userName"]', ).type('pepsi');
          cy.contains('button', 'Register').click();
          cy.contains('ap-vmessage', 'Username already taken').should('be.visible');
        
      })

     it('verifica mensagens de senha com menos de 8 caracteres', () => {
         cy.contains('a', 'Register now').click();
         cy.contains('button', 'Register').click();
         cy.get('input[formcontrolname="password"]', ).type('123');
         cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
                
     })

     it('fazer login de usuario valido', () => {
        cy.login('pepsi', '12345678')
        cy.contains('a', '(Logout)').should('be.visible');
     })

    it('fazer login de usuario invalido', () => {
        cy.login('pepsis', '12345678')
        cy.on ('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })
    
    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario => {
        
        it.only(`registra novo usuário ${usuario.userName} `, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
        })
    })



})
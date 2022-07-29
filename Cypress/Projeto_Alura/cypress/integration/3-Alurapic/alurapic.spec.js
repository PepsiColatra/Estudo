describe('Login e registro de usuarios alurapic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    })

    it('verificar mensagens validacao', () => {
        cy.contains('a', 'Register now').click();
    })

})
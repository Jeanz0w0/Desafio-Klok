describe('Busca de produto pela lista de departamentos', () => {

  it('Deve realizar pesquisa pela lista de departamento', () => {
    cy.visit('https://www.magazineluiza.com.br/');
    cy.get(':nth-child(1) > .gjpTVi > [data-testid="link"]').click(); //clica na aba de "todos os departamentos"
    cy.contains('Celulares e Smartphones').click();                   //clica na opição "Celulares e Smartphones"
    cy.contains('Celulares e Smartphones').should('be.visible');      //revisa se a pesquisa foi feita corretamente
  })
})
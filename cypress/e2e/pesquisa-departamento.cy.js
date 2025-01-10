describe('Busca de produto pelo buscador do site "Magazine Luiza"', () => {

  it('Deve realizar pesquisa pelo buscador do site', () => {
    cy.visit('https://www.magazineluiza.com.br/');
    cy.get(':nth-child(1) > .gjpTVi > [data-testid="link"]').click(); //clica na aba de "todos os departamentos"
    cy.contains('Celulares e Smartphones').click();                   //clica na opição "Celulares e Smartphones"
    cy.contains('Celulares e Smartphones').should('be.visible');      //revisa se a pesquisa foi feita corretamente
  })
})
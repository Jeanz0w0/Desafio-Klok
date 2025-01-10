describe('Busca de produto pelo buscador do site "Magazine Luiza"', () => {

  it('Realizar pesquisa pelo buscador do site', () => {
    cy.visit('https://www.magazineluiza.com.br/');                   //url do site
    cy.get('[data-testid="input-search"]').type('celulares{enter}'); //digita na caixa de pesquisa
    cy.contains('Resultados para').should('be.visible');             //revisa se a pesquisa foi feita corretamente
  })
})
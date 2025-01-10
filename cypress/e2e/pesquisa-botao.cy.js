describe('Busca de produto pelo buscador do site "Magazine Luiza"', () => {
  
  it('Deve realizar pesquisa clicando no botão "Celulares"', () => {
    cy.visit('https://www.magazineluiza.com.br/');                       //url do site
    cy.get(':nth-child(3) > .sc-fqkvVR > [data-testid="link"]').click(); //clica no botão 'celulares'
    cy.contains('Os mais vendidos da categoria').should('be.visible');   //revisa se a pesquisa foi feita corretamente
  })
})
describe('Realiza uma busca geral em todas as formas de pesquisar "celulares"', () => {
    beforeEach(() => {
        cy.visit('https://www.magazineluiza.com.br/'); //url do site
    })

    it('Deve realizar pesquisa pelo buscador do site', () => {
        cy.get('[data-testid="input-search"]').type('celulares{enter}');     //digita na caixa de pesquisa
        cy.contains('Resultados para').should('be.visible');                 //revisa se a pesquisa foi feita corretamente
    })
    it('Deve realizar pesquisa clicando no botão "Celulares"', () => {
        cy.get(':nth-child(3) > .sc-fqkvVR > [data-testid="link"]').click(); //clica no botão 'celulares'
        cy.contains('Os mais vendidos da categoria').should('be.visible');   //revisa se a pesquisa foi feita corretamente
    })
    it('Deve realizar pesquisa pela lista de departamento', () => {
        cy.get(':nth-child(1) > .gjpTVi > [data-testid="link"]').click();    //clica na aba de "todos os departamentos"
        cy.contains('Celulares e Smartphones').click();                      //clica na opição "Celulares e Smartphones"
        cy.contains('Celulares e Smartphones').should('be.visible');         //revisa se a pesquisa foi feita corretamente
    })
})
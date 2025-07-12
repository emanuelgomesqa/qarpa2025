class CommonPage {
    preencherCampo(path, value){
        cy.get(path).type(value, {delay: 0});
    }

    validarUrl(path){
        cy.url().should('include', path)
    }
}

export default new CommonPage();
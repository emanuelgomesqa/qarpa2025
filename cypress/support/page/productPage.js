class ProductPage {
    textoDoTitulo(text){
         cy.get('[data-test="title"]').should('have.text', text)
    }
}

export default new ProductPage()
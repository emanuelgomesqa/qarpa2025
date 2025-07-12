const ELEMENTS = {
    title: '[class="product_label"]'
}

class ProductsPage {

    textoDoTitulo(text){
        cy.get(ELEMENTS.title).contains(text).should('be.visible')
    }

}

export default new ProductsPage();
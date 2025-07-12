<<<<<<< HEAD
import { loginElement } from "../elements/loginElements";
import commonPage from "./commonPage";

class LoginPage {
    preencherCamposLogin(username, password){
        this.preencherCampoUsuario(username);
        this.preencherCampoSenha(password);
    }
    preencherCampoUsuario(username){
        commonPage.preencherCampo(loginElement.usernameField, username);
    };

    preencherCampoSenha(password){
        commonPage.preencherCampo(loginElement.passwordField, password);
    };

    clicarBotaoLogin(value){
        cy.contains(value).click();
    };
=======
const ELEMENTS = {
    username: '[data-test="username"]',
    password: '[data-test="password"]',
    btnLogin: '#login-button',
    errorMessage: '[data-test="error"]'
}

class LoginPage {

    preencherUsuario(usuario){
        if (usuario != '') {
            cy.get(ELEMENTS.username).type(usuario)
        }
    }

    preencherSenha(senha){
        if (senha != '') {
            cy.get(ELEMENTS.password).type(senha)
        }
    }

    clicarLogin(){
        cy.get(ELEMENTS.btnLogin).click()
    }

    loginAppAction(usuario,senha){
        cy.get(ELEMENTS.username).type(usuario)
        cy.get(ELEMENTS.password).type(senha)
    }

    verificarMensagemDeErro(mensagem){
        cy.get(ELEMENTS.errorMessage).should('be.visible')
        .and('contain', mensagem)
    }

>>>>>>> d9201dc2bd19bb09c707169087d9738c20d2cb9c
}

export default new LoginPage();
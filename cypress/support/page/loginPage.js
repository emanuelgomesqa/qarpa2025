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
}

export default new LoginPage();
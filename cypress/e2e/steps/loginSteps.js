/// <reference types="cypress" />

import { Given, When, Then, } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../support/page/loginPage";
import { loginElement } from "../../support/elements/loginElements";

let usersData;
let userError;
let currentUser;

beforeEach(() => {
    cy.fixture('users').then((dadosDoJson) => {
        usersData = dadosDoJson;
    })
    cy.fixture('usersStatusError').then((dadosDoErrorJson) => {
        userError = dadosDoErrorJson;
    })
});


Given(`que eu acesse a página de login`, () => {
   cy.visit('https://www.saucedemo.com');
});

When(`eu preencho o campo login {string}`, (value) => {
    loginPage.preencherCampoUsuario(value)
});

When(`eu preencho a senha {string}`, (value) => {
    loginPage.preencherCampoSenha(value)
});

When(`eu clico em  {string}`, (text) => {
    loginPage.clicarBotaoLogin(text)
});

Then(`o sistema irá para a tela de {string}`, () => {
    cy.get('[data-test="title"]').should('have.text', 'Products')
});

Given(`que eu preencho os campos de usuário e senha com as credenciais do usuário {string}`, (perfil_usuario) => {
    const user = usersData[perfil_usuario];
    
    loginPage.preencherCamposLogin(user.username, user.password)
});

When(`eu clico no botão {string}`, (text) => {
    loginPage.clicarBotaoLogin(text)
});

Then(`eu devo ser redirecionado para a tela de {string}`, () => {
    cy.url().should('include', '/inventory.html')
    cy.get('[data-test="title"]').should('have.text', 'Products')
});

When(`eu preencho os campos de usuário e senha com as credenciais do usuário {string}`, (perfil_invalido) => {
    const user = userError[perfil_invalido];
    cy.log(user.username)
    loginPage.preencherCamposLogin(user.username, user.password)
});

Then(`o sistema deve exibir a mensagem de erro {string}`, (mensagem) => {
    cy.get('[data-test="error"]').should('contain.text', mensagem)
});

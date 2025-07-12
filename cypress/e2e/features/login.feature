#language: pt

Funcionalidade: Validação do login do saucedemo
    Cenários voltados para os testes de login do saucedemo

Contexto: O usuário deve estar na página de login do saucedemo
    Dado que eu acesse a página de login

    Cenário: Validação do login válido
        Quando eu preencho o campo login "standard_user"
        E eu preencho a senha "secret_sauce"
        E eu clico em  "Login"
        Então o sistema irá para a tela de "Catálogo de produtos"


Cenário: Validação do login com diferentes tipos de usuário
    Dado que eu preencho os campos de usuário e senha com as credenciais do usuário "usuario_valido"
    Quando eu clico no botão "Login"
    Então eu devo ser redirecionado para a tela de "Catálogo de produtos"


    Esquema do Cenário: Tentativa de Login inválido
        Dado que eu acesse a página de login
        Quando eu preencho os campos de usuário e senha com as credenciais do usuário "<perfil_invalido>"
        E eu clico no botão "Login"
        Então o sistema deve exibir a mensagem de erro "<mensagem>"

        Exemplos:
            | perfil_invalido | mensagem |
            | usuario_em_branco  | Epic sadface: Username is required |
            | senha_em_branco | Epic sadface: Password is required |
            | credenciais_invalidas | Epic sadface: Username and password do not match any user in this service | 
            | credencial_incorreta | Epic sadface: Username and password do not match any user in this service | 
            | usuario_bloqueado | Epic sadface: Sorry, this user has been locked out. |
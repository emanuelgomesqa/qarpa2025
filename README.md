# - qarpa2025
Repositório para as automações. 



- support
    - commands (conjuntos de pages)
    - database (conexoes com db)
    - elements (Seletores)
    - messages (mensagensd e)
    - page
    
cypress/
└── support/
    └── page/
        └── LoginPage.js  <-- Nosso Page Object
    └── appActions/
        └── LoginActions.js  <-- Nosso App Actions
└── e2e/
    └── login_steps.js    <-- Seus step definitions do Cucumber
└── fixtures/
    └── users.json        <-- Seu fixture de usuários


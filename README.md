# IntroductionCypress
Introduction to Cypress: From beginner to pro


Prerequisitos:
- Node.js
- NPM

1. Instalar Cypress
https://docs.cypress.io/guides/getting-started/installing-cypress.html#npm-install

2. Escribir en la terminal para abrir cypress
./node_modules/.bin/cypress open
npx cypress open

3. Para instalar Cucumber con Cypress
npm  install --save-dev cypress-cucumber-preprocessor
4. Ingresar al package.json y agregar: "cypress:open": "cypress open"
5. Ahora ya podemos correr Cypress solamente ejecutando en la terminal: npm run cypress:open

6. Si queremos abrir Cypress en un nuevo proyecto. Debo hacer los siguientes comandos
npm init
npm i cypress
npx cypress open
Ingresar al package.json y agregar en "scripts" el comando: "cypress:open": "cypress open"
Ahora ya podemos correr Cypress solamente ejecutando en la terminal: npm run cypress:open
Para correr Cypress para grabar videos y screenshots agregamos en el package.json la linea: "test": "cypress run --spec \"**/*.feature\""
Ahora para correr Cypress sin levantar el Runner y grabar videos e imagenes lo corremos en la terminal para trabajar con Cypress CLI: npm test


Paginas web para practicar automatización
http://automationpractice.com
https://www.phptravels.net

-- Cypress con Cucumber
1. Dentro de la carpeta "integration" se agregan el "feature"
2. Dentro de la carpeta "support" se agregan los "steps_definitions"

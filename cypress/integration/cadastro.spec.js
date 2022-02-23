/// <reference types="cypress" />



var Chance = require('chance')
var chance = new Chance()

// Mocha --> Test Runner
// describe, context, it

describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado', () => {
    cy.visit('https://form-agilizei.netlify.app')

    // Inputs de texto/ textarea / email --> type
    cy.get('input[name=firstName]').type(chance.first())
    cy.get('input[name=lastName]').type(chance.last())
    cy.get('textarea[name=adress]').type(chance.address())
    cy.get('input[name=emailAdress]').type(chance.email())

    // Inputs radio/ checkboxes --> check
    cy.get('input[value=n]').check()

    cy.get('input[type=checkbox]').check('Netflix')
    cy.get('input[type=checkbox]').check('Dormir')

    // Inputs do tipo combobox / select --> select
    cy.get('select#countries').select('Dinamarca',{force: true})
    cy.get('select#years').select('2006',{force: true})
    cy.get('select#months').select('Julho',{force: true})
    cy.get('select#days').select('21',{force: true})
   
    // Inputs de senha --> type
    cy.get('input#firstpassword').type('Alunos@2021')
    cy.get('input#secondpassword').type('Alunos@2021')

    // Inputs dp tipo button --> click
    cy.contains('Finalizar cadastro').click()

    // espero que a minha aplicação seja direcionada para a listagem
    // url
    // deve conter listagem
    // should contain listagem
    cy.url().should('contain', 'listagem')

});
});
describe('Test Case: End-To-End ToDo App', () => {

    beforeEach('I should navigate to ToDo App', () => {
        cy.visit('http://todomvc-app-for-testing.surge.sh')
    });
    
    it.only('I should be able to add a new ToDo task', () => {
        cy.get('.new-todo').type('Go to the pharmacy').type('{enter}')
        cy.get('.new-todo').type('Call my mother').type('{enter}')
        cy.get('.new-todo').type('Read a book').type('{enter}')
    });
    
    it('I should be able to mark a task as completed', () => {
        cy.get(':nth-child(3) > .view > .toggle').click()
        cy.contains('Clear completed')
        cy.get('.clear-completed').should('have.text', 'Clear completed')    
    });
    
    it('I should be able to validate assertions to ToDo', () => {
        cy.get(':nth-child(2) > .view > .toggle').should('not.be.checked')
        cy.get(':nth-child(1) > a').should('be.visible')
        cy.get(':nth-child(2) > a').should('be.visible')
        cy.get(':nth-child(3) > a').should('be.visible')
        cy.get('label').should('have.css', 'padding')
        cy.get(':nth-child(2) > .view > label').should('have.text', 'Call my mother')
        cy.get(':nth-child(2) > .view > label').should('not.be.checked')
        cy.get('.completed > .view > label').should('have.css', 'text-decoration-line', 'line-through')
    });
    
    it('I should mark as completed a ToDo list', () => {
        cy.contains('Clear').click()
        cy.get('.todo-list li').should('have.length', 3)
    });    
});

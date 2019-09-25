it('I should navigate to ToDo App', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh')
});

it('I should be able to add a new ToDo task', () => {
    cy.get('.new-todo').type('Buy a car').type('{enter}')
    cy.get('.new-todo').type('Clean my room').type('{enter}')
    cy.get('.new-todo').type('Watch a Serie').type('{enter}')
});

it('Mark a task as completed', () => {
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
    cy.get(':nth-child(2) > .view > label').should('have.text', 'Clean my room')
    cy.get(':nth-child(2) > .view > label').should('not.be.checked')
    cy.get('.completed > .view > label').should('have.css', 'text-decoration-line', 'line-through')
});

it('I should mark as completed a ToDo', () => {
    cy.contains('Clear').click()    
});

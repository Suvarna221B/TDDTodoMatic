describe('Adding new task', () => {
    it('Adds the new task to the list', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('[id="new-todo-input"]')
        .type('New Task');
  
      cy.get('[id="submit-button"]')
        .click();
  
      cy.get('[id="new-todo-input"]')
        .should('have.value', '');
  
      cy.contains('New Task');
    });
  });
describe('Completing a task', () => {
    it('Toggles complete and adds it to the completed list', () => {
      cy.visit('http://localhost:3000');
  
      cy.contains('Repeat').click();
  
      cy.get('[type=button').contains('Completed').click();
  
      cy.get('[data-testid="todo-list"]').contains('Repeat');

    });
  });
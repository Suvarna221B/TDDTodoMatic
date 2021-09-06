describe('Deleting a task', () => {
    it('Delete the content of an existing class', () => {
      cy.visit('http://localhost:3000');
    
      cy.get('[data-testid="deletebutton-todo-1"]').click();
  
      cy.get('[data-testid="taskcontent"]').contains("Edited task").should('not.exist');

    });
});
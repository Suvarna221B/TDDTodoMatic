describe('Editing a task', () => {
    it('Editing the content of an existing class', () => {
      cy.visit('http://localhost:3000');
    
      cy.get('[data-testid="editbutton-todo-1"]').click();

      cy.get('[data-testid="edittasktext-todo-1"]').type("Edited task");

      cy.get('[id="Save"]').click();
      
      cy.get('[data-testid="taskcontent"]').contains("Edited task");

    });
  });
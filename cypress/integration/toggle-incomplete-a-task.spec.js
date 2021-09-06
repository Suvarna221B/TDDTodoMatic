describe('Incomplete task', () => {
    it('Toggles incomplete and adds it to the active list', () => {
      cy.visit('http://localhost:3000');
  
      cy.contains('Eat').click();
  
      cy.get('[type=button').contains('Active').click();
  
      cy.get('[data-testid="todo-list"]').contains('Eat');

    });
  });
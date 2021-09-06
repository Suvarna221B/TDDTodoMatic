import React, { useReducer } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './ToDo';

describe('<Todo/>',()=>{
    let toggleComplete,Edit,Delete,todo;
    beforeEach(async() => {
        toggleComplete = jest.fn().mockName("toggleComplete");
        Edit = jest.fn().mockName("Edit");
        Delete=jest.fn().mockName("Delete");
        ({todo} = render(<Todo id='task-0'
            name='Complete journal'
            completed={true}
            key= 'task-0'
            toggleTaskCompleted={toggleComplete}
            deleteTask={Delete}
            editTask={Edit}/>));
    });
    it("Toggle Event Completed",()=>{
        userEvent.click(document.querySelector("input[type=checkbox]"));
        expect(toggleComplete).toHaveBeenCalledWith('task-0');
    });

    it('Edit a task',()=>{
        userEvent.click(document.querySelector('#EditButton'));
        userEvent.type(document.querySelector('input.todo-text')," Complete task");
        userEvent.click(document.querySelector('button.todo-edit'));
        expect(Edit).toHaveBeenCalledWith('task-0'," Complete task");
    });

    it('Delete a task',()=>{
        userEvent.click(document.querySelector('button.delete-button'));
        expect(Delete).toHaveBeenCalledWith('task-0');
    });
})
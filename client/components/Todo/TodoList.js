import React, { Component } from "react";
import Todo from 'Todo';

class TodoList extends Component
{
    render() {

        const listTodos = this.props.todos.map((todo) =>
            <Todo key={todo.id} id={todo.id} name={todo.name} status={todo.status} />
        );

        return (
            <ul>
                {listTodos}
            </ul>
        );
    }
}

export default TodoList;
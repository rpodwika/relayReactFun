import React, { Component } from "react";

class Todo extends Component
{
    render() {
        const {id, name, status} = this.props.todo;

        return (
            <li>{id} {name} {status == true ? 'done' : 'incomplete'}</li>
        );
    }
}

export default Todo;
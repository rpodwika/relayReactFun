import React, {Component} from "react";
import Todo from './Todo';

class TodoList extends Component {
    static propTypes = {
        todos: React.PropTypes.object.isRequired
    };

    renderTodos() {
        const {todos} = this.props;

        return todos.edges.map(({node}) => (
            <Todo
                key={node.id}
                todo={node}
            />
        ));
    }

    render() {

        return (
            <ul>
                {this.renderTodos()}
            </ul>
        );
    }
}

export default TodoList;
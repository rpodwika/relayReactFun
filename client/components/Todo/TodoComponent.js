import React from 'react';
import Relay from 'react-relay';
import { Grid, Cell } from 'react-mdl';
import Page from '../Page/PageComponent';
import TodoList from './TodoList';

const pageSize = 30;

class TodoComponent extends React.Component {
    static propTypes = {
        todosCollection: React.PropTypes.object.isRequired
    };

    render() {
        console.log("rendering toods");
        console.log(this.props.todosCollection);
        return (
            <Page heading='TodoList'>
                <div style={{ width: '70%', margin: 'auto' }}>
                    <Grid>
                        <Cell col={12}>
                            <TodoList todos={this.props.todosCollection.todos}/>
                        </Cell>
                    </Grid>
                </div>
            </Page>
        );
    }
}


export default Relay.createContainer(TodoComponent, {
    initialVariables: {
        first: pageSize,
        before: null,
        after: null,
        last: null,
    },
    fragments: {
        todosCollection: () => Relay.QL`
          fragment on TodoCollection {
            id,
            todos(first: $first, before: $before, after: $after, last: $last) {
              edges {
                node {
                  id
                  name
                  status
                }
              }
            }
          }`
    }
});


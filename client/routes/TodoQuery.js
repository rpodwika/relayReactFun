import Relay from 'react-relay';

export default {
    todos: Component => Relay.QL`
    query {
      todos {
        ${Component.getFragment('todos')}
      }
    }
  `
};

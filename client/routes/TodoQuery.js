import Relay from 'react-relay';

export default {
    todosCollection: () => Relay.QL`query { todos }`,
};
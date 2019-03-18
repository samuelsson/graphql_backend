import Server from './server';
import graphql from './graphql';

const server = Server.init(4000);

server.app.use('/graphql', graphql);

server.start();

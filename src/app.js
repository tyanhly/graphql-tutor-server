
import express from 'express';
import graphqlHTTP from 'express-graphql';

import graphqlRoot from './graphql/root';
import graphqlSchema from './graphql/schema';

const app = express();

app.use('/', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlRoot,
    graphiql: true,
}));
app.listen(3000);
console.log('Running a GraphQL API server at localhost:3000');
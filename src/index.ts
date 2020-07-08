// graphql.js
import { ApolloServer } from 'apollo-server-lambda'
import { typeDefs } from './graphql/schema'

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export const graphqlHandler = server.createHandler();
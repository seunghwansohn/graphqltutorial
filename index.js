// index.js

import pkg from 'graphql-yoga';
const { GraphQLServer } = pkg;
import resolvers from "./graphql/resolver.js"

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers 
})

server.start(() => console.log("Graphql Server Running"))
// index.js

import pkg from 'graphql-yoga';
const { GraphQLServer } = pkg;
import resolvers from "./graphql/resolver.js"

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers 
})

server.start(() => console.log("Graphql Server Running"))

//흐름 : typeDefs => schema(가능한 요청 규정) 
// => resolvers(해당 스키마에 맞는 return값 줌)
// => return 값을 클라이언트에서 받음.
// resolver.js

import { people, getById, getMovies, addPerson } from "./db.js";

const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getById(id),
        movies: (_, { limit, rating }) => getMovies(limit, rating),
        // 위의 표현은 다음과 같음 
        //movies : function ({limit, rating}) {return getMovies(limit, rating)}
    },
    Mutation: {
        addPerson : (_, {name, age}) => addPerson(name, age)
    }
}



export default resolvers;


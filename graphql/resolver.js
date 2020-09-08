// resolver.js

import { people, getById, getMovies } from "./db.js";

const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getById(id),
        movies: (_, { limit, rating }) => getMovies(limit, rating)
    }
}



export default resolvers;
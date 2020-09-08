// graphql/db.js

export const people = [
  {
      id: 1,
      name: "Bae youngseop",
      age: 26,
      gender: "male"
  },
  {
      id: 2,
      name: "AAA",
      age: 20,
      gender: "female"
  },
  {
      id: 3,
      name: "BBB",
      age: 30,
      gender: "male"
  },
  {
      id: 4,
      name: "CCC",
      age: 40,
      gender: "female"
  },
  {
      id: 5,
      name: "DDD",
      age: 50,
      gender: "male"
  }
]

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id);
  return filteredPeople[0];
};

import fetch from "node-fetch";
const API_URL = "https://yts.am/api/v2/list_movies.json?"

export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;
    
    if (limit > 0) {
        REQUEST_URL += `&limit=${limit}`;
    }

    if (rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`;
    }

    return fetch(REQUEST_URL)
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(json => json.data.movies);
}
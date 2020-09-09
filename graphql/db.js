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
  const filteredPeople = people.filter(person => person.id === String(id));
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

export const addPerson = (name, age) => {
    const newPerson = {
        id : `${people.length + 1}`,
        name,
        age
    }
    people.push(newPerson)
    return newPerson
    // 아래의 request로 추가 가능
    // mutation{
    //     addPerson(name : "orico", age : 33){
    //       name
    //       age
    //     }
    // }
}
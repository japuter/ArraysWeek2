'use strict';

const num = prompt('How many movies?');

const movies = [];


for (let i = 0; i < num; i++) {
  const name = prompt('Movie name');
  const rating = +prompt('Movie rating (1-5)');
  const movie = {
    name: name,
    rating: rating,
  };
  movies.push(movie);
}

movies.sort(sortByRating);

console.log(movies)

function sortByRating(a, b) {
  return b.rating - a.rating;
}
for (const movies of movies) {
document.getElementById('target').innerHTML +=
`<li>${movie.name}, ${movie.rating}</li>`;
}

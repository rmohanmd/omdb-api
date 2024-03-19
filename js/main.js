const search = document.querySelector(".search");
const button = document.querySelector(".button");

const title = document.querySelector(".title");
let img = document.querySelector(".poster");

button.addEventListener("click", getFetch);
function getFetch() {
  //obtain your own personal api key from omdbapi.com
  //create a javascript file in the js folder named apikey.js
  //in the apikey.js file create a const OMDB_API_Key=""
  //place your key between the quotes.
  fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${search.value}`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      display(data.Search);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

function display(movieData) {
  title.innerHTML = `${movieData[0].Title} (${movieData[0].Year})`;
  img.src = movieData[0].Poster;
}

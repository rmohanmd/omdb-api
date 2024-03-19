//Variables
const search = document.querySelector(".search");
const button = document.querySelector(".button");
const title = document.querySelector(".title");
const img = document.querySelector(".poster");
const scroll = document.querySelector(".scroll");
const index = document.querySelector(".index");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
let searchData;
let displayCount;
let numberOfSearchResults;

//EventListeners
button.addEventListener("click", getFetch);
leftArrow.addEventListener("click", () => navigate("left"));
rightArrow.addEventListener("click", () => navigate("right"));
//Functions
function getFetch() {
  //obtain your own personal api key from omdbapi.com
  //create a javascript file in the js folder named apikey.js
  //in the apikey.js file create a const OMDB_API_Key=""
  //place your key between the quotes.
  fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${search.value}`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      searchData = data.Search;
      displayCount = 0;
      updateDisplay(searchData);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

function updateDisplay(movieData) {
  numberOfSearchResults = movieData.length;
  title.innerHTML = `${movieData[displayCount].Title} (${movieData[displayCount].Year})`;
  img.src = movieData[displayCount].Poster;
  scroll.style.display = "";
  index.textContent = `${displayCount + 1}/${numberOfSearchResults}`;
}
function navigate(direction) {
  if (direction == "left") {
    if (displayCount == 0) {
      displayCount = numberOfSearchResults - 1;
    } else {
      displayCount--;
    }
  } else {
    if (displayCount == numberOfSearchResults - 1) {
      displayCount = 0;
    } else {
      displayCount++;
    }
  }
  updateDisplay(searchData);
}

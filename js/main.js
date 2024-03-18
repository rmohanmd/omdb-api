function getFetch() {
  //obtain your own personal api key from omdbapi.com
  //create a javascript file in the js folder named apikey.js
  //in the apikey.js file create a const OMDB_API_Key=""
  //place your key between the quotes.
  fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=muppets`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

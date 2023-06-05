
import fetch from 'node-fetch';

(async function fun(){
    let fetcheadData;
const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "none"
    }
  };

  await fetch(
    "https://my-json-server.typicode.com/Mohammad-Abohasan/Movie-Catalog-CLI-App/blob/master/Movie", //https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  )
    .then(response => response.json())
    .then(response => (fetcheadData = response))
    .catch(err => console.error(err));
    console.log(fetcheadData);
  })();
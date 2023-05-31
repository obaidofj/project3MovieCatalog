// Display Movie Catalog: Read movie data from a JSON file and display a list of movies in the catalog.

// Add New Movie: Allow users to add new movies to the catalog by providing details such as title, director, release year, and genre. The movie data should be stored in the JSON file.

// Update Movie Details: Enable users to edit the details of a specific movie by selecting the movie from the catalog and updating its properties like title, director, release year, and genre.

// Delete Movie: Allow users to remove a movie from the catalog by selecting the movie and deleting it from the JSON file.

// Search and Filter: Implement search functionality that allows users to search for movies by title, director, or genre. Additionally, provide options for filtering the movie catalog based on specific criteria like genre or release year.

// Fetch Movie Data: Utilize the Fetch API to make HTTP requests to a movie database API (such as OMDB API) to fetch additional movies from the API and store it in the JSON file.

// Modules: Structure the project using modules to separate concerns and improve maintainability. Create separate modules for file handling, movie management, API requests, and user interaction.

// Async Programming: Implement asynchronous operations using Promises or async/await to handle file read/write operations and API requests.


//modules

//movie func modul
import {readJsonFile, writeToJSON , jsonData } from'./handelFiles.js';

export class movies{

    async displayCatalog()
    { 
        // (async ()=>{
        console.log("dis1");

        let data=await readJsonFile('movies.json');
        console.log("dis2", data);
        // })();
        // console.log(JSON.stringify(jsonData, null, 2));
    }

    addNewMovie()
    {
        console.log("func");
    }


    updateMoveDeials()
    {
        console.log("func");
    }

    deleteMovie()
    {
        console.log("func");
    }

    searchMovies(searchType,searchVal)
    {
        console.log("func");
    }

    fetchFromServer()
    {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWQyMWI0ZjcwZDkzNWJkMjVhMGNkNTIwYmQxZGY1MSIsInN1YiI6IjY0NzYyNDg3MWJmMjY2MDQzZWNkZjc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IOgGvBdUcRVaoCtikEGGgk84H8AWV_O4Go8p78cwj48'
            }
          };
          
          fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
}



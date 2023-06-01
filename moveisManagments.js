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
import {readJsonFile, writeToJSON , jsonData } from'./filesHandling.js';

export class movies{
 
    data;

    constructor(data=[]) {
        this.data = data;
      }

    async displayCatalog()
    { 
       
        this.data=await readJsonFile('movies.json');

    if(this.data.length!==0)
        this.data.forEach((el,ind)=>{
            console.log(`------------------------------------------------------------------`);
            console.log( `# ${ind}: \t ID: ${el.id} \n \tMovie Tile: ${el.title} \n \tDirector: ${el.director} \n \tRelease Year:  ${el.relase_year} \n \tGenre:  ${el.genre} `);
            console.log(`------------------------------------------------------------------`);
        })
     else
      console.log(` \tThe File Is Empty (><) , \n\tyou can choose 2 to add new movie or 6 to fetch data from server `);
  
    }

    async addNewMovie(movie)
    {
        this.data=await readJsonFile('movies.json');
        this.data.push(movie);
        let res=await writeToJSON(this.data);
        if(res===true)
        console.log(`\n\tMovie data added succssfully`);

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

    async fetchFromServer()
    {
        let fetcheadData;

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWQyMWI0ZjcwZDkzNWJkMjVhMGNkNTIwYmQxZGY1MSIsInN1YiI6IjY0NzYyNDg3MWJmMjY2MDQzZWNkZjc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IOgGvBdUcRVaoCtikEGGgk84H8AWV_O4Go8p78cwj48'
            }
          };
          
          await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
            .then(response => response.json())
            .then(response => fetcheadData=JSON.parse(response))
            .catch(err => console.error(err));
        
        fetcheadData.forEach( el =>{

        })
         
    }
}



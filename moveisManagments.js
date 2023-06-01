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
import { readJsonFile, writeToJSON, jsonData } from "./filesHandling.js";
import * as utils from "./helperFunctions.js";
import { moveiClassObj as obj , chooseMode } from "./main.js";
import { input as inp, rl } from "./inputHandling.js";

let eqeIdOfChoice={
    1:28,
    2: 35,
    3: 99,
    4: 18
  }
  
const input =new inp();
export class movies {
  data = [];

  constructor(data = []) {
    (async () => {
      this.data = await readJsonFile("movies.json");
    })();
  }

  async displayCatalog() {
    // this.data = await readJsonFile("movies.json");

    if (this.data.length !== 0)
      this.data.forEach((el, ind) => {
        console.log(
          `------------------------------------------------------------------`
        );
        console.log(
          `#Seq_ ${ind}: \t ID: ${el.id} \n \tMovie Tile: ${el.title} \n \tDirector: ${el.director} \n \tAbout the Movie:  ${el.relase_year} \n \tRelease Year:  ${el.relase_year} \n \tGenre:  ${el.genre} `
        );
        console.log(
          `------------------------------------------------------------------`
        );
      });
    else
      console.log(
        ` \tThe File Is Empty (><) , \n\tyou can choose 2 to add new movie or 6 to fetch data from server `
      );
  }

  async addNewMovie(movie) {
    // this.data = await readJsonFile("movies.json");
    this.data.push(movie);
    let res = await writeToJSON(this.data);
    if (res === true) console.log(`\n\t>> Movie data added succssfully`);
  }

  updateMoveDeials() {
    console.log("func");
  }

  async deleteMovie() {
    
  console.log(`Enter the id for the Movie you want to delete :`);
  let elInd = "";

  elInd = await enterValidIDofObj(this.data);
  if(elInd!=='')
  {
    let id=this.data[elInd].id;
    let title=this.data[elInd].title;
    this.data.splice(elInd, 1);
    console.log(`
    the Movie with ID: ${id} and has Title: ${title} , now is deleted`);
  }
  
  }

  searchMovies(searchType, searchVal) {
    console.log("func");
  }

  async fetchFromServer() {
    let fetcheadData;
    let newAdaptedMovies = [];

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWQyMWI0ZjcwZDkzNWJkMjVhMGNkNTIwYmQxZGY1MSIsInN1YiI6IjY0NzYyNDg3MWJmMjY2MDQzZWNkZjc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IOgGvBdUcRVaoCtikEGGgk84H8AWV_O4Go8p78cwj48"
      }
    };

    await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then(response => response.json())
      .then(response => (fetcheadData = response))
      .catch(err => console.error(err));
    let maxCurId = utils.getLargestID(obj.data) ;
    let i = 0;
    newAdaptedMovies = fetcheadData.results.map(el => {
        i++;
      return {
        id: maxCurId + i,
        original_server_film_id: el.id,
        title: el.title,
        director: "-",
        about: el.overview,
        relase_year: new Date(el.release_date).getFullYear(),
        genre: el.genre_ids
          .map(el => {
            return getNameById[el];
          })
          .join(",")
      };
      
    });

    this.data = this.data.concat(newAdaptedMovies);

    let res = await writeToJSON(this.data);
    if (res === true) console.log(`\n\tMovies Fetched and added succssfully`);
  }


  async  getMovieData(){
    
    console.log('Enter Movie Name: ');
    let title;
    while (true) {
       title=await input.getInput();
      if (utils.isValidTextInput(title,'title')) break;
    }
  
  console.log(title);
  console.log("Enter Movie Director: ");
  let director;
  while (true) {
     director=await input.getInput();
    if (utils.isValidTextInput(director,'director')) break;
  }
  
  console.log(director);
  console.log("Enter Info about Movie: ");
   let about
  while (true) {
   about=await input.getInput();
    if (utils.isValidTextInput(about,'about')) break;
  }
  console.log(about);
  console.log("Enter Movie Release Year: ");
  let year
  while (true) {
    year=await input.getInput();
    if (utils.isValidYear(year)) break;
  }
  console.log(year);
  console.log("Enter Movie gener (1 for Action , 2 for Comedy , 3 for Documentary , 4 for Drama): ");
  let gener;
  while (true) {
    gener=await input.getInput();
    if (utils.isValidGenreChoice(gener)) break;
  }
  console.log(gener);
  let movie={
    "id": utils.getLargestID(obj.data)+1 ,
    "title": title ,
    "director": director,
    "about": about ,
    "relase_year": year ,
    "genre": utils.getNameById[eqeIdOfChoice[Number(gener)]]
  }
  return movie;
  }


}


async function enterValidIDofObj(arOfObjects) {
    let elInd = "";
  
    while (true) {
      let tid = -1;
      let elInd = "";
  
      tid = await input.getInput();
  
      arOfObjects.forEach((element, ind) => {
        if (element["id"] === parseInt(tid)) {
          elInd = ind;
          return;
        }
      });
  
      if (elInd === "") {
        console.log(
          `There is no Movie with ID: ${tid}. Please enter a valid Movie ID.`
        );
      } else return elInd;
    }
  }
  
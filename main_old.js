// Display Movie Catalog: Read movie data from a JSON file and display a list of movies in the catalog.

// Add New Movie: Allow users to add new movies to the catalog by providing details such as title, director,
//release year, and genre. The movie data should be stored in the JSON file.

// Update Movie Details: Enable users to edit the details of a specific movie by selecting the movie from the catalog
//and updating its properties like title, director, release year, and genre.

// Delete Movie: Allow users to remove a movie from the catalog by selecting the movie and deleting it from the JSON file.

// Search and Filter: Implement search functionality that allows users to search for movies by title, director, or genre.
//Additionally, provide options for filtering the movie catalog based on specific criteria like genre or release year.

// Fetch Movie Data: Utilize the Fetch API to make HTTP requests to a movie database API (such as OMDB API) to fetch additional
//movies from the API and store it in the JSON file.

//Here is your key: 78357e09
//Please append it to all of your API requests,
//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=78357e09

//https://www.themoviedb.org/settings/api
//e9d21b4f70d935bd25a0cd520bd1df51
//API Read Access Token
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWQyMWI0ZjcwZDkzNWJkMjVhMGNkNTIwYmQxZGY1MSIsInN1YiI6IjY0NzYyNDg3MWJmMjY2MDQzZWNkZjc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IOgGvBdUcRVaoCtikEGGgk84H8AWV_O4Go8p78cwj48

import prompt from "prompt-sync";
import { movies } from "./moveisManagments.js";

import readline from "readline";

const input = prompt();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let moveiClass = new movies();



async function getInput() {
  return new Promise(resolve => {
    rl.question("Enter your choice: ", choice => {
      resolve(choice);
    });
  });
}

async function main() {
  let choice = "";

  const processInput = () => {
    return getInput()
      .then(userChoice => {
        choice = userChoice;
        console.log(choice);

        if (choice !== "0") {
          moveiClass.displayCatalog().then(() => {
            // processInput();
          });
        }
      })
      .then();
  };

  processInput().then(() => {
    
    // console.log("sadassad");

  });
}

// main().then(()=>{
//   // rl.close();
  
//   main();
// });
rl.question("Enter your choice: ", choice => {
    console.log (choice);
   });
   
   rl.resume();// close();
  //  moveiClass.displayCatalog().then(() => {
  //   rl.close();
  // });
  rl.question("Enter your choice2: ", choice => {
    console.log (choice);
   });

function printProgramMenu() {
  console.log(`
***************************
    Welcome to Movies Catalog APP
    ***************************
    Select an action:
    1) Display Movies Catalog
    2) Add New Movie
    3) Update Movie Details
    4) Delete Movie
    5) Search and Filter Movies
    6) Fetch Movie Data From Server
    7) Load Previouse Data
    8) Quite
    ***************************
    What's your choice?
`);
}

async function main2() {
  printProgramMenu();
  while (true) {
    const choice = input();
    switch (choice) {
      case "1":
        moveiClass.displayCatalog();
        break;
      case "2":
        moveiClass.addNewMovie();
        break;
      case "3":
        moveiClass.updateMoveDeials();
        break;
      case "4":
        moveiClass.deleteMovie();
        break;
      case "5":
        moveiClass.searchMovies();
        break;
      case "6":
        moveiClass.fetchFromServer();
        break;
      case "7":
        moveiClass.loadPreviouseData();
        break;
      case "8":
        rl.close();
        return;

      default:
        break;
    }
  }
}

// main();

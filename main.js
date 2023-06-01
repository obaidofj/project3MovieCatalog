
import fs from 'fs';
import { movies } from "./moveisManagments.js";
import { input as inp, rl } from "./inputHandling.js";
import * as utils from'./helperFunctions.js';


 let chooseMode;
export { chooseMode };
chooseMode= true;

export let moveiClassObj = new movies();
let input = new inp();

let eqeIdOfChoice={
  1:28,
  2: 35,
  3: 99,
  4: 18
}



export async function handelKey(key) {
  if (!isNaN(key.name) && key.name != "" && chooseMode != false) {
    chooseMode = false;
    switch (key.name) {
      case "1": 
        console.log(`You Chosed the choice to ':'\n# > > `);

        (async () => {
            await moveiClassObj.displayCatalog();
            console.log("\nChoose what to do next ");
            chooseMode = true;
        })();
        break;
      case "2":
        console.log(`You Chosed the choice to ':'\n# > > `);
        (async () => {
          let movie= await getMovieData();
          await moveiClassObj.addNewMovie(movie);
        
        console.log("\nChoose what to do next ");
        chooseMode = true;
        })();
        break;
      case "3":
        console.log(`You Chosed the choice to ':'\n# > > `);

        (async () => {
          moveiClassObj.updateMoveDeials();
          console.log("\nChoose what to do next ");
          chooseMode = true;
        })();
        break;
      case "4":
        console.log(`You Chosed the choice to ':'\n# > > `);
        // rl.resume();
        // rl.write("  ");
        chooseMode = false;
        (async () => {
          moveiClassObj.deleteMovie();
          console.log("\nChoose what to do next ");
          chooseMode = true;
        })();
        
        break;
      case "5":
        console.log(`You Chosed the choice to ':'\n# > > `);
        (async () => {
          moveiClassObj.searchMovies();
          console.log("\nChoose what to do next ");
          chooseMode = true;
        })();
        break;
      case "6":
        console.log(
          `You Chosed the choice to ':'\n# > > ` );
        (async () => {
          await moveiClassObj.fetchFromServer();
          console.log("\nChoose what to do next ");
          chooseMode = true;
        })();
        break;
        case "7":
        console.log(
          `You Chosed the choice to 'Sort tasks by the due date:'\n# > > ` );
        (async () => {
          moveiClassObj.loadPreviouseData();
          console.log("\nChoose what to do next ");
          chooseMode = true;
        })();
        break;
      case "8":
        console.log(`You Chosed the choice to Quit: bye ..! `);
        rl.close();
        break;
        case "0":
          (async () => {
          await readJsonFile('movies.json')
          console.log("\nChoose what to do next ");
          chooseMode = true;
        })();
          break;
      default:
        console.log(
          `You have to choose a number (between 1 to 9) to do action as the List Above`
        );
        chooseMode = true;
        break;
    }
  } else if (key && key.name === "enter") {
    console.log("");
  } else if (chooseMode == true) {
    console.log(
      "You have to choose a number (between 1 to 9) to do action as the List Above"
    );
  } else if (chooseMode == false) {
    process.stdout.write(key.sequence);
  }
  };


async function getMovieData(){
  chooseMode = false;
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
  "id": utils.getLargestID(moveiClassObj.data)+1 ,
  "title": title ,
  "director": director,
  "about": about ,
  "relase_year": year ,
  "genre": utils.getNameById[eqeIdOfChoice[Number(gener)]]
}
return movie;
}

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

printProgramMenu();



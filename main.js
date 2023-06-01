
import fs from 'fs';
import { movies } from "./moveisManagments.js";
import { input as inp, rl } from "./inputHandling.js";

let chooseMode = true;
let moveiClass = new movies();
let input = new inp();




export async function handelKey(key) {
  if (!isNaN(key.name) && key.name != "" && chooseMode != false) {
    chooseMode = false;
    switch (key.name) {
      case "1":
        console.log(`You Chosed the choice to ':'\n# > > `);

        (async () => {
            await moveiClass.displayCatalog();
            console.log("\nChoose what to do next ");
            chooseMode = true;
        })();
        break;
      case "2":
        console.log(`You Chosed the choice to ':'\n# > > `);
        (async () => {
          let movie= await getMovieData();
          await moveiClass.addNewMovie(movie);
        
        console.log("\nChoose what to do next ");
        chooseMode = true;
        })();
        break;
      case "3":
        console.log(`You Chosed the choice to ':'\n# > > `);

        (async () => {
          moveiClass.updateMoveDeials();
          console.log("\nChoose what to do next ");
          chooseMode = true;
        })();
        break;
      case "4":
        console.log(`You Chosed the choice to ':'\n# > > `);
        rl.resume();
        rl.write("  ");
        (async () => {
          moveiClass.deleteMovie();
          console.log("\nChoose what to do next ");
          chooseMode = true;
        })();
          
        break;
      case "5":
        console.log(`You Chosed the choice to ':'\n# > > `);
        (async () => {
          moveiClass.searchMovies();
          console.log("\nChoose what to do next ");
          chooseMode = true;
        })();
        break;
      case "6":
        console.log(
          `You Chosed the choice to ':'\n# > > ` );
        (async () => {
          moveiClass.fetchFromServer();
          console.log("\nChoose what to do next ");
          chooseMode = true;
        })();
        break;
        case "7":
        console.log(
          `You Chosed the choice to 'Sort tasks by the due date:'\n# > > ` );
        (async () => {
          moveiClass.loadPreviouseData();
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
let title=await input.getInput();
console.log(title);
console.log("Enter Movie Director: ");
let director=await input.getInput();
console.log(director);
console.log("Enter Movie Release Year: ");
let year=await input.getInput();
console.log(year);
console.log("Enter Movie gener (1 for Action , 2 for Comedy , 3 for Documentary , 4 for Drama): ");
let gener=await input.getInput();
console.log(gener);
let movie={
  "id":2,
  "title": title ,
  "director": director,
  "relase_year": year ,
  "genre": "fiction"
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



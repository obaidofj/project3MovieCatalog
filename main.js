
import fs from 'fs';
import { movies } from "./moveisManagments.js";
import { input as inp, rl } from "./inputHandling.js";
import * as utils from'./helperFunctions.js';


 let chooseMode;
export { chooseMode };
chooseMode= true;

export let moveiClassObj = new movies();
let input = new inp();




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
        chooseMode = false;
        (async () => {
          let movie= await moveiClassObj.getMovieData();
          await moveiClassObj.addNewMovie(movie);
        
        console.log("\nChoose what to do next ");
        chooseMode = true;
        })();
        break;
      case "3":
        console.log(`You Chosed the choice to ':'\n# > > `);
        chooseMode = false;
        (async () => {
          await moveiClassObj.updateMoveDeials();
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
          await moveiClassObj.deleteMovie();
          console.log("\nChoose what to do next ");
          chooseMode = true;
        })();
        
        break;
      case "5":
        console.log(`You Chosed the choice to ':'\n# > > `);
        chooseMode = false;
        (async () => {
          await moveiClassObj.searchMovies();
          console.log("\nChoose what to do next ");
          chooseMode = true;
        })();
        break;
      case "6":
        console.log(
          `You Chosed the choice to ':'\n# > > ` );
          chooseMode = false;
        (async () => {
          await moveiClassObj.fetchFromServer();
          console.log("\nChoose what to do next ");
          chooseMode = true;
        })();
        break;
        case "7":
        console.log(
          `You Chosed the choice to ':'\n# > > ` );
          chooseMode = false;
        (async () => {
          await moveiClassObj.loadPreviouseData();
          console.log("\nChoose what to do next ");
          chooseMode = true;
        })();
        break;
        case "8":
        console.log(
          `You Chosed the choice to ':'\n# > > ` );
          chooseMode = false;
        (async () => {
          await moveiClassObj.clearFileData();
          console.log("\nChoose what to do next ");
          chooseMode = true;
        })();
        break;
      case "9":
        console.log(`You Chosed the choice to Quit: bye ..! `);
        rl.close();
        break;
        
      default:
        console.log(
          `You have to choose a number (between 1 to 8) to do action as the List Above`
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
      8) Clear File Data
      9) Quite
      ***************************
      What's your choice?
  `);
}

printProgramMenu();



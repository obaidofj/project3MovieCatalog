
import fs from 'fs';
import { movies } from "./moveisManagments.js";
import { input as inp, rl } from "./inputHandling.js";
import * as utils from'./helperFunctions.js';



let chooseMode;
let firstTime=true;
export { chooseMode };
chooseMode= true;
let printFinished=false;


export let moveiClassObj = new movies();
let input = new inp();




export async function handelKey(key) {
  if (!isNaN(key.name) && key.name != "" && chooseMode != false && printFinished==true) {
    chooseMode = false;
    switch (key.name) {
      case "1": 
        console.log(`You Chosed the choice to 'Display Movies Catalog:'\n# >>> `);

        (async () => {
            await moveiClassObj.displayCatalog();
            console.log("\n  Choose what to do next or press 0 to print the menu again ");
            chooseMode = true;
        })();
        break;
      case "2":
        console.log(`You Chosed the choice to 'Add New Movie:'\n# >>> `);
        chooseMode = false;
        (async () => {
          let movie= await moveiClassObj.getMovieData();
          await moveiClassObj.addNewMovie(movie);
        
        console.log("\n  Choose what to do next or press 0 to print the menu again ");
        chooseMode = true;
        })();
        break;
      case "3":
        console.log(`You Chosed the choice to 'Update Movie Details:'\n# >>> `);
        chooseMode = false;
        (async () => {
          await moveiClassObj.updateMoveDeials();
          console.log("\n  Choose what to do next or press 0 to print the menu again  ");
          chooseMode = true;
        })();
        break;
      case "4":
        console.log(`You Chosed the choice to 'Delete Movie:'\n# >>> `);

        chooseMode = false;
        (async () => {
          await moveiClassObj.deleteMovie();
          console.log("\n  Choose what to do next or press 0 to print the menu again  ");
          chooseMode = true;
        })();
        
        break;
      case "5":
        console.log(`You Chosed the choice to 'Search and Filter Movies:'\n# >>> `);
        chooseMode = false;
        (async () => {
          await moveiClassObj.searchMovies();
          
          chooseMode = true;
        })();
        break;
      case "6":
        console.log(
          `You Chosed the choice to 'Fetch Movie Data From Server:'\n# >>> ` );
          chooseMode = false;
        (async () => {
          await moveiClassObj.fetchFromServer();
          console.log("\n  Choose what to do next or press 0 to print the menu again  ");
          chooseMode = true;
        })();
        break;
        case "7":
        console.log(
          `You Chosed the choice to 'Load Previouse Data:'\n# >>> ` );
          chooseMode = false;
        (async () => {
          await moveiClassObj.loadPreviouseData();
          console.log("\n  Choose what to do next or press 0 to print the menu again  ");
          chooseMode = true;
        })();
        break;
        case "8":
        console.log(
          `You Chosed the choice to 'Clear File Data:'\n# >>> ` );
          chooseMode = false;
        (async () => {
          await moveiClassObj.clearFileData();
          console.log("\n  Choose what to do next or press 0 to print the menu again  ");
          chooseMode = true;
        })();
        break;
      case "9":
        console.log(`You Chosed the choice to Quit: bye ..! `);
        rl.close();
        break;
        case "0":
          chooseMode = true;
          printProgramMenu();      
        break;
      default:
        console.log(
          `\t<> You have to choose a number (between 1 to 8) to do action as the List Above, or press 0 to re print the list`
        );
        chooseMode = true;
        break;
    }
  } else if (key && key.name === "enter") {
    console.log("");
  } else if (chooseMode == true && printFinished==true) {
    console.log(
      "\t<> You have to choose a number (between 1 to 9) to do action as list, or press 0 to re print the program list"
    );
  } else if (chooseMode == false && printFinished==true) {
    process.stdout.write(key.sequence);
  }
  };




async function printProgramMenu() {
 await utils.animateMessage(`
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
      0) Print Program Menu
      ***************************
         What's your choice? 
                       `,firstTime);
 
 firstTime=false;

 setTimeout(()=>{
 printFinished=true;
 },1500);

}

printProgramMenu();



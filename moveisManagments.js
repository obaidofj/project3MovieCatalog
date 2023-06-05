

import { readJsonFile, writeToJSON, jsonData } from "./filesHandling.js";
import * as utils from "./helperFunctions.js";
import { moveiClassObj as obj , chooseMode } from "./main.js";
import { input as inp, rl } from "./inputHandling.js";
import fetch from 'node-fetch';

let eqevIdOfChoice={
    1:28,
    2: 35,
    3: 99,
    4: 18, 
    5: 12, 
    6: 16,
    7: 14, 
    8: 10751, 
    9: 36 ,
    10: 10402,
    11: 9648, 
    12: 10749, 
    13: 878, 
    14: 10770, 
    15: 53, 
    16: 10752 ,
    17: 37, 
    18: 80, 
    19: 27,
  }
 
  

const input =new inp();
export class movies {
  data = [];

  constructor(data = []) {
    (async () => {
      this.data = await readJsonFile("movies.json");
    })();
  }

  async displayCatalog(mode="",result=[]) {
   
    if(mode=="")
     result=this.data;

    if (result.length !== 0)
      result.forEach((el, ind) => {
       
        console.log(
          `#Seq_${ind+1}:---------------------------------------------------------- \n\tMovie ID: ${el.id} \n \tMovie Tile: ${el.title} \n \tDirector: ${el.director} \n \tAbout the Movie:  ${el.about} \n \tRelease Year:  ${el.release_year} \n \tGenre:  ${el.genre} `
        );
        console.log(
          `------------------------------------------------------------------`
        );
      });
    else
      console.log(
        ` \t= The File Is Empty (><) , \n\tyou can choose 2 to add new movie or 6 to fetch data from server or 7 to restore pervoiuse old data if any`
      );
  }

  async addNewMovie(movie) {
    this.data.push(movie);
    let res = await writeToJSON(this.data);
    if (res === true) console.log(`\n\t>> Movie data added succssfully`);
  }

  async updateMoveDeials() {

  console.log(`Enter the id for the Movie you want to Update its data :`);
  let elInd = "";


  elInd = await enterValidIDofObj(this.data);
  if(elInd!=='')
  {
    let id=this.data[elInd].id;
    let newData=await this.getMovieData("modify",this.data[elInd]);
    this.data[elInd].title=newData.title;
    this.data[elInd].director=newData.director;
    this.data[elInd].about=newData.about;
    this.data[elInd].release_year=newData.release_year;
    this.data[elInd].genre=newData.genre;

    let res = await writeToJSON(this.data);
    if (res === true)
    console.log(`
    the Data for the Movie with ID: ${id} is now updated.`);
  }
  
  
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
    let res = await writeToJSON(this.data);
    if (res === true)
    console.log(`
    the Movie with ID: ${id} and has Title: ${title} , now is deleted`);
  }
  else
   console.log("Error happen in writting to the file");
  
  }

  async searchMovies(searchType, searchVal) {
    let inp='',choice='';
    let searchResult=[];
    let searchWord=true;
    let generSearch=false;

    if(this.data.length==0){
        console.log(`\t\tThe data are empty , you can add Movei by choose 2 or choose 6 to fetch data from server or 7 to restore previouse saved data if any..`);
        return;
    }

    console.log(`\t\tChoose which search or filter for movies you want :
                    \t\t1- Search by Title.
                    \t\t2- Search for Director
                    \t\t3- Filter by Genre
                    \t\t4- Filter by year`);
    
  
  console.log(`Enter the choice you want:`);

  while(true) {
    choice=await input.getInput();
   if ([1,2,3,4].includes(Number(choice))) break;
 }
console.log(choice);

 if(choice==1)
 {
  console.log("Enter the title text you want to search for:");
  while(true) {
    inp=await input.getInput();
   if (utils.isValidTextInput(inp,"title")) break;
 }
 console.log(inp);
 searchResult=this.data.filter(function (el) {
  return (el.title.includes(inp) );
  });
 }
 else if(choice==2){
  console.log("Enter the director you want to search for:");
  while(true) {
    inp=await input.getInput();
   if (utils.isValidTextInput(inp,"director")) break;
 }
 console.log(inp);
 searchResult=this.data.filter(function (el) {
  return (el.director.includes(inp) );
  });
 }
 else if(choice==3){
  searchWord=false;
  generSearch=true;
  console.log(`Enter the genre you want to filter movies according it
                (1 for Action , 2 for Comedy , 3 for Documentary , 4 for Drama, 5 for Adventure
                  6 for Animation, 7 for Fantasy , 8 for Family  , 9 for History, 10 for Music,
                  11 for Mystery, 12 for Romance , 13 for Science Fiction, 14 for TV Movie, 
                  15 for Thriller, 16 for War , 17 Western ,18 for Crime , 19 for Horror ): `);
  while(true) {
    inp=await input.getInput();
   if (utils.isValidGenreChoice(inp) ) break;
 }
 console.log(inp);
 searchResult=this.data.filter(function (el) {
  return (el.genre.split(',').includes(utils.getNameById[eqevIdOfChoice[Number(inp)]]) );
  });
 }
 else if(choice==4){
  searchWord=false;
  console.log("Enter the year you want to filter movies according it:");
  while(true) {
    inp=await input.getInput();
   if (utils.isValidYear(inp)) break;
 }
 console.log(inp);
 searchResult=this.data.filter(function (el) {
  return (el.release_year==inp );
  });

 }

console.log(`\t${searchResult.length==0?'Sorry':''} There was ${searchResult.length} ${searchWord===true? "search":"filter"} results for (${generSearch?' - '+utils.getNameById[eqevIdOfChoice[Number(inp)]]+' - ':inp})`);
console.log(searchResult.length>0?"\t and here are them:":"");
if(searchResult.length!==0)
 { 
    this.displayCatalog("search",searchResult);
    console.log(`\n There was : ${searchResult.length} ${searchWord===true? "search":"filter"} Results, Press 5 if you want to do another search or choose another main choice from list or (press 0 to see the main list agin).  `);
 } 
 else{
    console.log("\nChoose what to do next (5 to do another search) or press 0 to print the main menu again ");
 }
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
        director: "no data for director",
        about: el.overview,
        release_year: new Date(el.release_date).getFullYear(),
        genre: el.genre_ids
          .map(el => {
            return utils.getNameById[el];
          })
          .join(",")
      };
      
    });

    this.data = this.data.concat(newAdaptedMovies);

    let res = await writeToJSON(this.data);
    if (res === true) console.log(`\n\tMovies Fetched and added succssfully`);
  }

  async loadPreviouseData(){
    let res,empty,madeEmpty=false;
    let answer='';
    let histData=[];
    histData = await readJsonFile("moviesHistoryData.json"); 
    
    if(histData.length==0 && this.data.length==0){
        console.log(`Booth History Data and Current data are empty. Nothing changed. regards..`);
        return;
    }

    if(histData.length==0)
    {   empty=true;
        console.log("History Data are Empty , are you sure you want to make current empty -and save current to history- (Y/yes or N/no) ?");
    
    while (true) {
        answer=await input.getInput();
       if (utils.isValidYesOrNo(answer)) break;
     }
    }

   
     if(['yes','y'].includes( answer.toLowerCase()) || empty!==true)
     {
      if(empty===true)
       madeEmpty=true;

      let noNeedToSaveHist=false;
      if(this.data.length!==0)
      {
       res = await writeToJSON(this.data,"moviesHistoryData.json");
      }
      else
      noNeedToSaveHist=true;
    this.data=histData;
    res = await writeToJSON(this.data,"movies.json");
    console.log(madeEmpty===true?"\n\tNow Current Data Empty":"\n\t>> =  Previouse Data Loaded Succssfully " + (noNeedToSaveHist!==true ? ", and Current Data Saved to History":""));
     }
  }

  async clearFileData(){
    let answer;
    if(this.data.length==0){
      console.log("Data already Empty, thanks .. ");
      return;
    }

    console.log("Are You Sure You Want to Delete All Data (Y/yes or N/no) ?");
    while (true) {
        answer=await input.getInput();
       if (utils.isValidYesOrNo(answer)) break;
     }
     if(['yes','y'].includes( answer.toLowerCase()) )
     {
    let res,res2;
    
    res = await writeToJSON(this.data,"moviesHistoryData.json");

    
    if (res === true)
    {
    this.data=[];
    res2 = await writeToJSON(this.data);
    if(res===true)
    console.log("\n\tThe data is cleared and saved to history");
    else {
        let restorRes;
        restorRes = await writeToJSON([],"moviesHistoryData.json");
    }
     }
    }
     else {
        console.log('okay , you choosed no.');
     }
  }

  async  getMovieData(type="new",data={}){
    
    console.log(type=="new"?'Enter Movie Name: ':"= => The Old name is:  "+data.title+"\n=> Enter Movie New Name:  ");
    let title;
    while (true) {
       title=await input.getInput();
      if (utils.isValidTextInput(title,'title')) break;
    }
  
  console.log(title);
  console.log(type=="new"?"Enter Movie Director: ":"= => The Old director is:  "+data.director+"\n=> Enter Movie New Director Name:  ");
  let director;
  while (true) {
     director=await input.getInput();
    if (utils.isValidTextInput(director,'director')) break;
  }
  
  console.log(director);
  console.log(type=="new"?"Enter Info about Movie: ":"= => The Old About info is:  "+data.about+"\n=> Enter Modified Info about Movie:  ");
   let about
  while (true) {
   about=await input.getInput();
    if (utils.isValidTextInput(about,'about')) break;
  }
  console.log(about);
  console.log(type=="new"?"Enter Movie Release Year: ":"= => The Old year is:  "+data.release_year+"\n=> Enter New True Movie Release Year:  ");
  let year
  while (true) {
    year=await input.getInput();
    if (utils.isValidYear(year)) break;
  }
  console.log(year);
  console.log(`${type=="new"?"Enter Movie gener":"= => The Old gener is:  "+data.genre+ "\n=> Enter New Movie gener:"}( 1 for Action , 2 for Comedy , 3 for Documentary , 4 for Drama , 5 for Adventure
                         6 for Animation, 7 for Fantasy , 8 for Family  , 9 for History, 10 for Music,
                         11 for Mystery, 12 for Romance , 13 for Science Fiction, 14 for TV Movie, 
                         15 for Thriller, 16 for War , 17 Western ,18 for Crime , 19 for Horror ):       `);
  let gener;
  while (true) {
    gener=await input.getInput();
    if (utils.isValidGenreChoice(gener)) break;
  }
  console.log(gener);

  let movie;
  if(type=="new"){
   movie={
    "id": utils.getLargestID(obj.data)+1 ,
    "title": title ,
    "director": director,
    "about": about ,
    "release_year": year ,
    "genre": utils.getNameById[eqevIdOfChoice[Number(gener)]]
  }
}
  else
  {
    
   movie={
    "title": title ,
    "director": director,
    "about": about ,
    "release_year": year ,
    "genre": utils.getNameById[eqevIdOfChoice[Number(gener)]]
  }
  }
  return movie;
  }
}


async function enterValidIDofObj(arOfObjects) {
    let elInd = "";
  
    while (true) {
      let objID = -1;
      let elInd = "";
  
      objID = await input.getInput();
  
      arOfObjects.forEach((element, ind) => {
        if (element["id"] === parseInt(objID)) {
          elInd = ind;
          console.log(objID);
          return;
        }
      });
  
      if (elInd === "") {
        console.log(
          `There is no Movie with ID: ${objID}. Please enter a valid Movie ID.`
        );
      } else return elInd;
    }
  }
  
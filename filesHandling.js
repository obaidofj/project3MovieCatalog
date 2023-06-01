// const fs = require('fs');
import fs from 'fs';
export let jsonData;




export const readJsonFile = async (filePath) => {
  try {
    const fileData = await fs.promises.readFile(filePath, 'utf8');
    if(fileData=='')
     return [];
     else
    {
      const jsonData = JSON.parse(fileData);
      return jsonData;
    }
  } catch (error) {
    console.error('Error reading JSON file:', error);
    throw error;
  }
}


export const writeToJSON = async (data) => {
  try {
  await fs.promises.writeFile("movies.json", JSON.stringify(data), 'utf-8');
 
  return true;
} catch (error) {
  console.error('Error reading JSON file:', error);
  throw error;
}
}

export const appendToJsonFile = () => {
  const newData = "";
  fs.appendFile("movie.txt", newData, "utf-8", (err) => {
    if (err) {
      console.log("Something went wrong while appending to the file!");
      console.log(err.message);
    } else {
      console.log("File has been updated.");
    }
  })
  
}

//this way without the ''input'' loop it works :
// (async ()=>{
// let data= await readJsonFile('movies.json');
// console.log( data);
// })();




import {readJsonFile, writeToJSON , jsonData } from'./handelFiles.js';

export class test 
{
    test(){
(async ()=>{
    console.log("dis1");

    let data=await readJsonFile('movies.json');
    console.log("dis2", data);
    })();
}

}


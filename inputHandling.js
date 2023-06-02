// const keypress = require('keypress');
import readline from "readline";
import {handelKey} from "./main.js";

export const rl = readline.createInterface({
    input: process.stdin,
    output: null,
    terminal: true
  });
  
   function overrideInput() {
    // Move the cursor to the beginning of the line
    rl.write("null", { ctrl: true, name: "u" });
    
  }
export class input {
  
  async  getInput(message) {
    let input = "";
    overrideInput();
    try {
       
      input = await new Promise(resolve => {
        rl.question(message, userInput => {
          resolve(userInput.trim());
        });
      });
    } catch (error) {
      console.error(error);
    } finally {
      
    }
  
    return input;
  }
  


}
  
async function handleKeyPress(_, key) {
    handelKey(key);
  }
  

  (async () => {
    process.stdin.on("keypress", handleKeyPress);
  })();
  
  process.stdin.setRawMode(true);
  process.stdin.resume();
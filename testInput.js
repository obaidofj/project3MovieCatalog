import readline from 'readline';
// import  readlineSync from 'readline-sync';
// const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function offerEditableText(defaultText) {
  return new Promise((resolve, reject) => {
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);

    let text = defaultText;
    let modifiedText = '';

    process.stdin.on('keypress', (key, info) => {
      if (info.name === 'backspace') {
        modifiedText = modifiedText.slice(0, -1);
      } else if (info.sequence === '\r') {
        rl.close();
      } else {
        modifiedText += key;
      }

      readline.clearLine(process.stdout, 0);
      readline.cursorTo(process.stdout, 0);
      process.stdout.write(`Current text: ${text}\nModify the text: ${modifiedText}`);
    });

    rl.on('close', () => {
      process.stdin.setRawMode(false);
      process.stdin.removeAllListeners('keypress');
      resolve(modifiedText);
    });

    process.stdout.write(`Current text: ${text}\nModify the text: `);
  });
}

async function run() {
  const defaultText = 'Hello, World!';
  const modifiedText = await offerEditableText(defaultText);
  console.log('\nModified text:', modifiedText);
}

// run();

function animateMessage1(message) {
    let frames = ['-', '\\', '|', '/']; // Frames for the animation
    let index = 0;
  
    setInterval(() => {
      // Clear the console
      process.stdout.write('\x1Bc');
  
      // Print the current frame
      process.stdout.write(`\r${frames[index]} ${message}`);
  
      // Move to the next frame
      index = (index + 1) % frames.length;
    }, 100); // Adjust the delay (in milliseconds) to control the speed of the animation
  }
  
  // Example usage:
//   animateMessage('Loading...');
  
  function animateMessage2(message) {
    const width = process.stdout.columns; // Get the width of the console
    let position = width; // Initial position of the message
  
    setInterval(() => {
      // Clear the console
      process.stdout.write('\x1Bc');
  
      // Move the cursor to the current position and print the message
      process.stdout.write(`\x1B[${position}G${message}`);
  
      // Update the position for the next frame
      position = (position - 1) % (width + message.length);
    }, 100); // Adjust the delay (in milliseconds) to control the speed of the animation
  }
  
  function animateMessage(message) {
    const width = process.stdout.columns; // Get the width of the console
    let position = 30;//width; //100; //width-20; // Initial position of the message
    // process.stdout.write("wid"+width);
    let x=position;
    setInterval(() => {
      // Clear the console
      process.stdout.write('\x1Bc');
  
      // Move the cursor to the current position and print the message
      process.stdout.write(`\x1B[${position}G${message}`);
  
      // Update the position for the next frame
      position = (0+x) % (width/2 + message.length);
      x+=5;
      if(x==40)
       clearInterval(this);

    }, 200); // Adjust the delay (in milliseconds) to control the speed of the animation
  
  
// process.stdout.write('\x1Bc');
// process.stdout.write(`\x1B[${position}G${message}`);
}
  // Example usage:
  animateMessage('Hello, World!');
  
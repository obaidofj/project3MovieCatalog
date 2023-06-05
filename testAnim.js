
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
    let position = width; //100; //width-20; // Initial position of the message
    process.stdout.write('\x1Bc');
    process.stdout.write(`\x1B[${0}G${message}`);
    let x=20;
    let intrId=setInterval(async () => {
      // Clear the console
    //   await setTimeout(()=>{
      process.stdout.write('\x1Bc');
  
      // Move the cursor to the current position and print the message(Math.round(position/6)-Math.round(position/6))+
      
      process.stdout.write(`\x1B[${x}G${message.replace(/\n/g, ' ')}`);
    // },200);
//   process.stdout.write("wid:"+width);
      // Update the position for the next frame
    //   position = (0+x) % (width/2 + message.length);

      x+=20;
      if(x==60)
       clearInterval(intrId);

    },500); // Adjust the delay (in milliseconds) to control the speed of the animation
  
  
// process.stdout.write('\x1Bc');
// process.stdout.write(`\x1B[${position}G${message}`);
}
  // Example usage:
  let vr=`Hello, \n  World!`
//   animateMessage(vr);
  

  
  

  function printMultilineString(position, multilineString) {
    const lines = multilineString.split('\n');
    lines.forEach((line, index) => {
      process.stdout.write(`\x1B[${position}G${line}`);
      if (index < lines.length - 1) {
        process.stdout.write('\n');
      }
    });
  }
  
  // Example usage
  const position = 10; // Specify the column position
  const multilineString = `
    Line 1
    Line 2
    Line 3
  `;
  
  printMultilineString(position, multilineString);
  
  
  
  
//   animateMessage(vr2);
  

  function animateMessage0(message) {
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
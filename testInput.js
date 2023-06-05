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

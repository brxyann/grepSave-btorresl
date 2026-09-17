//GREP and SAVE

const fs = require('fs');


//GREP -> find and search!!!
// need to intake arguments to use in our code from input in command line

let targetWord = process.argv[2];
let targetFile = process.argv[3];
let saveFile = process.argv[4];

// check for bad args
if (!targetWord || !targetFile){
  console.log('\nArguments are missing. Try this format:');
  console.log('node example.js <targetWord> <targetFile> <saveFile>\n');
  process.exit(1);
}
// make a default save file if none provided
if (!saveFile){
  saveFile = 'defaultSaveFile.txt'
}
// check file to grep exists
if (fs.existsSync(targetFile) === false) {
  console.log("Error: the file '" + targetFile + "' does not exist.");
  process.exit(1);
}

const currentFile = fs.readFileSync(targetFile, 'utf-8');

let matchingLines = [];
// mimick grep
let lines = currentFile.split('\n');
for (let line of lines){
  if (line.includes(targetWord)){
    console.log(line);
    matchingLines.push(line);
  }
}
// mimick tee
fs.writeFileSync(saveFile, matchingLines.join('\n')+'\n');
console.log("\nResults saved to: " + saveFile + '\n');
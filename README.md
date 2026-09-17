# grepSave-btorresl @gmu IT207-DL3(grep + tee)

## Section 1 — Command Description
GrepSave combines `grep` and `tee` into a single Node.js command-line tool[cite: 1, 4]. It searches a text file line-by-line for a specific word, prints matching lines to the terminal, and saves them to an output file at the same time[cite: 4].

### How to Run
```bash
node grepSave_btorresl2026.js <word> <inputFile> [outputFile]
```

### Examples
* Save to custom file: `node grepSave_btorresl2026.js the tvShow.txt results.txt`[cite: 4]
* Save to default file: `node grepSave_btorresl2026.js the tvShow.txt`[cite: 4]

### Source Code
```javascript
// GREP and SAVE
const fs = require('fs');

let targetWord = process.argv[2];
let targetFile = process.argv[3];
let saveFile = process.argv[4];

// Check for missing arguments
if (!targetWord || !targetFile) {
  console.log('\nArguments are missing. Try this format:');
  console.log('node grepSave_btorresl2026.js <targetWord> <targetFile> <saveFile>\n');
  process.exit(1);
}

// Default save file fallback
if (!saveFile) {
  saveFile = 'defaultSaveFile.txt';
}

// Verify file exists
if (fs.existsSync(targetFile) === false) {
  console.log("Error: the file '" + targetFile + "' does not exist.");
  process.exit(1);
}

const currentFile = fs.readFileSync(targetFile, 'utf-8');
let matchingLines = [];

// Search lines (grep)
let lines = currentFile.split('\n');
for (let line of lines) {
  if (line.includes(targetWord)) {
    console.log(line);
    matchingLines.push(line);
  }
}

// Write to file (tee)
fs.writeFileSync(saveFile, matchingLines.join('\n') + '\n');
console.log("\nResults saved to: " + saveFile + '\n');
```

---

## Section 2 — AI-Assisted Programming
* **What I asked AI:** How to read command-line arguments using `process.argv`, how to check if a file exists before reading it, and what edge cases to test[cite: 4].
* **Where AI helped:** Reminded me to check `fs.existsSync` to avoid crashes, suggested a default fallback save file, and explained that `.join('\n') + '\n'` was needed to keep newlines intact[cite: 4].
* **Where I thought independently:** Picked the idea to combine `grep` and `tee`, chose to store matches in an array using `.push()` instead of writing during the loop, and fixed placement errors with `process.exit(1)`[cite: 1, 4].
* **What AI got wrong or missed:** It gave overly complex explanations at first, and earlier loops using `writeFileSync` kept overwriting previous matches instead of saving them all[cite: 4].

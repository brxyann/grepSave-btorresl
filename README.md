# GrepSave-btorresl

A custom command-line utility built in Node.js that combines the search capabilities of Linux `grep` with the simultaneous split-output behavior of `tee`.

---

## Section 1 — Command Description

### What It Does
`GrepSave` searches a target text file line-by-line for a specific string or word. When matches are found, it performs two actions at once:
1. Streams matching lines live to the terminal console (like `grep`).
2. Saves all matching lines to an output text file on disk (like `tee`).

The tool includes input validation to prevent crashes if command arguments are missing, checks that the source file exists before attempting to read it, and provides a default filename fallback if no custom output file is specified.

### Combined Commands
* **`grep`**: Filters lines in a file based on matching search text.
* **`tee`**: Directs output to both standard output (screen) and a file at the same time.

### How to Run It
Run the script using Node.js with the following syntax:

\`\`\`bash
node example.js <targetWord> <targetFile> [saveFile]
\`\`\`

#### Examples
* **Search and save to a custom file:**
  \`\`\`bash
  node example.js drama tvShow.txt results.txt
  \`\`\`
* **Search and save to the default file (`defaultSaveFile.txt`):**
  \`\`\`bash
  node example.js comedy tvShow.txt
  \`\`\`

---

## Section 2 — AI-Assisted Programming

### What I Asked AI
* How to use `process.argv` to parse command-line arguments.
* What methods exist in the Node.js `fs` module to check if a file exists before reading.
* How to identify test scenarios and edge cases for the command.
* Why my output file only saved one matching line instead of all matches.

### Where AI Helped
* **Identifying edge cases:** AI pointed out that omitting optional arguments could break the script, which led to adding the `defaultSaveFile.txt` fallback and an initial argument-count check.
* **Error prevention:** AI highlighted that attempting to read a non-existent file triggers an uncaught `ENOENT` error, guiding the implementation of `fs.existsSync()`.
* **String reconstruction:** AI explained that `.split('\n')` removes newline characters, helping identify why lines clumped together and how `.join('\n') + '\n'` cleanly restores line endings.

### Where I Had to Think Independently
* **Designing the tool concept:** Deciding to combine `grep` and `tee` into a single file search-and-save utility.
* **Logic implementation:** Choosing to accumulate matching lines in an array using `.push()` during iteration rather than repeatedly writing to disk.
* **Debugging variable scope:** Noticing variable reference issues (such as catching a mismatched variable name in the existence check) and ensuring exit codes like `process.exit(1)` were placed properly.

### What AI Got Wrong or Missed
* **Generating too much code initially:** AI initially tended to generate complete blocks of solution code rather than guiding me through writing the logic step-by-step.
* **Overly complex documentation:** Early suggestions for project specifications and documentation were overly verbose and academic for an introductory assignment, requiring me to simplify the explanations to match course scope.
* **Loop write behavior:** When discussing saving to disk, early loops using `writeFileSync` kept wiping previous matches, requiring a shift in strategy to buffer matches in memory before writing.

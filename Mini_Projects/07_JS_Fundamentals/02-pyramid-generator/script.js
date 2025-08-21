// Define constants for pyramid construction
const character = "!";    // Character used to build the pyramid
const count = 4;         // Total number of rows in the pyramid
const rows = [];          // Array to store constructed pyramid rows
let inverted = false;     // Control flag for pyramid orientation

// Function to create a pyramid row with proper padding
function padRow(rowNumber, rowCount) {
  // Calculate spaces before/after and characters in the row:
  // 1. Leading/trailing spaces = total rows - current row number
  // 2. Middle characters = 2*current row -1 (creates pyramid shape)
  return " ".repeat(rowCount - rowNumber) + 
         character.repeat(2 * rowNumber - 1) + 
         " ".repeat(rowCount - rowNumber) + "\n";
}

// Build pyramid rows array
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));  // Add to beginning for inverted pyramid
  } else {
    rows.push(padRow(i, count));     // Add to end for normal pyramid
  }
}

// Combine all rows into a single string with newline separators

// console.log(rows);

let result = "";

// result = "   !   " + "\n" + "  !!!  "

// console.log(result);


for (const row of rows) {
  // console.log(result);
  result = result + row;
  // console.log(result);
}

// Output the final pyramid pattern
console.log(result);
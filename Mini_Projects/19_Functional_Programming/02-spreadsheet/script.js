// Maps basic arithmetic operators to their corresponding functions
const infixToFunction = {
  "+": (x, y) => x + y,        // Addition
  "-": (x, y) => x - y,        // Subtraction
  "*": (x, y) => x * y,        // Multiplication
  "/": (x, y) => x / y,        // Division
}

// Evaluates infix expressions using the provided regex pattern
const infixEval = (str, regex) => 
  str.replace(regex, (_match, arg1, operator, arg2) => 
    infixToFunction[operator](parseFloat(arg1), parseFloat(arg2))
  );

// Recursively resolves all high-precedence operations (* and /)
const highPrecedence = str => {
  const regex = /([\d.]+)([*\/])([\d.]+)/; // Matches expressions like 2*3 or 4/2
  const str2 = infixEval(str, regex);       // Evaluates one high-precedence operation
  return str === str2 ? str : highPrecedence(str2); // Continue until no change
}

// Utility function to check if a number is even
const isEven = num => num % 2 === 0;

// Sums an array of numbers
const sum = nums => nums.reduce((acc, el) => acc + el, 0);

// Computes the average of an array of numbers
const average = nums => sum(nums) / nums.length;

// Computes the median of an array of numbers
const median = nums => {
  const sorted = nums.slice().sort((a, b) => a - b); // Sorts numbers in ascending order
  const length = sorted.length;
  const middle = length / 2 - 1;
  return isEven(length)
    ? average([sorted[middle], sorted[middle + 1]]) // Average of middle two for even length
    : sorted[Math.ceil(middle)]; // Middle element for odd length
}

// Collection of spreadsheet-like functions
const spreadsheetFunctions = {
  "": (arg) => arg,                          // Identity function
  sum,                                       // Sum of numbers
  average,                                   // Average of numbers
  median,                                    // Median of numbers
  even: nums => nums.filter(isEven),         // Filters even numbers
  someeven: nums => nums.some(isEven),       // True if any number is even
  everyeven: nums => nums.every(isEven),     // True if all numbers are even
  firsttwo: nums => nums.slice(0, 2),        // First two elements
  lasttwo: nums => nums.slice(-2),           // Last two elements
  has2: nums => nums.includes(2),            // Checks if 2 is in the list
  increment: nums => nums.map(num => num + 1), // Increments each number by 1
  random: ([x, y]) => Math.floor(Math.random() * y + x), // Random number in range
  range: nums => range(...nums),             // Range between two numbers
  nodupes: nums => [...new Set(nums).values()] // Removes duplicates
}

// Applies spreadsheet functions and resolves remaining expressions
const applyFunction = str => {
  const noHigh = highPrecedence(str); // Resolve all * and / first
  const infix = /([\d.]+)([+-])([\d.]+)/; // Matches + and - operations
  const str2 = infixEval(noHigh, infix); // Evaluates + and -
  const functionCall = /([a-z0-9]*)\(([0-9., ]*)\)(?!.*\()/i; // Matches function calls like sum(1,2)
  const toNumberList = args => args.split(",").map(parseFloat); // Converts args to numbers
  const apply = (fn, args) => spreadsheetFunctions[fn.toLowerCase()](toNumberList(args)); // Applies function
  return str2.replace(functionCall, (match, fn, args) => 
    spreadsheetFunctions.hasOwnProperty(fn.toLowerCase()) ? apply(fn, args) : match
  );
}

// Creates a numeric range between two values (inclusive)
const range = (start, end) => 
  Array(end - start + 1).fill(start).map((element, index) => element + index);

// Creates a range of characters from start to end (e.g., A to J)
const charRange = (start, end) => 
  range(start.charCodeAt(0), end.charCodeAt(0)).map(code => String.fromCharCode(code));

// Evaluates a formula string, resolving cell references and functions
const evalFormula = (x, cells) => {
  const idToText = id => cells.find(cell => cell.id === id).value; // Fetches cell content by ID
  const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi; // Matches ranges like A1:B2
  const rangeFromString = (num1, num2) => range(parseInt(num1), parseInt(num2)); // Numeric range from string
  const elemValue = num => character => idToText(character + num); // Gets value for each cell
  const addCharacters = character1 => character2 => num => 
    charRange(character1, character2).map(elemValue(num)); // Expands character ranges
  const rangeExpanded = x.replace(rangeRegex, (_match, char1, num1, char2, num2) => 
    rangeFromString(num1, num2).map(addCharacters(char1)(char2))
  );
  const cellRegex = /[A-J][1-9][0-9]?/gi; // Matches individual cell IDs
  const cellExpanded = rangeExpanded.replace(cellRegex, match => 
    idToText(match.toUpperCase())
  );
  const functionExpanded = applyFunction(cellExpanded); // Evaluates functions
  return functionExpanded === x ? functionExpanded : evalFormula(functionExpanded, cells); // Recursively evaluate
}

// Initializes the spreadsheet UI on page load
window.onload = () => {
  const container = document.getElementById("container"); // Gets the container element

  const createLabel = (name) => {
    const label = document.createElement("div");
    label.className = "label";       // Sets label styling
    label.textContent = name;        // Sets label text
    container.appendChild(label);    // Appends label to container
  }

  const letters = charRange("A", "J"); // Columns A to J
  letters.forEach(createLabel);         // Create column headers

  range(1, 99).forEach(number => {      // For rows 1 to 99
    createLabel(number);               // Create row header
    letters.forEach(letter => {        // For each cell in the row
      const input = document.createElement("input");
      input.type = "text";             // Set input type
      input.id = letter + number;      // Assign unique ID
      input.ariaLabel = letter + number; // Accessibility label
      input.onchange = update;         // Set change handler
      container.appendChild(input);    // Add input to container
    })
  })
}

// Handles cell updates and evaluates formulas
const update = event => {
  const element = event.target;                             // The cell that was changed
  const value = element.value.replace(/\s/g, "");          // Remove whitespace
  if (!value.includes(element.id) && value.startsWith('=')) {
    // Prevent circular references and only evaluate if input starts with '='
    element.value = evalFormula(value.slice(1), Array.from(document.getElementById("container").children));
  }
}

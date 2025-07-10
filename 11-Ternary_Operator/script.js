
// The ternary operator is a shortcut for if...else statements. 
// It takes three operands and returns a value based on a condition.

//condition ? expressionIfTrue : expressionIfFalse;

// If the condition is true, it returns expressionIfTrue.
// If the condition is false, it returns expressionIfFalse.

// Use only when conditions are simple. Otherwise, prefer if...else for clarity.

//-------------------------------//

// Using ternary operators for conditional output

// Basic ternary: condition ? true_result : false_result

console.log(true ? 'Sonex' : 100);  // Condition is truthy → outputs 'Sonex'
console.log(false ? 'Sonex' : 100); // Condition is falsy → outputs 100

// Nested ternaries (evaluated left-to-right)

console.log(true ? 'Sonex' : true ? 'Chetry' : 88);    // First ternary true → 'Sonex' (second not evaluated)
console.log(false ? 'Sonex' : true ? 'Chetry' : 88);   // First ternary false → evaluates second: true → 'Chetry'
console.log(false ? 'Sonex' : false ? 'Chetry' : 88);  // Both false → falls through to final value 88

// Ternary with comparison operators

console.log(5 > 2 ? 'Karki' : 99);  // 5>2 is true → outputs 'Karki'
console.log(5 > 7 ? 'Karki' : 99);  // 5>7 is false → outputs 99

// ------------------------------
// Practical usage with user input

// Collect user information through browser prompts

const gender = prompt('Please enter your Gender : Male/Female');  // Stores gender input
const userName = prompt('Name');  // Stores name input
const userAge = prompt('Age');    // Stores age input

// Dynamically creates pronoun based on gender
// 1. Converts input to lowercase for case-insensitive comparison
// 2. Uses ternary to select 'He' for male, 'She' otherwise

const userMessage = `${gender.toLowerCase() === 'male' ? 'He' : 'She'} is a student`;

// Output collected user data

console.log(`Name: ${userName}`);  // Logs formatted name
console.log(`Age: ${userAge}`);    // Logs formatted age
console.log(userMessage);          // Logs generated pronoun message

// Program termination marker

console.log('Program Ended');  // Indicates script completion
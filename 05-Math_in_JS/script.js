// Basic arithmetic operations

console.log(5 + 2); // Addition: Outputs 7 (5 plus 2)
console.log(5 - 2); // Subtraction: Outputs 3 (5 minus 2)
console.log(5 * 2); // Multiplication: Outputs 10 (5 times 2)
console.log(10 / 2); // Division: Outputs 5 (10 divided by 2)
console.log(5 % 2);  // Modulus/Remainder: Outputs 1 (remainder of 5 divided by 2)
console.log(5 ** 2); // Exponentiation: Outputs 25 (5 to the power of 2)

// Mathematical constants from Math object

console.log(Math.PI); // Outputs the value of π (pi) ≈ 3.141592653589793
console.log(Math.SQRT2); // Outputs the square root of 2 ≈ 1.4142135623730951
console.log(Math.E); // Outputs Euler's number ≈ 2.718281828459045
console.log(Math.LN2); // Outputs the natural logarithm of 2 ≈ 0.6931471805599453
console.log(Math.SQRT1_2); // Outputs the square root of 1/2 ≈ 0.7071067811865476
console.log(Math.LOG10E); // Outputs the base-10 logarithm of E ≈ 0.4342944819032518

// Mathematical operations using Math object

console.log(Math.sqrt(25)); // Square root: Outputs 5 (square root of 25)

console.log(Math.pow(5, 2)); // Power function: Outputs 25 (5 to the power of 2)

// Rounding functions

console.log(Math.floor(2.9)); // Floor: Outputs 2 (rounds down to nearest integer)
console.log(Math.floor(-2.9)); // Outputs -3 (rounds down for negative numbers)

console.log(Math.ceil(2.4)); // Ceiling: Outputs 3 (rounds up to nearest integer)
console.log(Math.ceil(-2.4)); // Outputs -2 (rounds up for negative numbers)

console.log(Math.round(2.4)); // Round: Outputs 2 (rounds to nearest integer, .4 rounds down)
console.log(Math.round(2.5)); // Outputs 3 (rounds up when decimal is .5 or higher)
console.log(Math.round(-2.4)); // Outputs -2 (rounds towards positive infinity)
console.log(Math.round(-2.5)); // Outputs -2 (JavaScript's "round half towards +∞" behavior)
console.log(Math.round(-2.51)); // Outputs -3 (rounds down as it's below -2.5)

// Random number generation

console.log(Math.random()); // Outputs random float between 0 (inclusive) and 1 (exclusive)
console.log(Math.random() * 10); // Outputs random float between 0 and 10
console.log(Math.floor(Math.random() * 10)); // Outputs random integer between 0 and 9

// Special number operations

console.log(1 / 0); // Outputs Infinity (division by zero with positive numerator)
console.log(-1 / 0); // Outputs -Infinity (division by zero with negative numerator)
console.log(-1 / -0); // Outputs Infinity (division by negative zero with negative numerator)
console.log(0 / 0); // Outputs NaN (Not a Number - indeterminate form)

// Simple rectangle area calculation program
const width = +prompt('Please enter any random rectangle Width'); // + converts string input to number
const hight = +prompt('Please enter any random rectangle Hight'); // + converts string input to number

console.log(width * hight); // Calculates and outputs area of rectangle (width × height)
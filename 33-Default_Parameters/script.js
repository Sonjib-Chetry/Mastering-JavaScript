
//Default parameters allow you to set default values for function parameters. 
// If no value (or undefined) is passed for that parameter, the default value will be used.

//🔹 What Are Default Parameters?
// Default parameters allow you to initialize function parameters with default values if no value or undefined is passed.

//🔹 Basic Syntax

function greet1(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet1();           // Hello, Guest!
greet1('Sonjib');   // Hello, Sonjib!

//📝 If no argument is passed to name, it uses 'Guest' as default.


function demo(x = 10) {
  console.log(x);
}

demo();         // 10 (uses default)
demo(undefined); // 10 (uses default)
demo(null);      // null (default is NOT used)


function multiply(a, b = 2) {
  return a * b;
}

console.log(multiply(5));    // 10 (b defaults to 2)
console.log(multiply(5, 3)); // 15 (b is 3)

//🔹 Why Use Default Parameters?
// To avoid undefined values
// Make functions more flexible and user-friendly
// Eliminate the need for manual checks inside functions


// 🔹 Pre-ES6 Way (Before Default Parameters)

function greet2(name) {
  name = name || 'Guest';
  console.log(`Hello, ${name}`);
}

// This also works, but:
// Falsy values like '', 0, or false are wrongly replaced
// Less readable

//🔹 Multiple Parameters with Defaults

function createUser(name = 'Anonymous', age = 18) {
  console.log(`Name: ${name}, Age: ${age}`);
}

createUser();                  // Name: Anonymous, Age: 18
createUser('Alice');           // Name: Alice, Age: 18
createUser('Bob', 25);         // Name: Bob, Age: 25


// 🔹 Using Expressions as Default Values

function calcPrice(price, tax = price * 0.1) {
  return price + tax;
}

console.log(calcPrice(100));   // 110
console.log(calcPrice(200, 50)); // 250

//✅ Default value can be based on other parameters, but only those defined before.


// 🔹 Default with Destructuring

function displayUser({ name = 'Guest', age = 18 } = {}) {
  console.log(`Name: ${name}, Age: ${age}`);
}

displayUser();                          // Name: Guest, Age: 18
displayUser({ name: 'Raj' });           // Name: Raj, Age: 18
displayUser({ age: 22 });               // Name: Guest, Age: 22
displayUser({ name: 'Ana', age: 25 });  // Name: Ana, Age: 25

//🧠 = {} is used to handle the case where no argument is passed at all (to prevent error when destructuring undefined).


//🔹 Skipping Parameters

function showDetails(name = 'User', age = 30, city = 'Delhi') {
  console.log(`${name}, ${age}, ${city}`);
}

showDetails('Sonjib', undefined, 'Guwahati');  
// Sonjib, 30, Guwahati


//🔹 Functions as Default Parameters

function log(message, logger = () => console.log(message)) {
  logger();
}

log('Hello'); // Hello


//🔹 Default Parameter Scope
// Default values are evaluated at the time of the call.

let count = 10;

function showCount(val = count) {
  console.log(val);
}

showCount(); // 10
count = 20;
showCount(); // 20

//🔹 Limitations & Notes
// Only parameters to the right of a default can be omitted.
// Defaults don't apply if argument is anything other than undefined (even null).

function greet3(name, age = 18) {
  console.log(`${name} is ${age} years old.`);
}

greet3(25); // 25 is 18 years old ❌ not what you meant


function test(x = 5) {
  console.log(x);
}

test();       // 5
test(undefined); // 5
test(null);   // null ❌ (not default)


//🔹 Real Use Case: Retry Mechanism

function fetchData(url, retries = 3) {
  while (retries > 0) {
    console.log(`Fetching ${url}, attempts left: ${retries}`);
    retries--;
  }
}

fetchData('https://api.com');

/*
✅ Summary Table
| Scenario                 | Output                          |
| ------------------------ | ------------------------------- |
| `func()`                 | Uses all default values         |
| `func(undefined)`        | Uses default                    |
| `func(null)`             | Uses `null`, not default        |
| `func(x = y)`            | Valid if `y` is defined earlier |
| `func({key = val} = {})` | Used in destructuring           |
*/


//Higher-Order Functions and Callbacks in JavaScript

// What is a Higher-Order Function?
// A Higher-Order Function (HOF) is a function that does at least one of the following:
// Takes another function as an argument.
// Returns another function as its result.

// In JavaScript, functions are first-class citizens, meaning you can:
// Pass them as arguments.
// Return them from other functions.
// Assign them to variables.

//A higher-order function in JavaScript is a function that either 
// takes one or more functions as arguments, returns a function, or both. 
// These are commonly used in functional programming 
// and are especially powerful when working with arrays, events, or asynchronous tasks.


//What is a Callback Function?
// A callback is a function passed into another function as an argument, which is then invoked inside the outer function.
// So, a callback is the function being passed, and the function that receives it is a higher-order function.

function sayHi() {
    console.log('Hi');
}

const a = sayHi

a.Name = 'sonex'  //after saving a function into a variable, we can update the function like an object

// now call a() or sayHi()   result will be same
// a.Name or sayHi.Name      result will be same

a();
sayHi();
console.log(a.Name);
console.log(sayHi.Name);


// using Anonymous function

function sayHello(b) {
    // console.log(b)
    return b()
}

sayHello(function() {        //an anonymous function is passed as and argument while calling sayHello, the function which is 
    console.log('Hello');    // used as argument weather anonymous or not is called callback function and the function 
    // sayHello where it was passed is called higher order function
})



//Simple Example: Callback with a Higher-Order Function

function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // calling the callback function
}

function sayGoodbye() {
  console.log("Goodbye!");
}

// `sayGoodbye` is passed as a callback
greet("Alice", sayGoodbye);

// greet() is a higher-order function.
// sayGoodbye() is a callback function.

function greet1(name) {
    return `Hello, ${name}!`;
}
  
function processUserInput(callback) {
    const name = "John";
    return callback(name); // callback is greet
}
  
console.log(processUserInput(greet1)); // Output: Hello, John!


//Another Example: Array Methods (map, filter, reduce) (we will learn more about this later)
//Built-in array methods like map(), filter(), and reduce() are higher-order functions that take callbacks.

// Example: map()
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8]

// map() is a higher-order function.
// The function function (num) { return num * 2; } is a callback passed to map().

// Example: Returning a Function (Currying) (we will learn more about this later)

function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2); // returns a function
console.log(double(5));       // 10

// multiplier() is a higher-order function because it returns a function.
// The returned function remembers the factor via closure.

//Real-World Use Case: setTimeout (we will learn more about this later)

setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);


// setTimeout() is a higher-order function.
// The anonymous function you pass is a callback, executed after the delay.

/*
Summary
| Concept                   | Description                                                                  |
| ------------------------- | ---------------------------------------------------------------------------- |
| **Higher-Order Function** | A function that takes another function as an argument or returns a function. |
| **Callback Function**     | A function passed as an argument to another function.                        |


Why Use Them?
Improves code reusability and modularity
Enables asynchronous programming
Powers event handling, functional programming, React hooks, and more.
*/
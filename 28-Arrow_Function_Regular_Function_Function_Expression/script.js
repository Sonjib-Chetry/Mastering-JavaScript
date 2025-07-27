

//Arrow functions are a shorter syntax for writing functions, 
// introduced in ES6 (ECMAScript 2015). They also behave differently 
// from regular functions, especially in how they handle the this keyword.

//1. Arrow Function – What is it?
// Arrow functions (introduced in ES6) are a concise way to write functions in JavaScript.

//Basic Syntax:
const add = (a, b) => a + b;

//This is equivalent to:
// function add(a, b) {
//   return a + b;
// }

const square = e => e * e       //If there's only one parameter, parentheses can be omitted: implicit return 

const plus = (f, g) => f + g    //implicit return 

const multiply = (h, i) => {    //If there’s more than one line, use curly braces and return: explicit return 
    return h * i;
};

//Arrow function for setTimeout and setInterval

const timeout = setTimeout(() => {
    console.log('Hello World');
}, 2000)

const interval = setInterval(() => {
    console.log('Hello Sonex');
}, 1000)

clearInterval(interval) //uncomment to see result



//2. Regular Function (Function Declaration)

//Syntax:
function greet1(name) {
  return "Hello, " + name;
}

//Characteristics:
// Hoisted (can be called before its definition).
// Own this, arguments, and super bindings.
// Can be used as constructors (with new).



//3. Function Expression
// Function expressions store a function inside a variable.

//Syntax:
const greet2 = function(name) {
  return "Hello, " + name;
};

//Characteristics:
// Not hoisted like declarations.
// Can be anonymous or named.
// Has its own this.


//4. Arrow Function Expression
// Arrow function is also a function expression but with different behavior.

//Syntax:
const greet3 = (name) => "Hello, " + name;

//Or with block body:
const greet4 = (name) => {
  return "Hello, " + name;
};


/* 5. Key Differences – Regular Function vs Function Expression vs Arrow Function
| Feature                       | Regular Function Declaration | Function Expression        | Arrow Function                   |
| ----------------------------- | ---------------------------- | -------------------------- | -------------------------------- |
| **Syntax**                    | `function name() {}`         | `const fn = function() {}` | `const fn = () => {}`            |
| **Hoisting**                  | ✅ Yes                        | ❌ No                       | ❌ No                             |
| **`this` binding**            | Own `this`                   | Own `this`                 | Inherits `this` (lexical scope)  |
| **Arguments object**          | ✅ Yes                        | ✅ Yes                      | ❌ No (`arguments` not available) |
| **Constructor usage (`new`)** | ✅ Yes                        | ✅ Yes                      | ❌ No                             |
| **Concise Syntax**            | ❌ No                         | ❌ No                       | ✅ Yes                            |
*/



//6. this Behavior – Critical Difference

// Regular Function:
const person1 = {
  name: "Sonjib",
  greet: function() {
    console.log("Hi, I'm " + this.name);
  }
};

person1.greet(); // Hi, I'm Sonjib


//Arrow Function:
const person2 = {
  name: "Sonjib",
  greet: () => {
    console.log("Hi, I'm " + this.name);
  }
};

person2.greet(); // Hi, I'm undefined (because `this` refers to outer scope)

//Arrow functions don’t have their own this, so they inherit it from the surrounding context.


//7. arguments object Difference

//Regular Function:
function showArgs1() {
  console.log(arguments);
}

showArgs1(1, 2, 3); // [1, 2, 3]


//Arrow Function:
const showArgs2 = () => {
  console.log(arguments);
};

showArgs2(1, 2, 3); // ❌ ReferenceError: arguments is not defined

//Arrow functions do not have an arguments object.


//8. Constructor Usage

//Regular Function:
function Person1(name) {
  this.name = name;
}

const p1 = new Person1("Sonjib");
console.log(p.name); // Sonjib


//Arrow Function:
const Person2 = (name) => {
  this.name = name;
};

const p2 = new Person2("Sonjib"); // ❌ TypeError: Person is not a constructor


/*
9. Use Cases Summary
| Use Case                         | Recommended Function Type     |
| -------------------------------- | ----------------------------- |
| Object methods                   | Regular / Function Expression |
| Short callbacks (e.g. `.map`)    | Arrow function                |
| When you need `this`/`arguments` | Regular / Function Expression |
| Functional programming           | Arrow function                |
| Constructors                     | Regular Function              |
*/


//10. Examples Comparison

// Regular Function Declaration
function sayHello() {
  console.log("Hello");
}

// Function Expression
const sayHi = function() {
  console.log("Hi");
};

// Arrow Function
const sayHey = () => console.log("Hey");

// Arrow Function with parameters
const multiply1 = (a, b) => a * b;
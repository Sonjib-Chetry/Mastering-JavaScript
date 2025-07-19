
/*
🔄 What is Hoisting?

Hoisting means that during the Memory Creation Phase (before any line is executed), the JavaScript engine:

Scans your code.
Allocates memory for variables and functions.
Moves declarations to the top of their scope (not the actual assignments).

🧠 How Hoisting Works

JavaScript runs in two main phases:

1. Memory Creation Phase (Creation Phase):
JS allocates memory.
Function declarations are fully hoisted (name + body).
Variables declared with var are hoisted and initialized to undefined.
Variables with let and const are hoisted but not initialized — they go into the Temporal Dead Zone (TDZ).
Classes are hoisted but also remain in TDZ.

2. Execution Phase:
Code is executed line by line.
Variable assignments and function calls happen here.
*/

// 📘 Examples of Hoisting

sayHi(); // Works!

function sayHi() {
  console.log("Hi!");
}
//Function is fully hoisted, so you can call it before its definition.


// ❌ Function Expression (with var)

/*
sayBye(); // ❌ TypeError: sayBye is not a function

var sayBye = function() {
  console.log("Bye!");
};
*/
//sayBye is hoisted as undefined, so you try to call undefined().


//❌ Function Expression (with let)

/*
sayBye(); // ❌ ReferenceError

let sayBye = function() {
  console.log("Bye!");
};
*/
//let variables are hoisted but not initialized — accessing them before declaration throws a ReferenceError.


//✅ Variable Hoisting with var

console.log(x); // undefined (not ReferenceError)
var x = 10;

// Internally, it's like:
/*
var x;         // Hoisted to top
console.log(x);
x = 10;
*/


//❌ Variable Hoisting with let/const
/*
console.log(y); // ❌ ReferenceError
let y = 20;
*/
//let and const are hoisted but not initialized, and can't be accessed before their line.


//✅ Function vs Variable Hoisting

/*
foo(); // ✅ Works

function foo() {
  console.log("Function called");
}

bar(); // ❌ TypeError: bar is not a function

var bar = function() {
  console.log("Function expression");
};
*/


//🚧 Temporal Dead Zone (TDZ)

// The TDZ is the period between the hoisting of a variable declared with let or const 
// and its actual initialization. During this period, accessing the variable causes a ReferenceError.
/*
console.log(a); // ❌ ReferenceError
let a = 5;
*/


/*
Summary:
| Declaration Type          | Hoisted? | Initialized?  | Access Before Declaration    |
| ------------------------- | -------- | ------------- | ---------------------------- |
| `var`                     | ✅ Yes    | ✅ `undefined` | ✅ No error (but `undefined`) |
| `let` / `const`           | ✅ Yes    | ❌ No          | ❌ ReferenceError (TDZ)       |
| Function                  | ✅ Yes    | ✅ Fully       | ✅ Works                      |
| Function Expression (var) | ✅ Yes    | ✅ undefined   | ❌ TypeError                  |
| Class                     | ✅ Yes    | ❌ No          | ❌ ReferenceError (TDZ)       |
*/




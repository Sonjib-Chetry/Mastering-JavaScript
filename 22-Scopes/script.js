

//01. Global Scope in JavaScript refers to variables, functions, 
// and objects that are accessible from anywhere in your code — both inside 
// and outside functions (unless shadowed).

const userName = 'Sonex'
const userAge = 32


function add() {
    const x = 5
    const y = 8
    console.log(x + y);
}

add()

// console.log(x);    // variable which are defined inside the block of function can't be access outside the function


function userDetails() {
    console.log(userName);
    console.log(userAge);
}

userDetails()        // variable which are defined outside the block of function can be access inside the function 



function aaa() {
    const xxx = 25
    console.log(xxx);
}

aaa()

var abb = function() {
    const yyy = 25
    console.log(yyy);
}

abb()

const acc = function() {
    const zzz = 25
    console.log(zzz);
}

acc()


//note: when we use let or const, its shown under script scope under global scope
//when we use var, its shown directly under window object under global scope
//when we use function Declarations shown directly under window object under global scope
//when we use function Expressions with let or const, its shown under script scope under global scope
//when we use function Expressions with var


//When you declare a variable with var at the top level (outside any function), it's added to window.

var x = 5;
console.log(window.x);      // print result = 5

//But:
let y = 10;
const z = 15;

console.log(window.y);    // print result = undefined 
console.log(window.z);    // print result = undefined 

//So:
//var ➜ attaches to window
//let / const ➜ scoped to the script, not attached to window


//Local scope means a variable is only accessible inside the block, function, or module where it is defined.


//02. Function Scope //Variables declared with var, let, or const inside a function all have local scope.

function greet() {
    var message1 = 'Hello';
    let message2 = 'Hi'
    const message3 = 'Hey'
    message4 = 'Wellcome'
    console.log(message1, message2, message3);
}
  
greet();

//console.log(message1);            // ReferenceError: message is not defined
//console.log(message2);            // ReferenceError: message is not defined
//console.log(message3);            // ReferenceError: message is not defined
console.log(message4);              //But if we create a variable inside a function without using const, let or var 
// than it is accessible outside function scope unless strict mode is used



//03. Block Scope (with let and const)

//A block is anything inside {} — like in if, else, for, loop, while, etc.
//let and const are block-scoped
//var is function-scoped, NOT block-scoped

if (true) {
    var c = 30;
    let a = 10;
    const b = 20;
    console.log(a, b, c); // ✅ 10 20 30
  }
  
console.log(c);                 // 30 (because `var` is NOT block scoped)
//console.log(a);                 // ReferenceError
//console.log(b);                 //  ReferenceError


//04. Nested Scope (Scope Chain or Lexical Scope)

//Nested scope happens when one function is defined inside another function. The inner function has access to:
//Its own variables
//Variables of the outer function
//Global variables

//✅ The inner function can "see" everything in its own scope plus everything above it in the chain.
//❌ The outer function cannot see inside the inner function.

let globalVar = "🌍 Global";

function outer() {
  let outerVar = "🌤️ Outer";

  function inner() {            //lexical scope of inner function are outer and global, but lexical scope of outer or global
    let innerVar = "🔥 Inner";  //is not inner function 

    console.log(globalVar); // ✅ "🌍 Global"
    console.log(outerVar);  // ✅ "🌤️ Outer"
    console.log(innerVar);  // ✅ "🔥 Inner"
  }

  inner();

//   console.log(innerVar);          // ReferenceError
}

outer()
// inner()          //If a function is defined inside another function, 
// it’s local to that outer function and cannot be accessed directly from the outside.


// How Scope Chain Works

//When you try to access a variable, JavaScript looks up the chain:
//First, in the current function/block scope
//Then, in the outer (parent) function
//Finally, in the global scope
//If it’s not found anywhere: ReferenceError



//Returning a Function ≠ Always a Closure
//Returning a function just means you are sending a function as a value from another function.

//🧪 Example: Just returning a function (no closure)
function sayHello() {
  return function() {
    console.log("Hello!");
  };
}

const greett = sayHello();
greett(); // "Hello!"

// ✅ This returns a function.
// ❌ But there's no real closure here, because the returned function doesn’t access any outer variable from sayHello().



/*
🔒 What is a Closure in JavaScript?
A closure is created when a function is able to remember and access its lexical scope even when that function is executed outside of its original scope.

In simple terms:
A closure gives you access to variables from an outer function after that outer function has finished executing.
*/

//📦 Lexical Scope Recap
// Before understanding closures, you must understand lexical scope:

function outer() {
  const name = "Sonjib";
  
  function inner() {
    console.log(name); // 'name' is accessible here
  }
  
  inner();
}
outer();

//Here, inner() can access name because it's defined inside outer(). This is lexical scoping.


//✅ Closure Example

function outerFunction() {
  let count = 0;

  function innerFunction() {
    count++;
    console.log(count);
  }

  return innerFunction;
}

const counter = outerFunction();

counter(); // 1
counter(); // 2
counter(); // 3

/*
🔍 What’s happening here?
outerFunction() runs and defines a local variable count.
It returns innerFunction, which still has access to count.
Even though outerFunction has finished running, innerFunction remembers the count variable — this is a closure.

🧠 Key Concepts in Closures:
| Concept                      | Description                                                        |
| ---------------------------- | ------------------------------------------------------------------ |
| **Persistent Lexical Scope** | Closures "remember" variables from the outer function.             |
| **Private State**            | Closures are used to **encapsulate and protect variables**.        |
| **Memory Efficiency**        | Variables in closure stay in memory as long as they’re referenced. |
*/


// 🔐 Closures for Data Privacy
// Closures are commonly used to create private variables.


// A closure happens when a function remembers variables from the place where it was created — even 
// after that outer function has finished executing.


function greet(name) {
    return function(message) {
      console.log(`${message}, ${name}!`);
    };
}
  
const greetJohn = greet('John');
  
greetJohn('Hello'); // Hello, John!
greetJohn('Goodbye'); // Goodbye, John!

// greet('John') returns a function that knows John’s name.
// You can call it with different messages, but the name stays remembered.


//another way of writing same code

function parent(name) {
    function child(message) {
      console.log(`${message}, ${name}!`);
    };
    return child  
}
  
const greetSonex = parent('Sonex');
  
greetSonex('Hello'); // Hello, Sonex!
greetSonex('Goodbye'); // Goodbye, Sonex!


//🔐 Closures for Data Privacy
// Closures are commonly used to create private variables.

function createAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposited: ${amount}, Balance: ${balance}`);
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient funds");
      } else {
        balance -= amount;
        console.log(`Withdrawn: ${amount}, Balance: ${balance}`);
      }
    },
    getBalance() {
      return balance;
    }
  };
}

const myAccount = createAccount(1000);
myAccount.deposit(500);       // Deposited: 500, Balance: 1500
myAccount.withdraw(200);      // Withdrawn: 200, Balance: 1300
console.log(myAccount.balance); // undefined (private!)

//balance is private — only accessible via the returned methods.


//🔄 Closures with setTimeout

for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i); // logs: 4, 4, 4
  }, i * 1000);
}
/*
🔍 Why does it log 4 three times?
var is function-scoped, not block-scoped.
The loop completes before any setTimeout executes.
After the loop finishes, i becomes 4.
So all setTimeout callbacks log the final value of i, which is 4.
*/

//To fix it using closures:

for (var i = 1; i <= 3; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j); // 1, 2, 3
    }, j * 1000);
  })(i);
}
/*
🔍 What’s happening here?
We create a closure using an Immediately Invoked Function Expression (IIFE).
j is a new local variable for each loop iteration.
The setTimeout callback now remembers its own j value through the closure.
*/

//Or with let (block scope):

for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i); // 1, 2, 3
  }, i * 1000);
}
/*
🔍 Why does this work?
let is block-scoped.
A new binding of i is created in each iteration.
So each setTimeout gets its own copy of i.
*/

/*
🧪 Real-Life Uses of Closures
| Use Case           | Description                                                             |
| ------------------ | ----------------------------------------------------------------------- |
| Event Handlers     | Closures keep track of local data when events are triggered.            |
| Callback Functions | Maintain access to outer scope when passed as callbacks.                |
| Module Pattern     | Helps in implementing **private variables** and **data encapsulation**. |
| Currying           | Useful for building functions in steps.                                 |


🧠 Summary
✅ A closure is a function that remembers the variables from its outer scope
✅ Closures happen automatically in JavaScript
✅ They’re useful for data privacy, function factories, callbacks, and more
✅ Variables inside closures stay alive as long as the function referencing them exists
*/


// 🏭 What is a Function Factory?
// A Function Factory is a function that creates and returns other functions.
// It usually works by accepting some parameters and returning a new function customized using those parameters.

//🔧 Example:

function greet(language) {
  return function(name) {
    if (language === "en") {
      console.log("Hello, " + name);
    } else if (language === "es") {
      console.log("Hola, " + name);
    } else {
      console.log("Hi, " + name);
    }
  };
}

const greetEnglish = greet("en");
const greetSpanish = greet("es");

greetEnglish("Sonjib"); // Hello, Sonjib
greetSpanish("Sonjib"); // Hola, Sonjib

//greet("en") creates a new function that remembers language = "en" — this is closure in action.


//🍛 What is Currying?
//Currying is a functional programming technique where you transform a function 
//with multiple arguments into a sequence of functions, each taking a single argument.

//🧪 Example:

//Instead of:

function add(a, b) {
  return a + b;
}


//You curry it like:

function curriedAdd(a) {
  return function(b) {
    return a + b;
  };
}

const add5 = curriedAdd(5);
console.log(add5(10)); // 15

//curriedAdd(5) returns a new function that remembers a = 5 — another example of closure!


/*
✅ Function Factory vs Currying
| Feature  | Function Factory                          | Currying                                                  |
| -------- | ----------------------------------------- | --------------------------------------------------------- |
| Purpose  | Create reusable customized functions      | Break down functions into a chain of single-arg functions |
| Uses     | Theme generators, greetings, math helpers | Functional pipelines, composing functions                 |
| Based on | Closures                                  | Closures & Functional Programming                         |
*/


//🔄 Real-Life Example: Multiplier Factory

function multiplyBy(x) {
  return function(y) {
    return x * y;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(4)); // 12

// Here:
// multiplyBy(2) returns a function that remembers x = 2
// double(5) = 2 * 5
// This is both a function factory and an example of currying.

/*
🧠 Why Use Currying?
✅ Improves code reuse
✅ Helps in function composition
✅ Allows partial application of functions (fix some args, delay others)
✅ Keeps functions pure and declarative
*/

//🧪 Bonus: ES6 Arrow Function Currying

const addd = a => b => a + b;

console.log(addd(2)(3)); // 5

//Neat and clean with arrow functions.

/*
🔚 Summary:
| Term             | Meaning                                                     |
| ---------------- | ----------------------------------------------------------- |
| Function Factory | Function that returns customized functions                  |
| Currying         | Breaks a function into a chain of single-argument functions |
| Common Ground    | Both use **closures** to remember values from outer scope   |
*/


// ✅ Infinite Currying Example


function infiniteAdd(a) {
  return function(b) {
    if (b !== undefined) {
      return infiniteAdd(a + b);
    } else {
      return a;
    }
  };
}

console.log(infiniteAdd(1)(2)(3)(4)()); // 10

// Here, infiniteAdd keeps returning functions that remember the accumulated sum until you call it without an argument.



// ✅ Currying using bind method

function multiply(x, y, z) {
  return x * y * z;
} 

const curriedMultiply = multiply.bind(null, 2);

console.log(curriedMultiply(3, 4)); // 24 

// Here, we use bind to fix the first argument (x = 2), creating a new function that takes the remaining arguments (y and z).
// This is another way to achieve currying in JavaScript.





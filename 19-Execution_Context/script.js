
/*
You should learn "Execution Context" first, because hoisting happens within the creation phase of an execution context.

✅ Here's Why:
🔹 Execution Context is the big picture:
It explains how JavaScript runs code.
It includes two important phases:

Creation Phase (hoisting happens here)

Execution Phase

🔹 Hoisting is a mechanism that happens inside the execution context:

When a context is created, JavaScript hoists variable and function declarations.
So to truly understand hoisting, you need to know where and when 
it happens — that’s within the execution context’s creation phase.


🧠 Simple Learning Flow:

Start with Execution Context

What it is
Global vs Function Context
Call stack
Phases (Creation + Execution)

Then Learn Hoisting

How variables/functions are hoisted
var, let, const, functions, classes
Temporal Dead Zone (TDZ)


🗂 Analogy:

Think of Execution Context as a room being prepared.
In the creation phase, the room is set up: seats (memory) are arranged for variables and functions — that’s hoisting.
Then in the execution phase, people (actual values) come and sit.
You can't understand the seating (hoisting) if you don't understand how the room (execution context) is created.
*/



//✅ What is an Execution Context?

//In JavaScript, the "Execution Context" is the environment in which code is evaluated and executed. 
// It determines what variables, functions, and objects are accessible at a given point in time.

// An Execution Context is the environment in which a piece of JavaScript code is executed and evaluated. 
// It defines what data the code can access (variables, functions, this, etc.) and how the code behaves.
// When any JS code runs, the JS engine creates an execution context to manage the code execution.


/*🔑 There are three types of Execution Contexts:


1. Global Execution Context (GEC)
Created when the JS engine first runs your code.

It creates:

  A global object (window in browsers, global in Node.js)
  A special this pointing to the global object

Only one global context exists.

var a = 10;

function greet() {
  console.log("Hello");
}
Above code runs in the Global Execution Context.

2. Function Execution Context (FEC)
Created every time a function is invoked.

Each function call gets its own execution context.
Has access to:
Arguments object
Local variables
Outer scope (via scope chain)

function greet(name) {
  let message = "Hello " + name;
  console.log(message);
}

greet("John"); // Function Execution Context created here


3. Eval Execution Context (Rarely used)
Created when eval() is called.

Not recommended due to security and performance risks.
*/

/*
⚙️ Execution Context Creation Phases
Each context is created in two phases:

1. Creation Phase (also called "Memory Creation")

The engine sets up the environment.
Hoisting happens here.
Variables declared with var are set to undefined.
Function declarations are fully hoisted.
let and const are hoisted too, but not initialized (they go into a "Temporal Dead Zone").
this is determined.

2. Execution Phase

The code is executed line-by-line.
Variables are assigned values.
Functions are invoked.
New execution contexts may be created and pushed to the call stack.
*/

/*
🧠 Call Stack
JavaScript uses a call stack to manage execution contexts:
|-------------------|
|   Function B EC   |
|-------------------|
|   Function A EC   |
|-------------------|
|   Global EC       |
|-------------------|

When a function is called, its execution context is pushed to the stack. When it finishes, it’s popped off.
*/

/*
🔁 Example:

var x = 10;

function greet() {
  var message = "Hello";
  console.log(message);
}

greet();

Execution:

1. Global EC
x → undefined (hoisted)
greet → [Function: greet] (hoisted)
Then, x = 10
greet() is called

2. Function EC (greet)

message → undefined
Then, message = "Hello"
console.log(message) prints "Hello"


💡 Summary:
Execution Context is the internal container that holds information about code being executed.
It governs variable scope and how code is executed.
It’s managed using a call stack.
Hoisting and this binding are handled during the creation phase.
*/


sayHi()

function sayHi() {
    const a = 'Hi'
    const b = 'Hello-ji';
    console.log(a + ' ' + b);
}

/*🔍 Execution Context Breakdown:
1. Global Execution Context - Creation Phase (Before code runs):

The JS engine scans the code top-to-bottom.
It hoists function declarations entirely, not just their names.
So, sayHi is stored in memory with its full function body.
Variables declared with var are hoisted and initialized with undefined.
Variables with let and const are hoisted but not initialized (temporal dead zone).

✅ Because sayHi is a function declaration, not a variable, it is fully hoisted — 
meaning you can call it before it appears in the code.
*/

/*
In JavaScript, function declarations are fully hoisted during the memory creation phase.
This means the entire function code is stored in memory even before any line is executed.
That’s why you can safely call a function before it is written in the code.
In contrast, variables declared with var are hoisted but set to undefined.
let and const variables are hoisted but not initialized until their line is executed.
*/

/*
🔄 Hoisting Comparison:

// Function declaration - fully hoisted ✅
sayHello(); // Works!

function sayHello() {
  console.log("Hello!");
}

// Function expression - NOT hoisted ❌
sayBye(); // ❌ TypeError: sayBye is not a function

const sayBye = function () {
  console.log("Bye!");
};
*/



//call stack is nothing but tracking of JS code line by line 
//it bases on a concept last in first out 
//once the entire code is run than call stake will become empty



// A call stack is a data structure used by programming languages to keep track of function calls. 
// When a function is called, it is added (or “pushed”) to the top of the stack. When the function 
// finishes executing, it is removed (or “popped”) from the stack.

// It helps keep track of which function is currently running and what happens after each function completes.




//Below code will call the same function again and again and occur call overflow, uncomment this code and check on console

// function sayHi() {
//     const a = 'Hi'
//     const b = 'Hello-ji';
//     console.log(a + ' ' + b);
//     sayHi()                           
// }

// sayHi()


// A call stack overflow happens when the call stack exceeds its limit—basically, 
// too many function calls are pushed onto the stack without being popped off. 
// This usually occurs due to infinite or very deep recursion, where a function 
// keeps calling itself and never ends.
//The stack keeps growing until the browser or engine says, “Enough!” and throws:

/*
Key Concepts:
LIFO Principle: The last function pushed onto the stack is the first to execute and pop off.
Execution Context: Each function call creates a new context (variables, arguments, scope).
Single-Threaded: JavaScript has one call stack, handling one task at a time.
Stack Overflow: Occurs when the stack exceeds its size limit (e.g., infinite recursion).
*/

//Example 1: Basic Function Calls
function first() {
  console.log("First");
}

function second() {
  first();
  console.log("Second");
}

second();

//Output:
// First
// Second

//Call Stack Workflow:
/*
second() is called → Added to stack: [second]
second calls first() → Stack: [second, first]
first logs "First" → Stack: [second, first]
first finishes → Popped off stack: [second]
second logs "Second" → Stack: [second]
second finishes → Stack is empty.
*/

//Example 2: Recursion (Stack Overflow)

/*
function recursiveFunc() {
  recursiveFunc(); // Infinite recursion
}

recursiveFunc();
*/

//Result:
//Uncaught RangeError: Maximum call stack size exceeded

//Workflow:
/*
recursiveFunc() is called → Stack: [recursiveFunc]
It calls itself → Stack: [recursiveFunc, recursiveFunc]
Repeats until the stack overflows.
*/

//Example 3: Asynchronous Code & the Event Loop
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

//Output:
// Start
// End
// Timeout

//Workflow:
/*
console.log("Start") → Stack: [log] → Logs "Start" → Stack empty.
setTimeout is called → Stack: [setTimeout] → Registers callback in the Web API → Stack empty.
console.log("End") → Stack: [log] → Logs "End" → Stack empty.
Event Loop checks the stack. When empty, it moves the setTimeout callback from the callback queue to the stack.
Callback runs → console.log("Timeout") → Logs "Timeout".
*/
//Note: Asynchronous callbacks (e.g., setTimeout, promises) are managed by the browser's Web APIs 
// and the event loop. They only run when the call stack is empty.


//Common Errors:

/*
Stack Overflow:
Caused by:

Infinite recursion.
Deeply nested functions.
Fix: Add base cases in recursion; optimize code.

Blocking the Stack:
Long-running functions freeze the UI.
Fix: Use asynchronous patterns (e.g., setTimeout, promises).

Summary:

Call Stack: Synchronous LIFO structure tracking function execution.
Execution Order: Functions execute sequentially as they’re pushed/popped.
Asynchronous Code: Handled via the event loop; callbacks run only when the stack is empty.
Stack Overflow: Avoid infinite recursion and deep nesting.
*/

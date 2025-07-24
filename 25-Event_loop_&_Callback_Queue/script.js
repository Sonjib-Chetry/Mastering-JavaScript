
/*
🧠 Overview
JavaScript is single-threaded, which means one command executes at a time 
in a single call stack. So how does it handle things like asynchronous events, 
such as setTimeout, API calls, event listeners, etc.?
That’s where the Event Loop, Callback Queue, and Web APIs come into play.
*/

/*
🧱 Foundations
📍 Call Stack
A stack (LIFO – Last In First Out) that keeps track of what function is currently running.
Each time a function is called, it's pushed onto the stack.
When the function returns, it is popped off.
*/

function greet() {
  console.log("Hello");
}

greet(); // pushed, executed, popped



//🌐 Web APIs
// When you run asynchronous code like:

setTimeout(() => {
  console.log("Timer Done!");
}, 1000);

//setTimeout is not part of JavaScript itself — it's provided by browser Web APIs.
// Web APIs handle the delay and then send the callback to the Callback Queue once the time has passed.


/*
📥 Callback Queue
A queue (FIFO – First In First Out) of functions waiting to be executed.
These are the callbacks from setTimeout, addEventListener, etc.
But they do not run immediately. They wait for the Call Stack to be empty.


🔁 The Event Loop
The Event Loop is like a watchman 👀:
“Hey, is the call stack empty? If yes, let’s take the first thing from the callback queue and push it to the call stack.”
Its job is to move callbacks from the callback queue into the call stack when the stack is clear.
*/

//📊 Example: Basic Event Loop Flow

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

console.log("End");

/*
🧠 What Happens?
console.log("Start") → Added to call stack → prints Start → removed from stack.
setTimeout(...) → Timer is set in Web API for 0 ms.
console.log("End") → prints End.
After 0 ms, the callback (() => console.log("Timeout callback")) is moved to Callback Queue.
Call Stack is now empty → Event Loop pushes the callback into the stack.
Callback runs → prints Timeout callback.

🔽 Output:
Start
End
Timeout callback

⛔ Even though setTimeout was for 0ms, it did not execute immediately because the call stack must be empty first.
*/


/*
⚙️ Microtask Queue (Advanced)
In addition to the Callback Queue (macrotask queue), there’s also the Microtask Queue.

It handles things like:
Promise.then()
queueMicrotask()
MutationObserver

🧠 Priority:
Microtasks run before the next callback queue task.
*/

//📊 Example with Promise:

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

/*
🔽 Output:
Start
End
Promise
Timeout


💡 Why?
Start is logged.
setTimeout sends callback to Web API → will go to Callback Queue.
Promise.resolve().then(...) is added to Microtask Queue.
End is logged.
Call Stack is empty → Event Loop checks:
Microtask queue has Promise → runs it first.
Then, the callback queue runs the setTimeout.
*/

//🔍 Real-Life Simulation

console.log("Script Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
}).then(() => {
  console.log("Promise 2");
});

console.log("Script End");

/*
🔽 Output:
Script Start
Script End
Promise 1
Promise 2
setTimeout

✅ Execution Order:
| Step | Operation                       | Queue             |
| ---- | ------------------------------- | ----------------- |
| 1    | `console.log("Script Start")`   | -                 |
| 2    | `setTimeout(...)` → Web API     | → Callback Queue  |
| 3    | `Promise.then(...)` → Microtask | → Microtask Queue |
| 4    | `console.log("Script End")`     | -                 |
| 5    | Call Stack Empty                | -                 |
| 6    | Run Microtask → `Promise 1`     | -                 |
| 7    | Then `Promise 2` (chained)      | -                 |
| 8    | Now process Callback Queue      | `setTimeout`      |


🧪 Summary Table
| Concept             | Description                             |
| ------------------- | --------------------------------------- |
| **Call Stack**      | Executes functions one at a time        |
| **Web APIs**        | Browser-provided, handle async tasks    |
| **Callback Queue**  | Stores callbacks after async tasks      |
| **Microtask Queue** | Stores microtasks like `Promise.then()` |
| **Event Loop**      | Moves tasks from queues to the stack    |


📘 TL;DR:
JavaScript runs in a single thread.
Asynchronous tasks are handled via Web APIs and queued.
Event Loop checks the call stack:
If empty → runs tasks from the microtask queue first, then callback queue.
Promises always run before setTimeout.

🧠 Practice Tip:
Try to mentally visualize this sequence every time you write asynchronous JS:
Is this a microtask or macrotask?
Is the stack busy?
Will this run before or after something else?
*/



//In JavaScript, setTimeout and setInterval are timer functions used to schedule code execution asynchronously.


// 🔹 setTimeout()

//✅ Purpose: Executes a function once after a specified delay (in milliseconds).

//✅ Syntax: setTimeout(function, delay, param1, param2, ...)

//function: The function to run.
// delay: Time in milliseconds to wait before executing.
// param1, param2, ... (optional): Arguments passed to the function.


//✅ Example 1:
console.log("Start");

setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000); // 2000 ms = 2 seconds

console.log("End");


//🔍 Output:
/*
Start
End
Executed after 2 seconds
*/

//setTimeout does not block the code. It schedules the function and moves on.

//✅ Example 2: Passing Parameters
function greet(name) {
  console.log(`Hello, ${name}!`);
}

setTimeout(greet, 3000, "Sonjib");

// Output after 3 seconds:
//Hello, Sonjib!




// 🔹 setInterval()

// ✅ Purpose: Executes a function repeatedly at fixed time intervals (every X milliseconds).
//✅ Syntax: setInterval(function, interval, param1, param2, ...)


//✅ Example 1:
let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log(`Count: ${count}`);

  if (count === 5) {
    clearInterval(intervalId); // Stops the interval after 5 counts
    console.log("Interval stopped");
  }
}, 1000); // Repeats every 1 second


//🔍 Output:
/*
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
Interval stopped
*/


// 🔸 clearTimeout() and clearInterval()

// You can cancel a scheduled timeout or interval by storing its ID and passing it to:
// clearTimeout(timeoutId)
// clearInterval(intervalId)

//✅ Example:

const timeoutId = setTimeout(() => {
  console.log("You won't see this");
}, 3000);

clearTimeout(timeoutId); // Cancels the timeout


/*
🔁 Common Use Cases:
| Use Case             | Use Function      |
| -------------------- | ----------------- |
| Delay execution once | `setTimeout()`    |
| Repeat something     | `setInterval()`   |
| Stop repeated action | `clearInterval()` |
| Cancel a delay       | `clearTimeout()`  |


🧠 Tip: Use setTimeout for recursion (safer than setInterval)

function repeat() {
  console.log("Repeating...");

  setTimeout(repeat, 1000); // waits 1s *after* previous call
}

repeat();

This gives better control (esp. for animations) compared to setInterval, which might run before the previous call finishes.
*/
// =============================================
// 1. Synchronous JavaScript (Blocking)
// =============================================
// In synchronous execution, each line of code runs in order, and the next line
// waits for the previous one to finish. This means if one operation takes time,
// it blocks everything else.

console.log("--- Synchronous Example ---");

console.log("Start");

function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log("Result:", result);

console.log("End");
// Output: Start → Result: 8 → End

// =============================================
// 2. Asynchronous JavaScript (Non-Blocking)
// =============================================
// In asynchronous execution, certain tasks like timers or network requests
// run in the background. JS does not wait for them; it continues with other code.

console.log("\n--- Asynchronous Example (setTimeout) ---");

console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");
// Output: Start → End → This runs after 2 seconds

// =============================================
// 3. Event Loop: Microtasks vs Macrotasks
// =============================================
// JS uses an event loop to handle async operations. Tasks are queued in
// either the microtask queue (Promises, async/await) or macrotask queue
// (setTimeout, setInterval). Microtasks always run before the next macrotask.

console.log("\n--- Event Loop Demo ---");

console.log("Event Loop Demo Start");

setTimeout(() => console.log("Macrotask: setTimeout"), 0);

Promise.resolve()
  .then(() => console.log("Microtask: Promise then"))
  .then(() => console.log("Microtask: Promise then 2"));

console.log("Event Loop Demo End");
// Expected order:
// Event Loop Demo Start → Event Loop Demo End → Microtask logs → Macrotask log

// =============================================
// 4. Real Blocking Example (UI Freeze Simulation)
// =============================================
// This simulates blocking by running a while loop for 4 seconds.
// While this loop runs, the UI freezes and becomes unresponsive.
// Add a button in HTML: <button class="blocking-btn">Click Me (Blocks 4s)</button>

const blockingBtn = document.querySelector('.blocking-btn');
if (blockingBtn) {
  blockingBtn.addEventListener('click', () => {
    console.log("Blocking loop started");
    const startTime = Date.now();
    let currentTime = startTime;

    // Busy-wait for 4 seconds
    while (startTime + 4000 > currentTime) {
      currentTime = Date.now();
    }
    console.log("Blocking loop ended");
  });
}

// =============================================
// 5. Real Async Example (Network Request with Promises)
// =============================================
// Fetch starts the request and returns immediately (non-blocking).
// When data arrives, the .then() callback runs.

console.log("\n--- Fetch Example (Promise) ---");

console.log("Start Fetch");
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log("Received:", data))
  .catch(err => console.error("Fetch error:", err));
console.log("End Fetch");

// =============================================
// 6. Async/Await Example
// =============================================
// async/await is syntactic sugar for Promises. It makes async code look synchronous.
// await pauses inside async function until the Promise resolves.

async function getData() {
  console.log("\n--- Async/Await Example ---");
  console.log("Fetching data...");
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/2");
    const data = await res.json();
    console.log("Data:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}
getData();

// =============================================
// 7. Multiple Requests in Parallel (Promise.all)
// =============================================
// Promise.all runs multiple promises in parallel and waits for all to finish.

async function fetchMultiple() {
  console.log("\n--- Promise.all Example ---");
  try {
    const [p1, p2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/3").then(r => r.json()),
      fetch("https://jsonplaceholder.typicode.com/posts/4").then(r => r.json())
    ]);
    console.log("Both posts:", p1, p2);
  } catch (err) {
    console.error("Error fetching multiple:", err);
  }
}
fetchMultiple();

// =============================================
// 8. AbortController for Cancelling Fetch
// =============================================
// AbortController lets you cancel a fetch request before it completes.

console.log("\n--- AbortController Example ---");

const controller = new AbortController();
fetch("https://jsonplaceholder.typicode.com/posts/5", { signal: controller.signal })
  .then(r => r.json())
  .then(data => console.log("Fetched before abort:", data))
  .catch(err => console.log("Fetch aborted:", err.name));

// Immediately abort
controller.abort();

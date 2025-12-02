

// 🚀 What is Throttling?
// Throttling is a technique where a function is allowed to run only once in a fixed time interval,
// even if it is triggered multiple times.

// 🧠 Easy Example Explanation:
// Imagine someone keeps calling you 100 times.

// You decide:
// ➡️ I will pick the call only once every 2 seconds, no matter how many times they dial.

// That is throttling.


/*
❓ Debounce vs Throttle (easy difference)
| Concept      | Function runs when?        | Best for                           |
| ------------ | -------------------------- | ---------------------------------- |
| **Debounce** | When user stops triggering | Search input                       |
| **Throttle** | At fixed intervals         | Scroll, window resize, button spam |
*/

// Basic Throttle Function

function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall < delay) return;

    lastCall = now;
    func.apply(this, args);
  };
}


//Count increases slowly & controlled

let count = 0;

function increaseCount() {
  count++;
  document.getElementById("count").textContent = count;
}

const throttledIncrease = throttle(increaseCount, 500); // runs every 500ms

document.addEventListener("mousemove", throttledIncrease);


//Throttle Button Spam Clicks

function handleClick() {
  console.log("Button clicked:", new Date().toLocaleTimeString());
}

const throttledClick = throttle(handleClick, 2000);

document.getElementById("btn").addEventListener("click", throttledClick);


//Throttle Window Scroll Event

function handleScroll() {
  console.log("Scroll event fired at:", new Date().toLocaleTimeString());
}

const throttledScroll = throttle(handleScroll, 1000);

window.addEventListener("scroll", throttledScroll);



// 🚀 What is Leading + Trailing Throttle?
// Throttle normally does one of two things:

// 1️⃣ Leading throttle
// → Executes the function immediately, then waits for the delay.

// 2️⃣ Trailing throttle
// → Waits for the delay first, then executes the function after activity stops.


// ⭐ Leading + Trailing throttle

// → Executes immediately (leading)
// → AND again after the delay if more calls happened during the interval (trailing)

// It ensures:
// Immediate response
// Final update after burst of events

//Leading + Trailing Throttle (advanced version)

// function throttle(func, delay) {
//   let lastCall = 0;
//   let timeout;

//   return function (...args) {
//     const now = Date.now();
//     const remaining = delay - (now - lastCall);

//     if (remaining <= 0) {
//       clearTimeout(timeout);
//       lastCall = now;
//       func.apply(this, args);
//     } else if (!timeout) {
//       timeout = setTimeout(() => {
//         lastCall = Date.now();
//         timeout = null;
//         func.apply(this, args);
//       }, remaining);
//     }
//   };
// }


/*
🧩 When to Use Leading + Trailing Throttle?
| Use Case                | Why?                                         |
| ----------------------- | -------------------------------------------- |
| Scroll progress bar     | Instant update + final accurate value        |
| Window resize           | Update UI fast + adjust after resizing stops |
| Dragging elements       | Smooth drag + final precise position         |
| Mouse movement counters | Real-time + final count                      |
| Live search input      | Immediate feedback + final results           |
| Infinite scrolling      | Quick load + final content load              |
*/
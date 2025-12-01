// ✅ What is Debouncing?
// Debouncing is a technique used to limit how often a function runs.

// It ensures that:
// 👉 A function runs only after a certain time has passed without calling it again.
// 🎯 Why we use Debouncing?

// Useful when you want to avoid too many function calls, such as:
// Searching while typing (avoid calling API on every keystroke)
// Window resize event
// Scroll event
// Button double-click prevention
// Form validation while typing

// 🧠 Easy Explanation:
// Imagine someone keeps ringing your doorbell repeatedly.
// You decide:
// ➡️ I will open the door only if the bell hasn’t rung again for 1 second.
// That’s debouncing.


// 📌 Example: Debounce Search on Input


// 🔹 Debounce Function

function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}


function handleSearch(e) {
  console.log("API called for:", e.target.value);
}

const debouncedSearch = debounce(handleSearch, 500);

document.getElementById("search").addEventListener("input", debouncedSearch);


// ✔️ What happens?
// Typing fast → handleSearch() does NOT run immediately
// Stops typing for 500ms → handleSearch() runs once
// 🚀 What is Memoization?
// Memoization is an optimization technique where you store the result of a function call,
// so that next time you call the function with the same input, it returns the stored result instead of recalculating.

// 🔥 In simple words:
// “If I’ve already solved this problem once, don’t solve it again — just reuse the saved answer.”

// 🎯 Why Use Memoization?
// ✔️ Speeds up expensive operations (e.g., slow API calls, heavy calculations like Fibonacci)
// ✔️ Avoids unnecessary re-computations
// ✔️ Improves performance in UI frameworks (e.g., React renders)

// 🧠 Real-Life Analogy
// Imagine:
// You ask your friend: "How much is 10 × 10?"
// He calculates the answer = 100.
// Next time you ask again → He doesn’t calculate again. He simply remembers and replies instantly.
// That is memoization.

function getYourMemoizedFunction() {
  const cache = {};
  function doHeavyCalculation(x) {
    if (cache[x]) return cache[x];
    const startTime = Date.now();
    let currentTime = startTime;
    while (startTime + 500 > currentTime) {
      currentTime = Date.now();
      console.log("Calculating...", currentTime - startTime);
    }
    const result = +Math.sqrt(x).toFixed(3);

    cache[x] = result;
    return result;
  }
  return doHeavyCalculation;
}

const memoizedDoHeavyCalculation = getYourMemoizedFunction();

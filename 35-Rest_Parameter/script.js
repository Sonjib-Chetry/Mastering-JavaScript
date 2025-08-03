
//🔹 What is the Rest Parameter?
// The rest parameter syntax (...) allows a function to accept any number of arguments as a single array.

// It is written like this:

function myFunc(...args) {
  // args is an array of all arguments passed
}


//✅ Basic Example: Collect All Arguments

function printAll(...items) {
  console.log(items);
}

printAll('apple', 'banana', 'cherry');
// Output: ['apple', 'banana', 'cherry']
//The ...items collects all passed arguments into an array called items.

/*
🔸 Difference Between Rest ... and Spread ...

| Operator | Purpose                  | Direction        |
| -------- | ------------------------ | ---------------- |
| Spread   | Expands array into args  | OUTWARD          |
| Rest     | Collects args into array | INWARD (gathers) |
*/

// ✅ Real Use: Sum Any Number of Inputs

function sum(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
//The ...nums gathers all inputs into an array nums, and reduce calculates the sum.


//🔸 Using with Other Parameters
// You can combine normal parameters with the rest parameter. The rest must always come last.

function greet(greeting, ...names) {
  return names.map(name => `${greeting}, ${name}!`);
}

console.log(greet("Hello", "Alice", "Bob"));
// Output: ["Hello, Alice!", "Hello, Bob!"]
//greeting gets the first value
// names collects the remaining arguments


// 🔁 Alternatives: Without Rest Parameter

// 1. Using arguments (array-like object)

function sum1() {
  return [...arguments].reduce((acc, curr) => acc + curr, 0);
}
console.log(sum1(1, 2, 3, 4)); // Output: 10


//2. Using Array.from()

function sum2() {
  return Array.from(arguments).reduce((acc, curr) => acc + curr, 0);
}
console.log(sum2(1, 2, 3, 4)); // Output: 10

//⚠️ arguments is not available in arrow functions, and it doesn't give a real array — it's an array-like object.


// 🔸 Advanced Use Cases

// ✅ Destructuring with Rest

const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]


// ✅ Default + Rest Together

function describe(name = "Guest", ...traits) {
  console.log(`${name} has traits: ${traits.join(", ")}`);
}

describe("John", "kind", "smart");
// Output: John has traits: kind, smart


//✅ Validate Specific and Remaining Args

function setup(config, ...rest) {
  if (!config.url) throw new Error("Missing URL");
  console.log("Extras:", rest);
}
setup({ url: "https://example.com" }, "debug", true);


//❌ Rest Parameter Rules
// Only one rest parameter allowed.
// Must be the last parameter.

// ❌ Invalid
/*
function wrong(...args, x) {} // SyntaxError
*/

/*
✅ Summary

| Feature               | Supported? |
| --------------------- | ---------- |
| Accepts variable args | ✅          |
| Converts to array     | ✅          |
| Works in arrow funcs  | ✅          |
| Must be last param    | ✅          |
| Replaces `arguments`  | ✅          |
*/

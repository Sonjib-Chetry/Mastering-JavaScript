// 🔹 What is Recursion?
// Recursion is when a function calls itself in order to solve a problem.
// Instead of using a loop (for, while), recursion breaks a problem into smaller 
// sub-problems until it reaches a base case (the stopping condition).

// 🔹 Key Parts of Recursion
// Base Case – prevents infinite recursion by stopping when a condition is met.
// Recursive Case – the part where the function calls itself with a smaller/simpler input.

// 🔹 Example: Countdown

const recursiveCountdown1 = (number) => {
  if (number < 1) {   // Base case
    return;
  }
  console.log(number);
  recursiveCountdown1(number - 1); // Recursive case
};

recursiveCountdown1(5);

// ✅ Output:
// 5
// 4
// 3
// 2
// 1


// 🔹 Example: Count Up
// By swapping the order of logging and the recursive call:

const recursiveCountdown2 = (number) => {
  if (number < 1) {
    return;
  }
  recursiveCountdown2(number - 1);
  console.log(number);
};

recursiveCountdown2(5);

// ✅ Output:
// 1
// 2
// 3
// 4
// 5


// 🔹 How It Works (Call Stack)
// JavaScript uses the call stack (LIFO – Last In, First Out) to keep track of function calls.
// recursiveCountdown(5) goes on the stack.
// It calls recursiveCountdown(4), so that gets pushed on top.
// This continues until recursiveCountdown(0) hits the base case.
// Once the base case returns, each function call resolves one by one, popping off the stack.


// 🔹 Why Use Recursion?
// Handling unknown/deeply nested structures (trees, graphs, JSON objects).
// Divide-and-conquer algorithms (merge sort, quicksort).
// Elegant solutions for repetitive patterns.


// 🔹 Caution
// Without a base case → infinite recursion → stack overflow error.
// Sometimes recursion can be slower than loops due to overhead.


// ✅ In short:
// Recursion = function calling itself until a base case stops it, with the call stack managing execution order.



// 🔹 Example 1: Traversing a Nested Object (like JSON data)
// Imagine you have a nested object that represents user data:

const user = {
  name: "Alice",
  age: 28,
  address: {
    street: "123 Main St",
    city: "Guwahati",
    country: {
      name: "India",
      code: "IN"
    }
  }
};

// If you want to print all the values, you don’t know how deeply nested it might be. Recursion helps:

const printValues = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      // Recursive case: dive deeper
      printValues(obj[key]);
    } else {
      console.log(obj[key]); // Base case: print value
    }
  }
};

printValues(user);

// ✅ Output:
// Alice
// 28
// 123 Main St
// Guwahati
// India
// IN


// 🔹 Example 2: Flattening a Nested Array

const nestedArray = [1, [2, [3, 4], 5], 6];

const flatten = (arr) => {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item)); // recursive call
    } else {
      result.push(item);
    }
  }
  return result;
};

console.log(flatten(nestedArray));

// ✅ Output:
// [1, 2, 3, 4, 5, 6]


// 🔹 Example 3: File/Folder Structure (Tree Traversal)
// A file system naturally has recursion:
// A folder can contain files and other folders.
// To list everything, recursion is perfect.

const fileSystem = {
  name: "root",
  files: ["index.html", "style.css"],
  folders: [
    {
      name: "src",
      files: ["app.js"],
      folders: [
        { name: "components", files: ["header.js", "footer.js"], folders: [] }
      ]
    }
  ]
};

const listFiles = (folder) => {
  console.log("📂 " + folder.name);

  folder.files.forEach(file => console.log("   📄 " + file));

  folder.folders.forEach(subFolder => listFiles(subFolder)); // recursion
};

listFiles(fileSystem);

// ✅ Output:
// 📂 root
//    📄 index.html
//    📄 style.css
// 📂 src
//    📄 app.js
// 📂 components
//    📄 header.js
//    📄 footer.js


// 🔹 Example 4: Factorial Function (Classic Recursion Example)

const factorial = (n) => {
  if (n <= 1) return 1; // base case
  return n * factorial(n - 1); // recursive case
};

console.log(factorial(5)); // 120


// 👉 So, recursion is very powerful for:
// Working with nested structures (objects, arrays, trees, DOM).
// Divide-and-conquer algorithms (sorting, searching).
// Situations where the depth is unknown at runtime.
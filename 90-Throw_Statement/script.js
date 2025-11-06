
// ✅ How Does the throw Statement Work?
// The throw statement in JavaScript is used to manually throw an exception — an error or unexpected 
// event that interrupts the normal flow of a program.

// 🔹 What Is an Exception?
// An exception occurs when something goes wrong during program execution — 
// for example, invalid input, division by zero, or an unexpected data type.
// If not handled properly, exceptions can cause your program to crash.

// 🔹 Syntax

// throw expression;

// The expression can be any value — a string, number, object, or an instance of an error class 
// (Error, TypeError, RangeError, etc.).
// When a throw statement executes, it stops the current function and passes control to the nearest 
// catch block (if one exists).


// 🔹 Example 1: Throwing a TypeError


function validateNumber(input) {
  if (typeof input !== "number") {
    throw new TypeError("Expected a number, but received " + typeof input);
  }
  return input * 2;
}

// validateNumber("5"); // ❌ Throws: TypeError: Expected a number, but received string
// validateNumber(10);  // ✅ Returns: 20  

// Here, if the input is not a number, a TypeError is thrown with a custom message.


// 🔹 Example 2: Throwing a Generic Error

function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Cannot divide by zero");
  }
  return numerator / denominator;
}

// divide(10, 0); // ❌ Throws: Error: Cannot divide by zero

// This throws a generic Error when the denominator is zero.


// 🔹 Key Points
// You can throw any type of value, but using the Error class (or its subclasses) gives better error 
// messages and stack traces.
// throw interrupts the normal program flow until the error is caught.
// Common error types include:
// Error – generic error.
// TypeError – invalid data type.
// RangeError – a number out of range.
// ReferenceError – using an undefined variable.



// ✅ Next Step: Handling Errors with try...catch
// Now that you know how the throw statement works, the next step is learning how to handle those 
// errors gracefully — using the try...catch statement.


// 🔹 What Is try...catch?
// The try...catch block lets you run code that might throw an error and then handle that 
// error without crashing your program.

// It’s like saying:
// “Try running this code — and if something goes wrong, catch the error and deal with it.”

// 🔹 Syntax

try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
}


// 🔹 Example 1: Handling an Error

try {
  let result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error.message);
}

// If the divide() function throws an error, the catch block runs instead of crashing the program.

// 🧠 Output: An error occurred: Cannot divide by zero


// 🔹 Example 2: Combining throw and try...catch

function validateNumber(input) {
  if (typeof input !== "number") {
    throw new TypeError("Expected a number, but received " + typeof input);
  }
  return input * 2;
}

try {
  console.log(validateNumber("10"));
} catch (error) {
  console.error("Error caught:", error.message);
}

// 🧠 Output: Error caught: Expected a number, but received string


// 🔹 Example 3: Using finally
// You can also add a finally block that runs whether or not an error occurred.

try {
  console.log("Start process...");
  throw new Error("Something went wrong!");
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Cleanup completed.");
}

// 🧠 Output:
// Start process...
// Error: Something went wrong!
// Cleanup completed.


// 🔹 Key Takeaways
// Use try for code that might fail.
// Use catch to handle the error safely.
// Use finally for cleanup or code that must always run.
// Always provide meaningful error messages to make debugging easier.
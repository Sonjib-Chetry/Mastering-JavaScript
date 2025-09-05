// In JavaScript, the try, catch, and finally blocks are used for error handling. 
// They allow you to write code that handles unexpected problems (runtime errors) in 
// a clean and controlled way — instead of crashing the entire script.

// try Block
// The try block is where you put code that might throw an error.
// If everything works fine, JavaScript skips the catch block.
//But if an error occurs: It throws an error and jumps to the catch block.


// catch Block
// This block catches the error thrown from the try block.
// You get an error object which has useful info:
// error.name – name of the error (e.g., ReferenceError)
// error.message – human-readable message


//finally Block
// The finally block always runs, no matter if:
// an error was thrown
// the error was caught
// no error at all
// Use Case: Cleanup tasks (closing DB connections, file handles, loaders, etc.)

try {
  console.log("Inside try");
  let result = 10 / 0;  // No error here, just unusual math
} catch (e) {
  console.log("Inside catch");
} finally {
  console.log("Inside finally");
}


try {
  let result = undefinedVariable + 1;
} catch (error) {
  console.log("An error occurred!");
  console.log("Error name:", error.name);
  console.log("Error message:", error.message);
}


try {
  throw new Error("Something broke");
} catch (e) {
  console.log("Caught error:", e.message);
} finally {
  console.log("Finally block always runs");
}


// Real-World Example

function fetchData() {
  try {
    console.log("Fetching data...");
    // simulate error
    throw new Error("Network failed");
  } catch (e) {
    console.log("Error while fetching:", e.message);
  } finally {
    console.log("Closing connection...");
  }
}

fetchData();


//---------------------------------------------------//

const user = {
  name: 'Anurag',
  age: 34,
}

try {
  console.log(user.address)
} catch (err) {
  console.dir(err.message)
} finally {
  console.log('hello world')
}



async function makeAsyncRequest(url) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
  } catch (err) {
    console.log(err.message)
  }
}

makeAsyncRequest("https://dummyjson.com/users")

// Simple Example:

try {
  console.log("Before error");
  let x = y + 1; // ❌ y is not defined → ReferenceError
  console.log("After error"); // skipped
} catch (err) {
  console.log("Error caught!");
  console.log("Name:", err.name);     // ReferenceError
  console.log("Message:", err.message); // y is not defined
} finally {
  console.log("This will always run!");
}


// ✅ Output:

// Before error
// Error caught!
// Name: ReferenceError
// Message: y is not defined
// This will always run!


// finally Use Case: The finally block is great for cleanup code:

function connectDB() {
  try {
    console.log("Connecting...");
    throw new Error("Connection failed");
  } catch (err) {
    console.log("Error:", err.message);
  } finally {
    console.log("Closing connection...");
  }
}
connectDB();
//  Even if the connection fails, resources are cleaned up.

// Throwing Custom Errors: You can create and throw your own errors.

function validateAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18+");
  }
  return "Valid age!";
}

try {
  console.log(validateAge(16));
} catch (err) {
  console.log("Validation failed:", err.message);
}


// Real-World Example – API Call
/*
async function makeAsyncRequest(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Fetched data:", data);
  } catch (err) {
    console.log("Request failed:", err.message);
  } finally {
    console.log("Request completed!");
  }
}
makeAsyncRequest("https://dummyjson.com/users");
*/

// ✅ Best Practices

// Catch only what you can handle – don’t silently swallow all errors.
// Use finally for cleanup – DB close, file close, stop loaders.
// Avoid overusing – not every line of code needs try...catch.
// Custom error messages – helps debugging.
// Async/await with try...catch – always wrap await calls.

// ✅ In summary:

// try...catch is JavaScript’s error handling mechanism.
// finally ensures cleanup code runs always.
// Can handle both sync and async errors.
// Supports custom errors, rethrowing, nested handling, and ES10+ optional catch binding.





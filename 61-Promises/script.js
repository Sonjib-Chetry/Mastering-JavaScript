//Note: Uncomment every block of code to se result one by one



//Promises in JavaScript
// Callback Queue (a.k.a. Task Queue or Macrotask Queue)
// Microtask Queue (used by Promises, MutationObserver, etc.)


// 1. Promises in JavaScript
// What is a Promise?
// A Promise is an object that represents the eventual 
// completion (or failure) of an asynchronous operation and its resulting value.

// It has three states:
// pending – the initial state
// fulfilled – operation completed successfully
// rejected – operation failed

//Basic Example:
const myPromise = new Promise((resolve, reject) => {
    resolve("Success!"); // or reject("Error!") for failure
});

myPromise.then((data) => {
  console.log(data); // "Success!"
}).catch((error) => {
  console.error(error);
});



//2. Callback Queue (Macrotask Queue)
// All functions like setTimeout, setInterval, DOM events, etc., are macrotasks.
// When the call stack is empty, JavaScript picks one task from this queue and runs it.

/*
console.log("1");

setTimeout(() => {
  console.log("2");  // Macrotask
}, 0);

console.log("3");
*/

//Even though the timer is 0ms, it's executed after synchronous code.


//3. Microtask Queue
// Includes Promise.then, catch, finally, and MutationObserver.
// Microtasks are executed after the current task, but before the next macrotask.

/*
console.log("A");

setTimeout(() => {
  console.log("B"); // Macrotask
}, 0);

Promise.resolve().then(() => {
  console.log("C"); // Microtask  ← Microtask runs before macrotask
});

console.log("D");
*/



// Combining All Concepts Together:

console.log("Start");

setTimeout(() => {
  console.log("setTimeout"); // Macrotask
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1"); // Microtask
}).then(() => {
  console.log("Promise 2"); // Microtask
});

console.log("End");


//Output:
// Start
// End
// Promise 1
// Promise 2
// setTimeout


//---------------------------------------------//

// .then()
// Used to handle successful resolution of a Promise.

//Example:
/*
const myPromise1 = Promise.resolve("Data loaded");

myPromise1.then((data) => {
  console.log("Success:", data); // Success: Data loaded
});
*/



// .catch()
//Used to handle errors or rejected promises.
// It is the recommended way to catch errors instead of passing a second argument to .then().

//Example:
/*
const myPromise2 = Promise.reject("Something went wrong");

myPromise2
  .then((data) => {
    console.log("This will not run");
  })
  .catch((error) => {
    console.error("Error:", error); // Error: Something went wrong
  });
*/


// .finally()
// Runs after the promise is settled, regardless of whether it was fulfilled or rejected.
// Used for cleanup tasks, like hiding a loading spinner.

/*
const myPromise3 = Promise.resolve("Done");

myPromise3
  .then((data) => {
    console.log(data); // Done
  })
  .catch((err) => {
    console.log("Error:", err);
  })
  .finally(() => {
    console.log("Cleanup done"); // always runs
  });
*/



//Full Example with .then, .catch, .finally

function fetchData(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Data fetched");
      } else {
        reject("Fetch failed");
      }
    }, 1000);
  });
}

fetchData(false)  // change to true for success
  .then((data) => {
    console.log("✅ Success:", data);
  })
  .catch((error) => {
    console.error("❌ Error:", error);
  })
  .finally(() => {
    console.log("🔄 Operation finished (either way)");
  });



// Promise.all, Promise.race, Promise.any

// Promise.all
// Runs multiple promises in parallel and waits for all to resolve.

let p1 = Promise.resolve("One");
let p2 = Promise.resolve("Two");
let p3 = Promise.resolve("Three");

Promise.all([p1, p2, p3])
    .then(values => console.log(values))  // ["One", "Two", "Three"]
    .catch(err => console.log(err));


// Promise.race
// Returns the first resolved or rejected promise.

/*
let p1 = new Promise(res => setTimeout(() => res("First"), 1000));
let p2 = new Promise(res => setTimeout(() => res("Second"), 2000));

Promise.race([p1, p2])
    .then(value => console.log(value));  // First
*/


// Promise.any (ES2021)
// Returns the first fulfilled promise, ignores rejections.

/*
let p1 = Promise.reject("Error");
let p2 = new Promise(res => setTimeout(() => res("Success"), 1000));

Promise.any([p1, p2])
    .then(value => console.log(value));  // Success
*/


// Handling Multiple Async Operations (Real Example)

function getUser() {
    return new Promise(resolve => {
        setTimeout(() => resolve("User data"), 1000);
    });
}

function getPosts() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Posts data"), 1500);
    });
}

Promise.all([getUser(), getPosts()])
    .then(([user, posts]) => {
        console.log(user);   // User data
        console.log(posts);  // Posts data
    });



// Async/Await (Built on Promises)
// Async/await is syntactic sugar for Promises:
/*
async function fetchData() {
    try {
        let data = await asyncTask;
        console.log(data);  // ✅ Data loaded
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Done");
    }
}

fetchData();
*/

// ✅ Summary:

// ✔ Promises handle async tasks better than callbacks
// ✔ .then(), .catch(), .finally() for handling results
// ✔ Promise.all, Promise.race, Promise.any for multiple tasks
// ✔ Use async/await for cleaner syntax
// ✔ Promises work with microtasks for efficient scheduling
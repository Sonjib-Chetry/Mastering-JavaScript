// 🔑 What is a Closure?
// A closure is formed when a function "remembers" the variables from its lexical scope 
// (the environment in which it was created), even after that outer function has returned.

// Put simply:
// 👉 A closure = function + its lexical scope

// ⚙️ How Closures Work
// When a function is created inside another function, the inner function has access to:
// Its own local variables
// Variables of the outer function(s)
// Global variables

// Even if the outer function is done executing, the inner function "closes over" those variables — 
// meaning it keeps a live reference to them.


// 🧩 Examples


// 1. Basic Closure

function outerFunction(x) {
    let y = 10;
    function innerFunction() {
        console.log(x + y);
    }
    return innerFunction;
}

let closure = outerFunction(5);
closure(); // Output: 15
// ✅ innerFunction still has access to x and y from outerFunction after it has returned.


// 2. Closures for Private Data

function createCounter() {
    let count = 0;  // private variable
    return function() {
        count++;
        return count;
    };
}

let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
// ✅ The count variable can’t be accessed directly — only via the closure. This mimics private variables.


// 3. Function Factory with Closures

function multiply(x) {
    return function(y) {
        return x * y;
    };
}

let double = multiply(2);
let triple = multiply(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
// ✅ Each returned function remembers the x it was created with.


// 4. Closures Capture Variables by Reference

function createIncrementer() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}

let increment = createIncrementer();
increment(); // 1
increment(); // 2
// ✅ The closure doesn’t copy the variable, it keeps a reference. That’s why the count keeps increasing instead of resetting.


// 🚀 Why Are Closures Useful?
// Data privacy & encapsulation (like private variables in classes).
// Function factories (returning customized functions).
// Callbacks & event handlers (keeping access to surrounding context).
// Asynchronous programming (preserving variables when using setTimeout, promises, etc.).


// ⚠️ Common Pitfalls

// Closures inside loops – they might capture the same variable reference instead of creating a new one.

for (var i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Output: 4, 4, 4 (not 1, 2, 3)

// Fix with let (block-scoped):

for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Output: 1, 2, 3


// Memory leaks – closures hold references to outer variables, so unused closures can prevent garbage collection 
// if not managed carefully.


// ✅ Summary:
// Closures let inner functions "remember" and use variables from their outer function even after 
// the outer function has finished. They are essential for creating private state, 
// function factories, and managing asynchronous code.




// 🔥 Real-World Uses of Closures in JavaScript

// 1. Private Variables (Encapsulation)
// JavaScript doesn’t have built-in private variables (before #private class fields). Closures let you simulate them.

function BankAccount(initialBalance) {
    let balance = initialBalance; // private variable

    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },
        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
                return balance;
            } else {
                return "Insufficient funds";
            }
        },
        getBalance() {
            return balance;
        }
    };
}

let account = BankAccount(1000);
console.log(account.deposit(500));   // 1500
console.log(account.withdraw(300));  // 1200
console.log(account.getBalance());   // 1200
// console.log(account.balance); ❌ undefined
// 👉 balance is hidden from the outside, only accessible via closures.


// 2. Callbacks & Event Listeners
// Closures keep access to variables from the context they were created in.
/*
function setupButton(id, message) {
    let button = document.getElementById(id);
    button.addEventListener("click", function() {
        alert(message); // closure keeps access to message
    });
}

setupButton("btn1", "Hello from Button 1!");
setupButton("btn2", "Hello from Button 2!");
*/
// 👉 Each button remembers its own message.


// 3. Asynchronous Code (setTimeout, Promises)
// Closures help preserve state across async operations.

function delayedMessage(message, delay) {
    setTimeout(function() {
        console.log("Message:", message);
    }, delay);
}

delayedMessage("Hello after 2 seconds", 2000);
// 👉 Even after delayedMessage finishes, the inner function remembers message.


// 4. Function Factories (Currying & Partial Application)
// Closures let you create reusable, customized functions.

function makeGreeting(language) {
    return function(name) {
        if (language === "en") {
            return "Hello, " + name;
        }
        if (language === "es") {
            return "Hola, " + name;
        }
    };
}

let greetEnglish = makeGreeting("en");
let greetSpanish = makeGreeting("es");

console.log(greetEnglish("Sonjib")); // Hello, Sonjib
console.log(greetSpanish("Sonjib")); // Hola, Sonjib
// 👉 Each function remembers the language it was created with.


// 5. Module Pattern
// Closures form the foundation of the module pattern in JavaScript.

const UserModule = (function() {
    let users = []; // private

    function addUser(user) {
        users.push(user);
    }

    function getUsers() {
        return users;
    }

    // expose only these
    return {
        addUser,
        getUsers
    };
})();

UserModule.addUser("Alice");
UserModule.addUser("Bob");
console.log(UserModule.getUsers()); // [ 'Alice', 'Bob' ]
// console.log(UserModule.users); ❌ undefined
// 👉 This mimics namespaces and keeps variables private.


// 6. Memoization (Performance Optimization)
// Closures store cached results of expensive function calls.

function memoize(fn) {
    let cache = {};
    return function(x) {
        if (cache[x] !== undefined) {
            console.log("Fetching from cache:", x);
            return cache[x];
        } else {
            console.log("Calculating result:", x);
            let result = fn(x);
            cache[x] = result;
            return result;
        }
    };
}

function square(n) {
    return n * n;
}

let memoizedSquare = memoize(square);

console.log(memoizedSquare(5)); // Calculating result: 5 → 25
console.log(memoizedSquare(5)); // Fetching from cache: 5 → 25
// 👉 Closure keeps the cache alive between calls.


// ✅ Summary:
// Closures are used in the real world for:
// Private variables & data encapsulation (Bank account, counters).
// Event listeners & callbacks (buttons, DOM events).
// Asynchronous code (timers, promises).
// Function factories (currying, customized functions).
// Module pattern (organizing code & hiding details).
// Memoization (optimizing performance).
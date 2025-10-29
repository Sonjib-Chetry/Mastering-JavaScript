
// 🧠 1. The Core Concept — Reference vs. Value

// In JavaScript, primitive types (like numbers, strings, booleans, null, undefined, symbol, bigint) are copied by value,
// but objects and arrays are copied by reference.

// That means:
// When you copy an object or array, you’re not creating a new one — you’re just making a new reference to the same memory location.

// Let’s see that in action 👇

let arr1 = [1, 2, 3];
let arr2 = arr1; // copies the reference, not the data

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]

// ✅ Explanation:
// Both arr1 and arr2 point to the same array in memory.
// So any change in one affects the other.


// 🧩 2. Copying Arrays

// There are two main types of array copies:

// ➤ (a) Shallow Copy

// Creates a new array but only one level deep.
// If the array contains nested objects, those nested parts are still shared (referenced).

// ✅ Methods to make a shallow copy:

// Using slice()

let arr11 = [1, 2, 3];
let arr21 = arr11.slice();

arr21.push(4);

console.log(arr11); // [1, 2, 3]
console.log(arr21); // [1, 2, 3, 4]


// Using Spread Operator (...)

let arr12 = [1, 2, 3];
let arr22 = [...arr12];

arr22.push(5);

console.log(arr12); // [1, 2, 3]
console.log(arr22); // [1, 2, 3, 5]


// Using Array.from()

let arr13 = [1, 2, 3];
let arr23 = Array.from(arr13);

// 🔹 All these create a new array but only at the top level (shallow).



// Example (problem with nested data):

let arr14 = [[1, 2], [3, 4]];
let arr24 = [...arr14];

arr24[0].push(99);

console.log(arr14); // [[1, 2, 99], [3, 4]]
console.log(arr24); // [[1, 2, 99], [3, 4]]


// Even though we used spread, both arrays share inner arrays.



// ➤ (b) Deep Copy

// A deep copy duplicates all levels of nested objects/arrays.

// ✅ Common ways:

// Using structuredClone() (modern & recommended)

let arr15 = [[1, 2], [3, 4]];
let arr25 = structuredClone(arr15);

arr25[0].push(99);

console.log(arr15); // [[1, 2], [3, 4]]
console.log(arr25); // [[1, 2, 99], [3, 4]]


// Using JSON.parse(JSON.stringify())

let arr16 = [[1, 2], [3, 4]];
let arr26 = JSON.parse(JSON.stringify(arr16));

arr26[0].push(99);
console.log(arr16); // [[1, 2], [3, 4]]
console.log(arr26); // [[1, 2, 99], [3, 4]]


// ⚠️ But this has limitations:
// It doesn’t copy functions, undefined, Date, Map, Set, etc. properly.
// Works only for JSON-safe data.



// 🧱 3. Copying Objects
// Objects work exactly the same way — assignments copy references.

let obj1 = { name: "Sonjib", age: 30 };
let obj2 = obj1;

obj2.age = 31;

console.log(obj1.age); // 31

// They point to the same object.


// ➤ (a) Shallow Copy of Objects
// 1. Using Spread Operator

let obj11 = { name: "Sonjib", details: { city: "Guwahati" } };
let obj21 = { ...obj11 };

obj21.name = "Alex";
obj21.details.city = "Delhi";

console.log(obj11.name); // "Sonjib"
console.log(obj11.details.city); // "Delhi" (shared nested object)

// 2. Using Object.assign()

let obj12 = { a: 1, b: { c: 2 } };
let obj22 = Object.assign({}, obj12);

obj22.b.c = 99;

console.log(obj12.b.c); // 99

// Both only do shallow copy.


// ➤ (b) Deep Copy of Objects
// 1. Using structuredClone()

let obj13 = { a: 1, b: { c: 2 } };
let obj23 = structuredClone(obj13);

obj23.b.c = 99;

console.log(obj13.b.c); // 2
console.log(obj23.b.c); // 99

// ✅ Works well for modern browsers and Node 17+.


// 2. Using JSON.parse(JSON.stringify())

let obj14 = { a: 1, b: { c: 2 } };
let obj24 = JSON.parse(JSON.stringify(obj14));

obj24.b.c = 99;

// ⚠️ Loses functions, undefined, Symbol, etc.

/*
🧩 4. Summary Table

| Method                              | Works for | Type      | Nested Safe? | Notes                        |
| ----------------------------------- | --------- | --------- | ------------ | ---------------------------- |
| `=`                                 | Both      | Reference | ❌            | Copies reference only        |
| `slice()`, `spread`, `Array.from()` | Arrays    | Shallow   | ❌            | Top level only               |
| `Object.assign()`, `spread`         | Objects   | Shallow   | ❌            | Top level only               |
| `structuredClone()`                 | Both      | Deep      | ✅            | Best modern method           |
| `JSON.parse(JSON.stringify())`      | Both      | Deep      | ⚠️           | Limited, loses special types |
*/

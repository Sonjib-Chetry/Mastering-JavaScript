
//🔁 1. for...of Loop

// ✅ Purpose:
// Used to iterate over the values of iterable objects such as:
// Arrays
// Strings
// Maps
// Sets
// DOM collections
// Generators

// 📘 Syntax:
/*
for (const value of iterable) {
  // code block to execute
}
*/

//Example 1: Iterating through an array

const colors = ['red', 'green', 'blue'];

for (const color of colors) {
  console.log(color);
}
// Output:
// red
// green
// blue


//Example 2: Iterating through a string

const name = "Sonjib";

for (const char of name) {
  console.log(char);
}
// Output: S o n j i b (each on new line)


//Example 3: Using for...of with Set

const ids = new Set([101, 102, 103]);

for (const id of ids) {
  console.log(id);
}
// Output: 101 102 103


//Example 4: Iterating Map

const userMap = new Map([
  ['name', 'Sonjib'],
  ['age', 30]
]);

for (const [key, value] of userMap) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Sonjib
// age: 30


//⚠️ Note:
// for...of does not work on plain objects. Use Object.entries() or for...in for objects.

// const obj = { a: 1, b: 2 };

// ❌ TypeError
// for (const val of obj) { ... }  // won't work


//🔁 2. for...in Loop
// ✅ Purpose:
// Used to iterate over the enumerable properties (keys) of objects (or arrays as indexes, though not recommended).

//📘 Syntax:
/*
for (const key in object) {
  // code block using object[key]
}
*/


// Example 1: Iterating through object keys

const user = {
  name: 'Sonjib',
  age: 30,
  job: 'Developer'
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
// Output:
// name: Sonjib
// age: 30
// job: Developer


//Example 2: Iterating array indexes (not recommended)

const fruits = ['apple', 'banana', 'cherry'];

for (const index in fruits) {
  console.log(`${index}: ${fruits[index]}`);
}
// Output:
// 0: apple
// 1: banana
// 2: cherry

//👉 Use for...of for arrays instead.


//⚠️ Important Notes:
// for...in should be avoided for arrays, especially when order matters.
// It enumerates keys, including inherited properties unless filtered.

// To skip inherited properties:
/*
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key);
  }
}
*/

/*
🔍 Key Differences Summary
| Feature             | `for...of`                              | `for...in`                                 |
| ------------------- | --------------------------------------- | ------------------------------------------ |
| Iterates over       | **Values** of an **iterable**           | **Keys** (property names) of an **object** |
| Works on            | Arrays, strings, maps, sets, generators | Plain objects and arrays (as index keys)   |
| Can be used with    | `Map`, `Set`, `Array`, `String`         | Plain objects                              |
| Use on objects      | ❌ Not directly                          | ✅ Yes                                      |
| Includes inherited? | ❌ No                                    | ✅ Yes, unless filtered                     |
| Recommended for     | Arrays, Strings, Sets, Maps             | Objects (to loop over keys)                |
*/


// 🧠 Advanced Use Cases

//1. With Object.entries() to use for...of on objects:

const person = { name: 'Sonjib', age: 30 };

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

//2. Loop over DOM collections:

const buttons = document.querySelectorAll('button');

for (const btn of buttons) {
  btn.addEventListener('click', () => alert('Clicked!'));
}


//✅ When to Use What?
// Use for...of → When you need values (arrays, strings, collections).
// Use for...in → When you need keys (object properties).
// Prefer for...of for arrays — more reliable and readable.
// Don’t use for...in on arrays unless you have a very specific reason.


//Let’s go step-by-step and explore Object.keys(), Object.values(), and Object.entries() 
//in JavaScript — from basic to advanced, with real examples, how they work with loops, and best practices.

//🔹 1. Object.keys()
// ✅ What it does:
// Returns an array of the object's own enumerable property names (keys).

//📘 Syntax:
//Object.keys(obj)


//🧪 Example 1: Basic use

const user1 = {
  name: 'Sonjib',
  age: 30,
  role: 'Developer'
};

const keys = Object.keys(user1);
console.log(keys); // ['name', 'age', 'role']

// 🔁 Loop through keys:

for (const key of Object.keys(user1)) {
  console.log(`${key}: ${user1[key]}`);
}
// Output:
// name: Sonjib
// age: 30
// role: Developer


//⚠️ Includes only own properties, not inherited.

const parent = { a: 1 };
const child = Object.create(parent);

console.log(child);

child.b = 2;

console.log(Object.keys(child)); // ['b']

//🔹 2. Object.values()
//✅ What it does:
// Returns an array of the object's own enumerable property values.

//📘 Syntax:
//Object.values(obj)


// 🧪 Example 2: Basic use

const user2 = {
  name: 'Sonjib',
  age: 30,
  role: 'Developer'
};

const values = Object.values(user2);
console.log(values); // ['Sonjib', 30, 'Developer']

//🔁 Loop through values:

for (const value of Object.values(user2)) {
  console.log(value);
}
// Output:
// Sonjib
// 30
// Developer


//🔹 3. Object.entries()
// ✅ What it does:
// Returns an array of key-value pairs as nested arrays.

//📘 Syntax:
//Object.entries(obj)


//🧪 Example 3: Basic use

const user3 = {
  name: 'Sonjib',
  age: 30,
  role: 'Developer'
};

const entries = Object.entries(user3);
console.log(entries);
// [['name', 'Sonjib'], ['age', 30], ['role', 'Developer']]


//🔁 Loop through entries (Destructuring):

for (const [key, value] of Object.entries(user3)) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Sonjib
// age: 30
// role: Developer


//🧠 Advanced Examples

//✅ Example 4: Converting Object.entries() to a Map

const obj = { a: 1, b: 2 };
const map = new Map(Object.entries(obj));

console.log(map.get('a')); // 1


//✅ Example 5: Filtering object by value

const scores = {
  Alice: 90,
  Bob: 75,
  Carol: 85
};

const highScorers = Object.entries(scores)
  .filter(([name, score]) => score > 80)
  .map(([name]) => name);

console.log(highScorers); // ['Alice', 'Carol']


//✅ Example 6: Convert entries back to object

const entries1 = [['name', 'Sonjib'], ['age', 30]];
const obj1 = Object.fromEntries(entries);

console.log(obj1); // { name: 'Sonjib', age: 30 }

/*
🔁 Comparison Table
| Feature              | `Object.keys()`             | `Object.values()`             | `Object.entries()`                     |
| -------------------- | --------------------------- | ----------------------------- | -------------------------------------- |
| Returns              | Array of property names     | Array of property values      | Array of `[key, value]` pairs          |
| Type returned        | `string[]`                  | `any[]`                       | `[string, any][]`                      |
| Use in loop          | Loop keys                   | Loop values                   | Loop keys & values using destructuring |
| Common use cases     | Iterating object properties | Filtering/transforming values | Creating Maps, filtering full entries  |
| Skips inherited keys | ✅ Yes                       | ✅ Yes                         | ✅ Yes                                  |


✅ Best Practices
Use Object.entries() when you need both key and value.
Prefer for...of with Object.entries() instead of for...in for better control.
Combine with .filter(), .map(), .reduce() for powerful object transformations.
Avoid using them on non-plain objects (like DOM elements) unless sure.
*/
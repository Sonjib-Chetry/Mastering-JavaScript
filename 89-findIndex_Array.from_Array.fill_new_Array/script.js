
// ✅ What is findIndex()?

// findIndex() is a JavaScript array method used to search through an array and return 
// the index of the first element that satisfies a given condition.

// If no element matches the condition, it returns -1.


// ✅ Syntax
/*
array.findIndex((element, index, array) => {
  // condition
});
*/

// element → current item
// index → current index
// array → the whole array (optional)


// ✅ Simple Example
// Find the index of first number greater than 10:

const numbers = [4, 9, 15, 20];

const result = numbers.findIndex(num => num > 10);

console.log(result); // 2 (because 15 is the first value > 10)


// ✅ Example with Objects
// Find the index of the person whose age is above 18:

const people = [
  { name: "Raj", age: 16 },
  { name: "Aman", age: 17 },
  { name: "Neha", age: 20 },
];

const index = people.findIndex(person => person.age > 18);

console.log(index); // 2 (Neha)


// ✅ If No Match Found

const arr = [2, 4, 6, 8];

const idx = arr.findIndex(num => num > 10);

console.log(idx); // -1 (no element > 10)


// ✅ Using Index Inside Condition

const items = ["a", "b", "c", "d"];

const index1 = items.findIndex((item, i) => i === 2);

console.log(index1); // 2

/*
✅ Difference between find() and findIndex()

| Method        | Returns                             |
| ------------- | ----------------------------------- |
| `find()`      | The element itself                  |
| `findIndex()` | The index (position) of the element |
*/

// Example:

const nums1 = [5, 10, 15];

console.log(nums1.find(x => x > 10));     // 15
console.log(nums1.findIndex(x => x > 10)); // 2


// ✅ When to use findIndex()?
// Use findIndex() when you want to:
// Find the position of an item in an array
// Remove or update an item by its index
// Example — removing an element:

const fruits = ["apple", "banana", "mango"];

const idx1 = fruits.findIndex(fruit => fruit === "banana");

if (idx1 !== -1) {
  fruits.splice(idx1, 1);
}

console.log(fruits); // ["apple", "mango"]


/*
🎯 Quick Summary

| Feature            | Detail                                |
| ------------------ | ------------------------------------- |
| What it does       | Finds index of first matching element |
| Return value       | **Index** or **-1**                   |
| Stops after match? | ✅ Yes (efficient)                     |
| Works on           | Arrays                                |
| Use cases         | Finding position, removing/updating   |
*/




// ✅ How to Get Array Length
// Every JavaScript array has a .length property that tells you how many elements it has.

const fruits1 = ['apple', 'banana', 'orange'];
console.log(fruits1.length); // 3


// ✅ Sparse Arrays (Empty Slots)
// A sparse array has empty slots, not values like undefined.

const sparseArray = [1, , , 4];
console.log(sparseArray.length); // 4
console.log(sparseArray);        // [1, <2 empty items>, 4]


// ⚠️ Key Point
// Empty slot ≠ undefined
// JavaScript skips empty slots in many methods (like .map() and .forEach())


// ✅ Create Empty Array of Fixed Length

// Method 1: new Array(n)
// Creates empty slots (sparse array)

const emptyArray = new Array(5);
console.log(emptyArray.length); // 5
console.log(emptyArray);        // [ <5 empty items> ]
// Note: emptyArray has empty slots, not undefined values


// Method 2: Array.from({ length: n })
// Creates an array with actual values (undefined) — NOT empty slots.

const fixedLengthArray = Array.from({ length: 5 });
console.log(fixedLengthArray.length); // 5
console.log(fixedLengthArray);        // [undefined, undefined, undefined, undefined, undefined]
// Note: fixedLengthArray has undefined values, not empty slots
// This is often more useful since methods like .map() will work on it.
// ⚠️ Array.from() lets you iterate immediately (unlike sparse arrays)


// ✅ Fill an Array with Default Values
// Using .fill()

const filledArray = new Array(3).fill(0);
console.log(filledArray); // [0, 0, 0]
// .fill(value) fills all slots with the specified value
// 📌 Fills all elements with the same value
// ⚠️ If you fill with an object, all items reference the same object

/*
🧠 When to Use What?

| Method                             | Creates                     | Best For                             |
| ---------------------------------- | --------------------------- | ------------------------------------ |
| `new Array(n)`                     | empty slots                 | reserving memory / simple fixed size |
| `Array.from({length:n})`           | actual values (`undefined`) | mapping / iteration                  |
| `new Array(n).fill(x)`             | filled array                | default values                       |
| `Array.from({length:n}, (_,i)=>i)` | sequence                    | generating numbers                   |
*/


// 🎯 Example: Create Sequence 0-4

const seq = Array.from({ length: 5 }, (_, i) => i);
console.log(seq); // [0, 1, 2, 3, 4]


/*
✅ Summary

| Task                        | Best Method                 |
| --------------------------- | --------------------------- |
| Get length                  | `.length`                   |
| Sparse array                | `new Array(n)`              |
| Array with undefined values | `Array.from({ length: n })` |
| Array with default value    | `.fill(value)`              |
| Array with sequence         | `Array.from({length:n},(_,i)=>i)` |
*/
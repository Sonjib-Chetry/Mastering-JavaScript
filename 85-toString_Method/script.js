
// ✅ What Is the toString() Method in JavaScript?

// The toString() method is a built-in JavaScript method used to convert a value into its string (text) representation.
// It works on numbers, booleans, arrays, objects, and many other data types.

// 🔹 Basic Example

const num = 10;
console.log(num.toString()); // "10"

// Here, the number 10 is converted to the string "10".


// 🧠 Optional Parameter: Radix (Base)

// toString() can accept a number (from 2 to 36) that tells JavaScript which number base to use.

const num1 = 10;

console.log(num1.toString(2));  // "1010"  (Binary)
console.log(num1.toString(8));  // "12"    (Octal)
console.log(num1.toString(16)); // "a"     (Hexadecimal)

// If you don't pass a radix, it defaults to 10 (decimal).


// 🟦 Using toString() With Arrays

// Arrays have a custom toString() behavior.
// It converts each element to a string and joins them with commas.

const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"

// Equivalent to arr.join(",").


// 🟥 Using toString() With Objects

// Objects do not automatically convert their properties to a readable string.

const person = {
  name: "John",
  age: 30,
  isStudent: true
};

console.log(person.toString()); // "[object Object]"

// This is the default Object string form.
// To get readable output, use:

console.log(JSON.stringify(person)); 
// {"name":"John","age":30,"isStudent":true}



// ✨ Custom toString() for Objects

// Objects can have their own toString() method:

const person1 = {
  name: "John",
  age: 30,
  toString() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
};

console.log(person1.toString());
// "Name: John, Age: 30"


/*
📌 Summary

| Data Type       | Result of `toString()`                            |
| --------------- | ------------------------------------------------- |
| Number          | Converts number → string                          |
| Number w/ radix | Converts number → base 2–36 string                |
| Boolean         | `"true"` or `"false"`                             |
| Array           | Joins elements with commas                        |
| Object          | Default → `"[object Object]"` (unless customized) |
| Null/Undefined  | Throws TypeError (cannot call method on null/undefined) |
*/
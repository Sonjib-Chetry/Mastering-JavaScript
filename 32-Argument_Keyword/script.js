
//🔹 What is arguments in JavaScript?
// The arguments keyword is an array-like object available inside non-arrow functions, 
// which holds all the arguments passed to the function.

// It allows you to access all passed values, even if the function doesn't explicitly declare them as parameters.

// ✅ Basic Usage

function showArguments() {
  console.log(arguments);
}

showArguments('apple', 'banana', 42);

//Output: [Arguments] { '0': 'apple', '1': 'banana', '2': 42 }

// Here:
// arguments[0] → 'apple'
// arguments[1] → 'banana'
// arguments.length → 3

/* 
🔍 Key Properties
| Property           | Description                                    |
| ------------------ | ---------------------------------------------- |
| `arguments.length` | Total number of arguments passed               |
| `arguments[index]` | Access the argument by index                   |
| `arguments.callee` | Refers to the function itself (**deprecated**) |


🔸 Important Points
arguments is not a real array, but it’s array-like.
You cannot use array methods like .map(), .forEach(), etc. directly.
Arrow functions do not have their own arguments object.
*/


//✅ Convert arguments to Real Array

function sumAll() {
  const argsArray = Array.from(arguments); // or [...arguments] in modern JS
  return argsArray.reduce((acc, val) => acc + val, 0);
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10


//✅ Use Case: Variable Number of Arguments

function greetAll() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(`Hello, ${arguments[i]}!`);
  }
}

greetAll('Alice', 'Bob', 'Charlie');

//Output:
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!

// ❌ Not Available in Arrow Functions
/*
const showArgs1 = () => {
  console.log(arguments);
}

showArgs1('a', 'b');
*/
// ❗ Error:
// ReferenceError: arguments is not defined

//✅ Solution: Use rest parameter instead.

const showArgs2 = (...args) => {
  console.log(args);
}

showArgs2('a', 'b'); // ['a', 'b']


//✅ Advanced Use Cases

// 1. Create Polyfill-Like Function

function customConcat(separator) {
  let result = '';
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i];
    if (i < arguments.length - 1) result += separator;
  }
  return result;
}

console.log(customConcat('-', 'A', 'B', 'C')); // "A-B-C"


//2. Using arguments.callee (Deprecated)

const factorial1 = function(n) {
  if (n <= 1) return 1;
  return n * arguments.callee(n - 1);
}

console.log(factorial1(4)); // 24

/*
Calling factorial(4) works like this:
factorial(4)
=> 4 * factorial(3)
=> 4 * (3 * factorial(2))
=> 4 * (3 * (2 * factorial(1)))
=> 4 * (3 * (2 * 1))
=> 24
*/

//❌ arguments.callee is deprecated in strict mode and not recommended. Prefer named function expressions.

function factorial2(n) {
  return n <= 1 ? 1 : n * factorial2(n - 1);
}


/*
✅ Comparing arguments vs rest parameters
| Feature               | `arguments`       | `...rest`     |
| --------------------- | ----------------- | ------------- |
| Available in          | Regular functions | All functions |
| Type                  | Array-like        | Real Array    |
| Can use array methods | ❌ No              | ✅ Yes         |
| Read-only             | No                | No            |
| Arrow functions       | ❌ Not available   | ✅ Available   |
*/

//✅ Rest parameter is a modern, preferred alternative:

function sumAll(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sumAll(10, 20, 30)); // 60

//✅ Use in Higher-Order Functions

function logger() {
  const args = Array.from(arguments);
  args.forEach((arg, i) => {
    console.log(`Arg[${i}]:`, arg);
  });
}

logger('Hello', 123, { a: 1 }, [4, 5]);


/*
🧠 Summary
| Feature                   | Description                            |
| ------------------------- | -------------------------------------- |
| `arguments`               | Array-like object of all function args |
| Only in regular functions | Not available in arrow functions       |
| Can't use array methods   | Use `Array.from()` to convert          |
| Alternative               | Use `...rest` in modern JS             |
| Deprecated usage          | `arguments.callee`                     |
*/

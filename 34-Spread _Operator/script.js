

// Spread Operator (...) in JavaScript

// The spread operator ... is a feature in ES6 (ES2015) 
// that allows you to expand iterable elements (like arrays, strings, or objects) into individual elements.

//The spread operator (...) in JavaScript is a powerful feature introduced in ES6 (ECMAScript 2015). 
// It allows iterable data types like arrays, strings, objects, and function arguments to be expanded into individual elements.


// 🔸 1. Spread in Arrays
// ✅ Example 1: Merging Arrays

const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]


//✅ Example 2: Add custom values

const merged2 = [...a, ...b, 5, 6];
console.log(merged2); // [1, 2, 3, 4, 5, 6]


//✅ Alternative: Without spread

const merged1 = a.concat(b);
console.log(merged1); // [1, 2, 3, 4]


// ✅ Example 3: Find max number in an array

const nums = [10, 5, 8];
const max = Math.max(...nums);
console.log(max); // 10


//✅ Example 4: Copying an array (shallow copy)

const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3]
console.log(copy);     // [1, 2, 3, 4]


// 🔸 2. Spread in Objects
// ✅ Example 1: Merge Objects

const c = { x: 1 };
const d = { y: 2 };
const combined = { ...c, ...d };
console.log(combined); // { x: 1, y: 2 }


//✅ Example 2: Add new property while merging

const combined1 = { ...c, ...d, z: 3 };
console.log(combined1); // { x: 1, y: 2, z: 3 }


//✅ Example 3: Property Overriding

const obj1 = { name: "John" };
const obj2 = { name: "Jane", age: 30 };
const result = { ...obj1, ...obj2 };
console.log(result); // { name: 'Jane', age: 30 }

//If multiple objects have the same key, the last one overrides the previous ones.


// ✅ Example 4: Clone object

const user = { name: 'Sonjib', age: 30 };
const clone = { ...user };
console.log(clone); // { name: 'Sonjib', age: 30 }


//🔸 3. Spread in Function Arguments
// ✅ Example 1: Pass elements of an array as arguments

function sum(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3, 4];  //The 4 (index 3) is passed, but the function has no parameter to receive it, so it's simply ignored.
console.log(sum(...numbers)); // 6


//✅ Example 2: Use with arguments and ... together

function sum1() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sum1(2, 2, 6));       // 10
console.log(sum1(...merged));     // 10


//🔸 4. Advanced Use Cases
// ✅ Example 1: Spread with strings

const str = "Hello";
const chars = [...str];
console.log(chars); // ['H', 'e', 'l', 'l', 'o']


//✅ Example 2: Conditional spreading (useful in React)

const show = true;
const props = {
  id: 1,
  ...(show && { visible: true }),
};
console.log(props); // { id: 1, visible: true }

//If show is true, the expression returns { visible: true }.
// If show is false, it returns false.

// ...{ visible: true }  // ✅ spreads visible: true into the object
// ...false              // ❌ does nothing (spreading a falsy value is ignored)


//✅ Example 3: Deep cloning (⚠️ not natively supported by spread)

const obj = { a: 1, nested: { b: 2 } };
const shallow = { ...obj };
shallow.nested.b = 99;
console.log(obj); // { a: 1, nested: { b: 99 } }

//Use structuredClone(obj) or libraries like Lodash's cloneDeep for deep copy.


//❌ Limitations of Spread

// Shallow copy only: Nested objects/arrays are still referenced.
// Cannot spread non-iterables like null, undefined.

// 🔍 What is a shallow copy?
// A shallow copy creates a new object/array, but only copies top-level properties.
// If a property is a primitive (like number, string, boolean), it's copied by value ✅
// If a property is a reference type (like object or array), it’s copied by reference ❗
// That means nested objects/arrays are not truly copied, they still point to the same memory as in the original.

/*
✅ Summary Table
| Feature            | Spread Support |
| ------------------ | -------------- |
| Array merge/copy   | ✅              |
| Object merge/copy  | ✅              |
| Function arguments | ✅              |
| Strings to arrays  | ✅              |
| Shallow copy       | ✅              |
| Deep copy          | ❌              |
*/


// What Is a String Object, and How Does It Differ from a String Primitive?
// In JavaScript, you’ve already been working with string primitives — plain text values written in quotes:

const greeting = "Hello, World!";

// But JavaScript also has something called a String object. While both represent text, 
// they are different under the hood.

// ✅ String Primitive
// A string primitive is a simple, immutable (unchangeable) text value.

// ✅ String Object
// A String object is created using the String constructor and wraps the string primitive inside an object:

const greetingObject = new String("Hello, World!");

console.log(typeof greetingObject); // "object"

// When you check its type, JavaScript says it's an object, not a string primitive.


// 📌 Why can string primitives use methods like .length or .slice()?
// Even though a primitive is not an object, JavaScript automatically and temporarily wraps string primitives in a String object whenever you access properties or methods on them.

// Example:

const word = "Hello";
console.log(word.length); // 5

// Behind the scenes, JavaScript does this:
// Converts primitive "Hello" → a temporary String object
// Calls .length
// Discards the temporary object

// This is why you can use string methods (like repeat(), slice(), concat()) on primitives.

/*
⚙️ Key Differences

| Feature     | String Primitive | String Object        |
| ----------- | ---------------- | -------------------- |
| Created as  | `"text"`         | `new String("text")` |
| Type        | `"string"`       | `"object"`           |
| Memory      | More efficient   | Less efficient       |
| Usage       | Common           | Rare                 |
| Performance | Faster           | Slower               |


💡 When Should You Use Which?
You will almost always use string primitives in real code because they are faster, lighter, and simpler.
String objects exist for historical and advanced use cases, but they are rarely necessary in modern JavaScript.

🧠 Summary
String primitives = simple text values.
String objects = wrapper objects around string values.
JavaScript temporarily converts primitives to objects to allow method usage.
Prefer string primitives for everyday coding (better performance and simpler).
*/



// What Is the Number Constructor, and How Does It Work for Type Coercion?
// In JavaScript, the Number() constructor can be used in two different ways — as a constructor 
// to create a Number object, or as a function to convert values into primitive numbers.

// ✅ Using Number() as a Constructor
// When used with the new keyword, it creates a Number object:

const myNum = new Number("34");
console.log(typeof myNum); // "object"

// Even though "34" is a string, calling new Number() wraps it in a Number object, 
// not a primitive number. Number objects have extra methods and properties 
// (like isNaN and toFixed()), but in practice you rarely create number objects — they are less efficient.

// ✅ Using Number() as a Function (Type Conversion)
// Most of the time, you use Number() without new to convert values to a number:

const myNum1 = Number("100");
console.log(myNum1); // 100
console.log(typeof myNum1); // "number"

// This is useful when converting user input (often strings) into numbers before calculations.

/*
📌 Conversion Rules (Type Coercion)

| Input Type          | Example             | Result |
| ------------------- | ------------------- | ------ |
| Empty string        | `Number("")`        | `0`    |
| Valid number string | `Number("45")`      | `45`   |
| Invalid string      | `Number("abc")`     | `NaN`  |
| `true`              | `Number(true)`      | `1`    |
| `false`             | `Number(false)`     | `0`    |
| `null`              | `Number(null)`      | `0`    |
| `undefined`         | `Number(undefined)` | `NaN`  |


✅ Arrays Conversion

| Input              | Result | Explanation                    |
| ------------------ | ------ | ------------------------------ |
| `Number([])`       | `0`    | Empty becomes 0                |
| `Number([7])`      | `7`    | Single value allowed           |
| `Number([7, 36])`  | `NaN`  | Multiple values cannot convert |
| `Number(["text"])` | `NaN`  | Non-numeric string = NaN       |
*/

// ✅ Objects Always Convert to NaN

Number({});        // NaN
Number({key: 1});  // NaN

// Objects don't convert cleanly to a number, so result = NaN.


// 🧠 Key Takeaways
// new Number(value) → creates a Number object (not commonly used)
// Number(value) → converts value to a primitive number (most common use)
// Useful for converting user input (strings) into numbers
// Some values convert predictably (true → 1, null → 0), others give NaN (undefined, invalid strings, most objects)

// 🎯 Final Tip
// Always prefer Number(value) for type conversion.
// Avoid new Number() unless you specifically need a Number object (rare cases).
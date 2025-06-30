
// console.log() is a method of the console object in JavaScript.
// It is used to print output to the browser's console.
// Mainly used for debugging, checking values, and logging messages during development.

console.log('Hello World !');
console.log(45 + 7 - 8);  //remember bodmas rule not applicable in js
/*
console.log("Hello, world!")     // Hello, world!
console.log(42)                  // 42
console.log(true)                // true
console.log([1, 2, 3])           // [1, 2, 3]
console.log({name: "John"})      // {name: "John"}
console.log("Age:", 25)          // Age: 25
*/


// We can check data type in JS with a typeof operator
// Operators are built-in JavaScript syntax constructs used to perform operations.
// typeof is a unary operator (it takes one operand) and returns a string indicating the type of the unevaluated operand.

/*
| Type      | Example                | Result        |
| --------- | ---------------------- | ------------- |
| Number    | `typeof 123`           | `"number"`    |
| String    | `typeof "abc"`         | `"string"`    |
| Boolean   | `typeof true`          | `"boolean"`   |
| Undefined | `typeof undefined`     | `"undefined"` |
| Null      | `typeof null`          | `"object"`    |
| Object    | `typeof {}`            | `"object"`    |
| Function  | `typeof function() {}` | `"function"`  |
*/




// Data type in JS-------------------------------------------

// 1 Primitive data type
// 2 Non Primitive


// There are 7 Primitive data type



// 1: Number--------

// Example :- 23 or -23 or 2.3
// number to string:- 100 + "a"  or 'sonjib' + 100

console.log(typeof 23, typeof -23, typeof 2.5);
console.log(typeof (100 + ""), typeof (100 + "sonjib"), typeof ("sonjib" + 100));



// 2: String------

// Example :-  `Helloo` or "Helloo"  or 'Helloo'  or '1234'
// Double quote "" and single quote '' does't support multiple line of string, we need to use backtick `` 
// --for multiple line of string or where Double quote and single quote are used inside the line
// \n represent new line in JS

// parseInt() is a built-in global function in JavaScript. It parses a string and returns an integer.
parseInt("123")        // 123
parseInt("123abc")     // 123 (parses until non-digit)
parseInt("abc123")     // NaN (starts with non-digit)
parseInt("11", 2)      // 3   (binary to decimal)
parseInt("0xF")        // 15  (hex to decimal)
parseInt("08")         // 8   (in ES5+, treated as decimal)


// string to number:-  +'100' or  -"100"  or  parseInt('100sonjib')

console.log(typeof (+'100'), typeof (-"100"), typeof (parseInt('100sonjib')));



// 3: Boolean--------

// Example:- true or false
// true=1 false=0

console.log(typeof true, typeof false);



// 4: Undefined------

// auto inserted by JS if the variable is not defined
let variable

console.log(typeof variable);


// 5: Null-----

// typeof null in JS is object due to bug in its initial days
let data = null;

console.log(data);        // null
console.log(typeof data); // "object" ❌ (misleading)


// 6: Bigint

// BigInt is a primitive data type in JavaScript.
// It allows you to work with integers beyond the safe limit of the Number type (2^53 - 1).
// Introduced in ES2020 to handle very large integers.

//You can create a BigInt in two ways:
const big1 = 1234567890123456789012345678901234567890n; // with 'n' at the end
const big2 = BigInt("1234567890123456789012345678901234567890"); // using constructor


// Example:

const regularNum = 9007199254740991;       // Max safe integer in JS
console.log(regularNum + 1);               // 9007199254740992 ✅
console.log(regularNum + 2);               // 9007199254740992 ❌ Precision issue

const big = 9007199254740993n;
console.log(big + 2n);                     // 9007199254740995n ✅ Accurate


// 7: Symbol----we will learn more about this later





////Variables in JS------------------------------------

// A variable in JavaScript is a named container that stores values. 
// --Variables can store any type of JavaScript value, including numbers, strings, or objects
// variable name can't be start with digit like (0 to 9) e.g. 1name, 0age, 
// variable name can contain only two special character _ (underscore) and $ (dollar)
// variable name can also be written in other language letters like पहला_नाम


let username = 'Sonjib_Chetry'  //type string

// let userIntro = 'My name is Sonjib Chetry'  //type string

let age = 32  //type number

username = 'Sonex_Karki' //overwrite variable

let userIntro = 'My name is ' + username + '. I am ' + age + ' years old' //type string

let rollNo = 102  //type number

let isMale = true  //type boolean

let isFemale = false  //type boolean

let qualification  //type undefined

let DOB = null  //type object




const hoursInDay = 24  //const variable value can't be overwrite later (except a variable.key value inside a object) 
// and value(initializer) is mandatory

// Example:
/*
const age = 30;
age = 31; // TypeError: Assignment to constant variable
*/
//However, if the value is an object or array, the contents can still be changed:
/*
const person = { name: "John" };
person.name = "Doe";     // Allowed
// person = {}            // Not allowed

const numbers = [1, 2, 3];
numbers.push(4);         // Allowed
// numbers = [4, 5];      // Not allowed
*/



var school = 'Delhi_University'

//  if let & const variable put inside { const abc = 123 } or { let 123 = 'abc' } than it can't be accessed outside block
//  --therefore they are known as block scope. Const can't be used in console.log before variable declaration
// --and result will be error
//  var can be access out {} therefore known as function scope. Let & var can be used in console.log before variable declaration
// --but result will be undefined



// Some variable naming type----

// Camel Case :- firstName  or lastName  (most used case)
// Snake Case:- first_name or last_name
// Kabab Case:- first-name or last-name
// Pascal Case:- FirstName or LastName  (2nd recommended case)
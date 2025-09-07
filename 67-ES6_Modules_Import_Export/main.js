

//ES6 Modules in JavaScript — import and export Explained in Detail
// ES6 introduced modules to JavaScript, which allow you to split your code into reusable 
// files. Each file can export functions, objects, or values, and import them where needed. 
// This promotes cleaner, more maintainable, and modular code.


//What is a Module?
//A module is simply a JavaScript file. When we use export and import in a file, it becomes a module.


//export — Sharing Code from a File
// You use export to make variables, functions, or classes available outside the file.
// There are two types of exports:

//1. Named Export
// You can export multiple things from a file.

// mathUtils.js
// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;


//2. Default Export
// You can export only one default per file.

// greet.js
// export default function greet(name) {
//   return `Hello, ${name}!`;
// }

//You can even export a class or object by default:

// config.js
// const config = { theme: "dark", lang: "en" };
// export default config;




//import — Bringing Code Into a File
// You use import to bring in code from other modules.

//1. Importing Named Exports
// You must use curly braces and exact names:

// main.js
import { add, subtract } from './mathUtils.js';
console.log(add(5, 3));       // 8
console.log(subtract(5, 3));  // 2


//You can also rename while importing:
import { add as addition } from './mathUtils.js';
console.log(addition(2, 3));  // 5


//2. Importing Default Export
// No curly braces, and you can name it anything:

// main.js
import greet from './greet.js';
console.log(greet("Sonjib"));  // "Hello, Sonjib!"

//3. Mixed Import (default + named)
// import greet, { add, subtract } from './utils.js';

//4. Import Everything as Object
import * as math from './mathUtils.js';
console.log(math.add(2, 3));       // 5
console.log(math.subtract(5, 2));  // 3


//Important Notes
// You must run code using a module-aware environment:
// Use <script type="module"> in the browser.

// <!-- For browser -->
// <script type="module" src="main.js"></script>



//Setting <script type="module"> in your HTML does more than just enable 
// import/export syntax. It changes the behavior of your script in several 
// important ways, making it behave like a modern JavaScript module.


//1. Enables import and export Syntax
// This is the most obvious reason to use it.


//2. Modules are Deferred by Default
// When you use type="module", the script loads asynchronously and executes 
// after the HTML is parsed, just like using the defer attribute.
//You don’t need to use defer manually.

//3. Module Scripts are Strict Mode by Default
// All modules automatically run in strict mode:
//No need to write "use strict" manually.

//4. Module Scope is Private
// Variables declared in a module do not leak to the global scope:
const message = "Hello"; // This won't be accessible globally
// If you log window.message, it will be undefined.

//5. Supports Top-Level await
// In regular scripts, you can’t use await outside of async functions.
// But in modules, you can use it at the top level:
// works only inside type="module"
const data = await fetch('https://dummyjson.com/users').then(res => res.json());
console.log(data);
//Very useful for modern apps fetching data before rendering.

//7. Each Module is Loaded Only Once
// Modules are singleton – if you import the same module multiple times, 
// it only runs once and returns the same instance:

//8. Modules Can Import from Other Domains (if CORS is enabled)
// You can import JS modules from external URLs if the server allows it:
// import { something } from "https://cdn.example.com/lib.js";






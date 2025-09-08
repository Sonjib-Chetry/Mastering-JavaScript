
// 1. What is this?

// this is a special keyword that automatically gets assigned when a function is executed.
// It refers to the object that is calling the function.
// But its value depends on how the function is called (not where it’s defined).



/*
How this Works in Different Contexts

| Situation                          | What `this` refers to                     |
| ---------------------------------- | ----------------------------------------- |
| In a method                        | The object the method is called on        |
| Alone / in a function (non-strict) | The global object (`window` in browsers)  |
| In strict mode                     | `undefined`                               |
| In a constructor                   | The newly created object                  |
| In an event handler                | The DOM element that triggered the event  |
| With `call`, `apply`, `bind`       | Explicitly set to a value                 |
| In an arrow function               | `this` is inherited from the parent scope |
*/

//Examples:

// (a) Global Context

console.log(this);  
// Browser: Window object
// Node.js: {}
// In strict mode: undefined

// In non-strict mode, this points to the global object (window in browser, global in Node).
// In strict mode, this is undefined.


// (b) Inside an Object Method

const user = {
  name: "Sonjib",
  greet() {
    console.log(this.name);  // 'this' refers to user
  }
};

user.greet();  // "Sonjib"
// Here, this refers to user because greet() is called as user.greet().



// (c) Function Alone

function show() {
  console.log(this);
}
show(); 
// Non-strict: window/global
// Strict: undefined
// If a function isn’t attached to an object, this goes to the global object (or undefined in strict mode).


// (d) Nested Functions

const user4 = {
  name: "Sonjib",
  greet() {
    function getAge() {
      console.log(this);  // global object (window in browser)
    }
      
    getAge()
    console.log(this.name);  // 'this' refers to user
  }
};

user4.greet();
// 👉 Inner functions lose the outer object context unless you explicitly bind them.



// (e) Using forEach with thisArg

const user5 = {
  name: "Sonjib",
  tag: ["a", "b", "c"],
  printTag() {
    this.tag.forEach(function(tag) {
      console.log(tag, this.name);   //work for object
      console.log(this);  //work global if this is not passed as second argument
    }, this) //work global if this is not passed as second argument
  }
};

user5.printTag();
// Here, we manually set the correct this.



//4. In arrow functions (no this binding):
// Arrow functions do not have their own this. They inherit it from the surrounding scope.

const user1 = {
  name: "Sonjib",
  greet: () => {
    console.log(this);  // works global
    console.log(this.name);  // works for object
  }
};

user1.greet();
// Use normal functions for object methods when you need this to point to the object.


// In an event listener:
const h1 = document.querySelector("h1")

h1.addEventListener("click", function() {
  console.log(this); // work for target // <h1> element
})

const body = document.querySelector("body")

body.addEventListener("click", () => {
  console.log(this);  // work global
})

// Normal function → this = element
// Arrow function → this = parent scope


//In Classes: we have discussed it on Classes lecture


// (h) With call, apply, bind
// You can manually control this.

function greet(age) {
  console.log(this.name, age);
}

const person = { name: "Sonjib" };

greet.call(person, 25);   // Sonjib 25
greet.apply(person, [30]); // Sonjib 30

const bound = greet.bind(person);
bound(40);  // Sonjib 40
// call and apply invoke the function immediately, while bind returns a new function with this bound to the specified object.


// 🔑 new Keyword in JavaScript
// 1. What is new?
// The new keyword is used to create an object from a constructor function.

// When you call a function with new:

// A new empty object {} is created.
// this is set to that object.
// The function body runs and assigns properties to this.
// The new object is returned automatically.


//Constructor Function Example

function User(name, age) {
  this.name = name;
  this.age = age;
}

const u1 = new User("Sonjib", 25);
console.log(u1); // { name: "Sonjib", age: 25 }


//What if you forget new?
function Person(name) {
  this.name = name;
}

const p = Person("Sonjib");  // ❌ ‘this’ refers to global object
console.log(p);  // undefined
console.log(name);  // "Sonjib" added to global scope (bad!)
//Never call constructor functions without new unless you’re using a factory function.
// ⚠️ Without new, this becomes global → polluting global scope.


// Return Behavior:
// If a constructor explicitly returns an object, that object replaces this.
// If it returns a primitive, it’s ignored.

function Test() {
  this.value = 10;
  return { value: 20 };
}
const t = new Test();
console.log(t.value); // 20
// Here, the returned object replaces this.


// new.target (advanced):
// Inside a function, you can check if it was called with new.

function Foo() {
  if (!new.target) {
    throw new Error("Use 'new' to call this function!");
  }
  this.value = 100;
}

const f = new Foo();  // works
Foo();  // ❌ error
// This prevents forgetting new when calling constructors.


// ✅ Summary
// this: context-dependent keyword → value depends on how a function is called.
// new: creates a new object from a constructor function and sets this to that new object.
// 🔹 What Are Classes in JavaScript?
// In JavaScript, classes are not a brand-new feature like in Java, Python, or C++.
// They are just syntactic sugar (a prettier way to write code) over the prototype-based inheritance system that has always existed in JavaScript.

// That means:
// Internally, classes still use functions as constructors.
// Instance methods are still stored on the class’s prototype.
// Objects created with a class are still linked to that prototype.

// 👉 So, under the hood, a class is just a constructor function + prototype methods.


// 🔹 Syntax of a Class

class Person {
  constructor(name, age) {
    this.name = name; // instance property
    this.age = age;
  }

  greet() { // instance method
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const p1 = new Person("Sonjib", 25);
p1.greet(); // Hi, I'm Sonjib and I'm 25 years old.


// Breakdown:

// class Person
// Declares the class (a blueprint for creating Person objects).

// constructor()
// A special method automatically called when new is used.

// Here, it initializes this.name and this.age.

// greet()
// This method is not copied into each object. Instead, it is placed on Person.prototype, 
// so all Person objects share one greet() function (saves memory).


// 🔹 Key Features of Classes
// 1. Constructor

// Called automatically when you do new ClassName().

// Used to initialize properties of the object.

class Car {
  constructor(make) {
    this.make = make;
  }
}

const c1 = new Car("Toyota");
console.log(c1);  // Car { make: 'Toyota' }


// Behind the scenes, this works like:

/*
function Car(make) {
  this.make = make;
}
*/

// 2. Instance Methods
// Methods you define in a class (but outside the constructor) are stored on the prototype.
// This means all objects share the same method, instead of creating a copy for each.

class Car1 {
  start() {
    console.log("Starting...");
  }
}

const myCar = new Car1();
myCar.start(); // Starting...

// Equivalent behind the scenes:
/*
function Car1() {}
Car1.prototype.start = function() {
  console.log("Starting...");
};
*/

// ✅ Summary so far:

// A class in JavaScript is just a constructor function + prototype methods, written in a cleaner way.
// constructor() initializes new objects.
// Instance methods (like greet, start) are added to the prototype, so they’re shared across all instances.


// Class version:
/*
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const p1 = new Person("Sonjib", 25);
p1.greet(); // Hi, I'm Sonjib and I'm 25 years old.
*/

// What happens internally:
/*
// Step 1: The class creates a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Step 2: The method greet() is put on the prototype
Person.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
};

// Step 3: When you use 'new Person()', JS creates a new object linked to Person.prototype
const p1 = new Person("Sonjib", 25);
p1.greet(); // "Hi, I'm Sonjib and I'm 25 years old."
*/
// 👉 So the class is just a cleaner way of writing the same constructor + prototype setup.


// ✅ Key Takeaways

// A class is really just:
// A constructor function (function Person(...) { ... }).
// Methods added to ClassName.prototype.
// Every object created with new ClassName() gets:
// Its own instance properties (from the constructor).
// Shared methods (from the prototype).
// That’s why classes are called syntactic sugar — they don’t add a new system, they just make prototypes easier to work with.
// 🔹 1. Constructor in JavaScript
// A constructor is a function used to create and initialize objects.
// By convention, constructor function names start with a capital letter.
// You use the new keyword to create an instance (object) from a constructor.

function Person(name, age) {
  this.name = name;
  this.age = age;

  // ❌ This method is created separately for every object
  this.greet = function () {
    console.log(`Hi, I'm ${this.name}`);
  };
}

const p1 = new Person("Sonjib", 25);
const p2 = new Person("Rahul", 30);

p1.greet(); // Hi, I'm Sonjib
p2.greet(); // Hi, I'm Rahul

// 👉 Problem: Each object (p1, p2) gets its own copy of greet(). That wastes memory if you create many objects.


// 🔹 2. Prototype in JavaScript
// Every function in JS (when used as a constructor) has a special property called prototype.
// The prototype is an object that stores shared methods and properties.
// All instances created with that constructor can access methods in the prototype.
// This avoids duplication.

function Person1(name, age) {
  this.name = name;
  this.age = age;
}

// ✅ Attach method to prototype (shared by all instances)
Person1.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
};

const p11 = new Person1("Sonjib", 25);
const p22 = new Person1("Rahul", 30);

p11.greet(); // Hi, I'm Sonjib
p22.greet(); // Hi, I'm Rahul

// 👉 Here, greet() exists only once in memory, and all objects share it through the prototype chain.


// 🔹 3. Constructor + Prototype in ES6 Class Syntax
// ES6 introduced the class keyword, which is just syntactic sugar for constructor + prototype.

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // methods are automatically added to prototype
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const p10 = new Person2("Sonex", 25);
const p20 = new Person2("Roshan", 30);

p10.greet(); // Hi, I'm Sonex
p20.greet(); // Hi, I'm Roshan

// 👉 Under the hood, Person2.prototype.greet is created.



// 🔹 4. Another Practical Example

function CreateUser(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// Shared methods
CreateUser.prototype.getBirthYear = function() {
  return new Date().getFullYear() - this.age;
};

//Don't confuse with the new keyword used before Date(), because it a syntax to get the current date in
//an object and getFullYear() as it prototype method to get the current year.

CreateUser.prototype.getFullName = function() {
  return this.firstName + " " + this.lastName;
};

const user1 = new CreateUser("Aman", "Mishra", 32);
const user2 = new CreateUser("Anurag", "Singh", 72);

console.log(user1.getBirthYear()); // e.g., 1993
console.log(user1.getFullName());  // Aman Mishra

// 👉 Both user1 and user2 share the same methods in CreateUser.prototype.


// 🔹 5. Key Differences
/*
| Feature                 | Constructor (inside function)               | Prototype                                     |
| ----------------------- | ------------------------------------------- | --------------------------------------------- |
| Where method is defined | Inside constructor                          | On prototype object                           |
| Memory usage            | Separate copy for each object               | Shared across all objects                     |
| Best practice           | ❌ Avoid defining methods inside constructor | ✅ Always attach reusable methods to prototype |
*/


// 🔹 6. Bonus: Prototype Chain
// When you call p1.greet():
// JavaScript looks for greet in p1.
// If not found, it checks Person1.prototype.
// If still not found, it checks Object.prototype.
// If not found anywhere → undefined.
// This is called the Prototype Chain.

// ✅ In short:
// Use constructor for properties.
// Use prototype for methods (to avoid duplication).
// class is just a cleaner way of doing constructor + prototype.


// 🔹 7. Using Object.create()
// Object.create(proto) creates a new object whose prototype is set to proto.
// This is a cleaner way to share methods without using constructor functions.

const userMethods = {
  getBirthYear() {
    return new Date().getFullYear() - this.age;
  },
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
};

function createUser(firstName, lastName, age) {
  // ✅ Object.create links new object to userMethods
  const user = Object.create(userMethods);
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  return user;
}

const u1 = createUser("Aman", "Mishra", 32);
const u2 = createUser("Anurag", "Singh", 72);

console.log(u1.getBirthYear()); // e.g., 1993
console.log(u2.getFullName());  // Anurag Singh

// 👉 Here:
// u1 and u2 don’t have their own copies of getBirthYear or getFullName.
// They inherit those methods from userMethods through the prototype chain.

/*
🔹 8. Comparing Approaches
| Approach             | How it works                                 | Pros                         | Cons                       |
| -------------------- | -------------------------------------------- | ---------------------------- | -------------------------- |
| Constructor function | Use `new` + function + `prototype`           | Classic, widely used         | Verbose for beginners      |
| Class (ES6)          | Syntactic sugar over constructor + prototype | Cleaner syntax               | May hide prototype concept |
| Object.create()      | Directly link object to a shared prototype   | Very simple, no `new` needed | Less common in modern code |
*/

// ✅ In short:
// That commented-out code was trying to attach methods outside the object factory.
// Using Object.create() makes it much cleaner and memory efficient.


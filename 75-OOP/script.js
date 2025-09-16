// 🔹 1. What is OOP?
// OOP (Object-Oriented Programming) is a paradigm where objects are the core building blocks.
// It focuses on organizing code around objects that encapsulate data and behavior.

// An object is a collection of:
// Properties (data/variables)
// Methods (functions/behavior)

// 👉 Real-world analogy:
// A Car object may have:
// Properties: color, model, speed
// Methods: start(), brake(), honk()


// 🔹 2. Ways to Create Objects in JavaScript

// ✅ Factory Function

function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hello, my name is ${name}. Age ${age}`);
    }
  };
}

const user1 = createUser("Sonjib", 25);
user1.greet(); // Hello, my name is Sonjib. Age 25

// ✔ Easy to create multiple objects.
// ❌ But methods are duplicated in memory for each object.


// ✅ Constructor Function
/*
function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}. Age ${this.age}`);
};

const user2 = new User("Sonex", 26);
user2.greet();
*/
// ✔ Efficient — methods live in prototype (shared).
// ✔ Can be instantiated with new.


// ✅ ES6 Class (Syntactic Sugar)

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I’m ${this.name}, ${this.age} years old`);
  }
}

const user3 = new User("Alex", 30);
user3.greet();

// ✔ Cleaner syntax, still uses prototypes under the hood.


// 🔹 3. Four Pillars of OOP

// ✅ Encapsulation (Data Hiding)

function createBankAccount(initialBalance) {
  let balance = initialBalance; // private variable

  return {
    deposit(amount) { balance += amount; },
    getBalance() { return balance; }
  };
}

const account = createBankAccount(1000);
account.deposit(500);
console.log(account.getBalance());  // 1500
console.log(account.balance);       // ❌ undefined

// Encapsulation keeps data private and exposes only necessary functionality.


// ✅ Abstraction (Hiding Implementation Details)

class Car {
  startEngine() {
    this.#injectFuel();
    this.#ignite();
    console.log("Car started");
  }

  #injectFuel() { console.log("Injecting fuel..."); }
  #ignite() { console.log("Igniting engine..."); }
}

const myCar = new Car();
myCar.startEngine();
// myCar.#injectFuel(); ❌ Error (private method)

// The user only knows about startEngine(), not the complex internals.


// ✅ Inheritance (Reusing Code)

class Animal {
  speak() { console.log("Animal speaks"); }
}

class Dog extends Animal {
  bark() { console.log("Dog barks"); }
}

const dog = new Dog();
dog.speak(); // inherited
dog.bark();  // own method

// Inheritance allows code reuse and establishes a relationship between classes.


// ✅ Polymorphism (Same Method, Different Behavior)

class Animal1 {
  speak() { console.log("Animal speaks"); }
}

class Dog1 extends Animal1 {
  speak() { console.log("Dog barks"); }
}

class Cat1 extends Animal1 {
  speak() { console.log("Cat meows"); }
}

const animals = [new Animal1(), new Dog1(), new Cat1()];
animals.forEach(a => a.speak());

// Output:
// Animal speaks
// Dog barks
// Cat meows

// Polymorphism allows methods to behave differently based on the object calling them.
// This enables flexibility and scalability in code design.


// 🔹 4. Advanced OOP Concepts in JavaScript

// ✅ Private & Public Fields

class Person {
  #ssn; // private field
  constructor(name, ssn) {
    this.name = name; // public
    this.#ssn = ssn;  // private
  }

  getSSN() {
    return `XXX-XX-${this.#ssn.slice(-4)}`;
  }
}

const p = new Person("Sonjib", "123-45-6789");
console.log(p.name);    // public → "Sonjib"
console.log(p.getSSN()); // "XXX-XX-6789"
// console.log(p.#ssn);    // ❌ Error (private)

// Private fields enhance encapsulation by restricting direct access.
// Public fields are accessible from outside the class.


// ✅ Static Methods & Properties

class MathUtils {
  static add(a, b) { return a + b; }
}

console.log(MathUtils.add(5, 10)); // 15
// const mu = new MathUtils(); mu.add(5, 10); ❌ Error (static method)

// Static methods belong to the class itself, not instances.
// Useful for utility functions.


// ✅ Getters & Setters

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() { return this.width * this.height; }
  set resize(factor) {
    this.width *= factor;
    this.height *= factor;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // 50
rect.resize = 2;
console.log(rect.area); // 200
// Getters and setters provide controlled access to properties.
// They can compute values or validate data on assignment.
// This enhances encapsulation and data integrity.


// ✅ Method Overriding & Super

class Parent {
  greet() { console.log("Hello from Parent"); }
}

class Child extends Parent {
  greet() {
    super.greet(); // call parent method
    console.log("Hello from Child");
  }
}

const c = new Child();
c.greet();
// Output:
// Hello from Parent
// Hello from Child
// Method overriding allows a subclass to provide a specific implementation of a method already defined in its superclass.
// The super keyword is used to call methods from the parent class.
// This enables polymorphism and code reuse.


// 🔹 5. Why Use OOP?
// Organizes code → easy to read & maintain
// Reuse via inheritance
// Data security via encapsulation
// Flexibility via polymorphism

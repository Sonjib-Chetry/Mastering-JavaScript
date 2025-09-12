// 🔹 What Is Class Inheritance?
// Inheritance allows a child class (subclass) to reuse properties and methods from a parent class (superclass).
// Parent class (superclass): The base blueprint (e.g., Vehicle).
// Child class (subclass): A more specific version that extends the parent (e.g., Car).

// 👉 This creates an “is-a” relationship.
// A Car is a Vehicle.
// A Truck is a Vehicle.

// 🔹 Syntax: extends Keyword

class Parent { 
  // parent properties & methods
}

class Child extends Parent {
  // child properties & methods
}


// 🔹 Example 1: Inheriting Properties & Methods

class Vehicle1 {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  start() {
    console.log(`${this.brand} is starting...`);
  }
}

class Car1 extends Vehicle1 {
  honk() {
    console.log("Honk! Honk!");
  }
}

let myCar1 = new Car1("Tesla", 2024);
console.log(myCar1.brand); // Tesla
console.log(myCar1.year);  // 2024
myCar1.start();            // Tesla is starting...
myCar1.honk();             // Honk! Honk!

// ✔ Car doesn’t define a constructor, but it inherits from Vehicle.



// 🔹 Example 2: Extending with super()
// When the child class needs extra properties, it must:
// Call the parent’s constructor using super().
// Then add its own properties.

class Vehicle2 {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
}

class Car2 extends Vehicle2 {
  constructor(brand, year, numDoors) {
    super(brand, year); // call parent constructor
    this.numDoors = numDoors; // new property
  }
}

let myCar2 = new Car2("Toyota", 2020, 4);
console.log(myCar2.brand);     // Toyota
console.log(myCar2.year);      // 2020
console.log(myCar2.numDoors);  // 4

// ✔ super(brand, year) ensures that properties from Vehicle are initialized before adding numDoors.


// 🔹 Example 3: Method Overriding
// A child class can override methods from the parent.
/*
class Vehicle {
  start() {
    console.log("Vehicle is starting...");
  }
}

class Car extends Vehicle {
  start() {
    console.log("Car is starting with a push button!");
  }
}

let myCar = new Car();
myCar.start(); // Car is starting with a push button!
*/

// ✔ If you still want to use the parent’s method inside the override, you can call it with super.methodName().
/*
class Car extends Vehicle {
  start() {
    super.start(); // call Vehicle’s start()
    console.log("...but with modern Car features!");
  }
}

let myCar = new Car();
myCar.start();
// Vehicle is starting...
// ...but with modern Car features!
*/


// 🔹 Example 4: Multiple Child Classes
// One parent can have multiple children.
/*
class Vehicle {
  drive() {
    console.log("Driving...");
  }
}

class Car extends Vehicle {
  honk() {
    console.log("Car says Honk!");
  }
}

class Bike extends Vehicle {
  ringBell() {
    console.log("Bike says Ring Ring!");
  }
}

const car = new Car();
car.drive();   // Driving...
car.honk();    // Car says Honk!

const bike = new Bike();
bike.drive();  // Driving...
bike.ringBell(); // Bike says Ring Ring!
*/

// ✔ Both Car and Bike inherit the drive() method from Vehicle.


// 🔹 Advantages of Inheritance
// Code Reusability → Reuse parent logic in multiple child classes.
// Extensibility → Add new features in subclasses without touching parent.
// Modularity → Split complex code into layers of hierarchy.
// Maintainability → Easier to understand and update code.


// ✅ Summary:
// Use extends to make a child inherit from a parent.
// Use super() inside constructors to call the parent’s constructor.
// Child classes can add new properties/methods or override existing ones.
// Inheritance helps keep your code DRY, modular, and extensible.
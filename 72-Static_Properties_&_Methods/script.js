
// What are Static Properties and Methods?
// Static methods and properties belong to the class itself, not to individual objects (instances) created from the class.
// They are accessed using the class name, not through an object instance.
// Think of them as utility functions or counters that make sense at the class level, rather than being tied to one specific object.


// Static Methods

// A static method is defined using the static keyword.
// It can be called directly on the class without creating an object.


class MyClass {
  static sayHello() {
    console.log("Hello from the class!");
  }
}

MyClass.sayHello(); // ✅ Works
// new MyClass().sayHello(); ❌ Error
// Static methods are often used for utility functions that don't require instance data.
// So, static methods are useful when the logic applies to the whole class instead of a single object.

// Example: Movie Comparison

class Movie {
  constructor(title, rating) {
    this.title = title;
    this.rating = rating;
  }

  static compareMovies(movieA, movieB) {
    if (movieA.rating > movieB.rating) {
      console.log(`${movieA.title} has a higher rating.`);
    } else if (movieA.rating < movieB.rating) {
      console.log(`${movieB.title} has a higher rating.`);
    } else {
      console.log("These movies have the same rating.");
    }
  }
}

let movie1 = new Movie("Inception", 95);
let movie2 = new Movie("Titanic", 89);

Movie.compareMovies(movie1, movie2); 
//Output: Inception has a higher rating.

// Here:
// compareMovies doesn’t belong to a single movie.
// It compares two instances, so it makes sense as a class-level utility.



//Static Property Syntax
class Counter {
  static count = 0;

  static increment() {
    Counter.count++;
  }

  static getCount() {
    return Counter.count;
  }
}

Counter.increment();
Counter.increment();
console.log(Counter.getCount()); // 2
// Static properties hold class-level state, shared across all uses.


// Factory Methods with Static
// Static methods can also be factory methods – alternative ways to create objects.

class Pizza1 {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }

  static createMargherita() {
    return new this("Margherita", 6.99);
  }
}

let myPizza = Pizza1.createMargherita();
console.log(myPizza); // Pizza { type: "Margherita", price: 6.99 }
// Here, createMargherita is a shortcut for making a predefined pizza.



// Static Properties
// Static properties belong to the class itself.

class Pizza2 {
  static numberOfPizzasSold = 0;

  constructor(type) {
    this.type = type;
    Pizza2.numberOfPizzasSold++;
  }
}

let p1 = new Pizza2("Margherita");
let p2 = new Pizza2("Neapolitan");

console.log(Pizza2.numberOfPizzasSold); // 2
// Every time a Pizza object is created, the class-level counter increases.
// This property does not belong to any single pizza – it belongs to the Pizza class as a whole.


// Key Points to Remember
// Static methods/properties belong to the class, not objects.
// They are accessed via ClassName.method() or ClassName.property.
// Use them for:
// Utility/helper functions (compareMovies, parseData, etc.)
// Factory methods (createMargherita, createDefaultUser)
// Shared counters/statistics (numberOfPizzasSold)



// 🔹 Static Methods with Inheritance
// When a class extends another class:
// Static methods are inherited.
// The child class can call them directly using its own name.

class Animal1 {
  static generalInfo() {
    console.log("Animals are living beings.");
  }
}

class Dog extends Animal1 {}

Dog.generalInfo(); // ✅ Output: Animals are living beings.
// Here:
// generalInfo is defined in Animal.
// But Dog (child class) inherits it because static methods are passed down.


class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }

  static createGuest() {
    return new User("Guest");
  }
}

const u1 = new User("Sonjib");
u1.greet();                // ✅ Instance method
const guest = User.createGuest(); // ✅ Static method
guest.greet();             // Hello, I'm Guest




// Static Members with Inheritance
class Parent {
  static whoAmI() {
    console.log("I'm the Parent class");
  }
}

class Child extends Parent {}

Child.whoAmI(); // ✅ I'm the Parent class (inherited)



//Real Example
class MathTools {
  static PI = 3.1415;

  static circleArea(radius) {
    return MathTools.PI * radius * radius;
  }
}

console.log(MathTools.circleArea(5)); // 78.5375



// 🔹 Overriding Static Methods
// A child class can also override a static method.

class Animal2 {
  static sound() {
    console.log("Some generic animal sound");
  }
}

class Dog1 extends Animal2 {
  static sound() {
    console.log("Bark!");
  }
}

Animal2.sound(); // Output: Some generic animal sound
Dog1.sound();    // Output: Bark!
// Both classes have their own static version of sound.


// 🔹 Using super in Static Methods
// Just like instance methods, static methods can use super to call the parent’s static method.

class Animal3 {
  static category() {
    return "General Animal";
  }
}

class Dog2 extends Animal3 {
  static category() {
    return super.category() + " → Dog";
  }
}

console.log(Dog2.category()); // Output: General Animal → Dog
// Here:
// Dog.category() first calls Animal.category() using super.
// Then adds its own extension.


// 🔹 Static Properties and Inheritance
// Static properties are also inherited.

class Vehicle {
  static wheels = 4;
}

class Car extends Vehicle {}

console.log(Car.wheels); // ✅ Output: 4

// But if you override them in the child, the child has its own property:

class Vehicle1 {
  static wheels = 4;
}

class Bike extends Vehicle1 {
  static wheels = 2;
}

console.log(Vehicle1.wheels); // 4
console.log(Bike.wheels);    // 2


// 🔹 Real-Life Example
// Imagine a payment system:

class Payment {
  static fees = 2; // flat processing fee
  static calculate(amount) {
    return amount + this.fees;
  }
}

class CreditCardPayment extends Payment {
  static fees = 5; // credit card has higher fee
}

console.log(Payment.calculate(100));       // 102
console.log(CreditCardPayment.calculate(100)); // 105
// Here:
// Both classes share the same static method calculate.
// But the property value changes depending on the class that calls it.


// ✅ Key Takeaways on Inheritance:
// Static methods & properties are inherited by child classes.
// They can be overridden in child classes.
// super lets you call the parent’s static methods from child static methods.
// The value of this inside a static method refers to the class that called it, not always the parent.


// Note: Static methods cannot access instance properties directly:
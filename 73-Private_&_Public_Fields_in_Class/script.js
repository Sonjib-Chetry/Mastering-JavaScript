// 1. What are Fields in Classes?
// In JavaScript, a field (or property) in a class is like a variable that belongs to an object created from that class.
// You can define them directly inside the class (since ES2022).
// There are two main types: public fields and private fields.

// 2. Public Fields
// Default type → If you don’t add #, the field is public.
// They can be accessed inside and outside the class.
// They can be modified freely.

class User {
  name = "Guest";  // Public field

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

const u = new User();
console.log(u.name);   // ✅ "Guest"
u.name = "Sonjib";     // ✅ Can modify
u.greet();             // ✅ Hello, Sonjib
// 👉 Key Point: Public fields are just like normal object properties.



// 3. Private Fields
// Defined with a # prefix.
// Accessible only inside the class where they’re defined.
// Attempting to access them outside → SyntaxError
// Useful for hiding internal data and protecting it from outside modification.

class BankAccount {
  #balance = 0;  // Private field

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("Sonjib", 1000);

console.log(account.owner);        // ✅ Sonjib
console.log(account.getBalance()); // ✅ 1000

// console.log(account.#balance);  // ❌ SyntaxError

// 👉 Key Point: Private fields enforce true encapsulation in JS.


// 4. Mixing Public & Private
// You can use both in the same class:

class Employee {
  name;      // public
  #salary;   // private

  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }

  getSalary() {
    return this.#salary;
  }
}

const emp = new Employee("Sonjib", 50000);
console.log(emp.name);        // ✅ public: Sonjib
console.log(emp.getSalary()); // ✅ access private via method
// console.log(emp.#salary);  // ❌ SyntaxError



// 5. Private Methods and Fields
// Not just fields — you can also have private methods with #.

class CreateUser {
  #age;
  #hi = "Hello World"; // private field

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#age = age;
  }

  getBirthYear() {
    console.log(this.#hi);              // ✅ Private field inside class
    console.log(this.#getFullName());   // ✅ Private method inside class
    return new Date().getFullYear() - this.#age;
  }

  #getFullName() {  // private method
    return this.firstName + " " + this.lastName;
  }
}

const user1 = new CreateUser("Aman", "Mishra", 32);
console.log(user1.getBirthYear());  // ✅ Works
// user1.#getFullName();             // ❌ SyntaxError
 
// 👉 This allows hiding implementation details (like helper functions).


// 6. Advanced Concepts

// a) Truly Private (Not Just Convention)
// Before #, developers used _propertyName (like _salary) as a convention, but that was not real privacy. 
// # makes it truly private at the language level.

class OldStyle {
  constructor() {
    this._salary = 50000; // Not really private
  }
}
const obj = new OldStyle();
console.log(obj._salary); // 😬 Accessible
// obj._salary = 60000;     // 😬 Can modify


// b) Encapsulation Benefits
// Prevents accidental overwrites
// Makes class safer to use
// Keeps internal logic hidden


// c) Static Private Fields
// You can combine static and #:

class Counter {
  static #count = 0;

  static increment() {
    this.#count++;
  }

  static getCount() {
    return this.#count;
  }
}

Counter.increment();
console.log(Counter.getCount()); // ✅ 1
// console.log(Counter.#count);  // ❌ Error
// 👉 Static private fields are shared across all instances but remain private to the class itself.


// d) Private Fields are Lexically Scoped
// Private fields are tied to the class definition, not just any object with the same shape.
// This means you can’t access a private field from another object, even if it has the same structure.
/*
class Test {
  #secret = "hidden";
  reveal() {
    return this.#secret;
  }
}

const obj = new Test();
const fake = { #secret: "hack" }; // ❌ Not allowed, syntax error
// console.log(obj.reveal()); // ✅ "hidden"
// console.log(fake.#secret); // ❌ SyntaxError
// 👉 You cannot “inject” a private field outside its class.
*/


// 7. Summary Table
/*
| Feature        | Public Field       | Private Field (`#`) |
| -------------- | ------------------ | ------------------- |
| Accessibility  | Everywhere         | Only inside class   |
| Security       | No protection      | True encapsulation  |
| Syntax         | `name = "value";`  | `#name = "value";`  |
| Outside Access | ✅ Allowed          | ❌ Not Allowed       |
| Use Case       | Configurable props | Sensitive data      |
| Modification   | ✅ Can modify      | ❌ Direct modify     |
| Methods        | Public methods     | Private methods     |

✅ So, public fields are for data you want openly accessible,
and private fields/methods are for internal details you want hidden & controlled.
*/
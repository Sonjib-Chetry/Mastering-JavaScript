// 🔹 What are Getters and Setters?
// Getters (get) → Special methods to read (access) a property.
// Setters (set) → Special methods to write (assign) a property.
// They look like properties when used but actually run functions behind the scenes.
// 👉 They are used in Encapsulation (OOP concept) to control how data is accessed/modified.

// 🔹 Why use them?
// Add logic while reading/writing.
// Hide internal/private fields (_ or # convention).
// Create computed (dynamic) properties.
// Prevent invalid values (validation).
// Make read-only or write-only properties.


// 🔹 Basic Example (Class)

class Person {
  constructor(name) {
    this._name = name; // internal property (convention: _name)
  }

  get name() {
    return this._name.toUpperCase();  // custom logic on read
  }

  set name(newName) {
    this._name = newName.trim();  // custom logic on write
  }
}

const p = new Person("  sonjib  ");
console.log(p.name);   // SONJIB (getter used)
p.name = "  chetry  "; // setter used
console.log(p.name);   // CHETRY

// ✔ Notice how you access them like properties (p.name), not as methods (p.name()).


// 🔹 Object Literal Example

const person = {
  _age: 25,

  get age() {
    return this._age;
  },

  set age(value) {
    if (value > 0) {
      this._age = value;
    } else {
      console.log("Age must be positive");
    }
  }
};

console.log(person.age);  // 25
person.age = -5;          // Age must be positive (validation check)
console.log(person.age);  // 25 (unchanged)


// 🔹 Computed Property Example

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }
}

const r = new Rectangle(10, 5);
console.log(r.area); // ✅ 50 (calculated dynamically)

// 👉 area is not stored in memory, it’s calculated only when you access it.


// 🔹 Getter-only (Read-only) or Setter-only (Write-only)

class Counter {
  #count = 0; // private field

  get value() {
    return this.#count; // read-only property
  }

  set increment(val) {
    if (val > 0) this.#count += val; // controlled write
  }
}

const c = new Counter();
c.increment = 5;  
console.log(c.value); // 5
c.increment = -2;     // ignored because condition failed
console.log(c.value); // 5


// 🔹 Advanced Use Case (Data Protection + Validation)

class BankAccount {
  #balance = 0;

  get balance() {
    return `₹${this.#balance}`; // formatted output
  }

  set deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    } else {
      console.log("Deposit must be positive!");
    }
  }
}

const acc = new BankAccount();
acc.deposit = 500;
console.log(acc.balance); // ₹500
acc.deposit = -200;       // Deposit must be positive!
console.log(acc.balance); // ₹500



// ✅ Key Points to Remember:
// get and set look like properties but behave like functions.
// Useful for encapsulation, validation, formatting, computed values.
// You can have only a getter (read-only) or only a setter (write-only).
// Use # for true private fields in modern JS.
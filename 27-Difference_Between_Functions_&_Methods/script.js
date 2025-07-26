
/*
🔹 Function
A function is a reusable block of code designed to perform a specific task. 
It is defined independently and can be invoked by its name.

🔹 Method
A method is a function that belongs to an object. 
It operates on data that is contained within the object (via this or self).
*/


//Function Example:

function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!

//greet is a function.
// It does not belong to any object.


// Method Example:

const person = {
  name: "Alice",
  greet: function() {
    return "Hello, " + this.name + "!";
  }
};

console.log(person.greet()); // Output: Hello, Alice!

// greet is a method because it is a function inside an object (person).
// It uses this.name to access object’s property.

//Using this in a Method

const calculator = {
  a: 10,
  b: 5,
  add: function() {
    return this.a + this.b;
  }
};

console.log(calculator.add()); // Output: 15

//Here, add is a method because it’s tied to the object calculator and uses this.a and this.b.


const intro = {
    imessage: function(name) {
        return `Hello, my name is ${name}`
    }
}

console.log(intro.imessage('Sonex'));  // Output: Hello, my name is Sonex

//All method are function but all function are not method.


//Same Function as Method and Standalone

function multiply(x, y) {
  return x * y;
}

const math = {
  multiply: multiply
};

console.log(multiply(2, 3)); // Function: 6
console.log(math.multiply(4, 5)); // Method: 20

// multiply is a function when called independently.
// It becomes a method when it’s called through math.multiply.


//Arrow Function as a Method (⚠️ Pitfall in JS)

const obj = {
  value: 42,
  show: () => {
    console.log(this.value);
  }
};

obj.show(); // Output: undefined

//Arrow functions don’t have their own this, so this.value is undefined.
// Don’t use arrow functions for object methods that rely on this.


/*
🔍 Key Differences: Function vs Method
| Feature         | Function                            | Method                                     |
| --------------- | ----------------------------------- | ------------------------------------------ |
| **Belongs to**  | Independent (not tied to an object) | Associated with an object                  |
| **Invocation**  | `functionName()`                    | `object.methodName()`                      |
| **Uses `this`** | No implicit `this`                  | Usually uses `this` to refer to the object |
| **Example**     | `greet()`                           | `person.greet()`                           |
| **Purpose**     | General tasks                       | Behavior related to object data            |


💡 Summary
| Feature         | Function                                   | Method                             |
| --------------- | ------------------------------------------ | ---------------------------------- |
| Definition      | A named block of code that performs a task | A function tied to an object/class |
| Access          | Called by name                             | Called via object or class         |
| Ownership       | Independent                                | Belongs to object or class         |
| `this` / `self` | Not used                                   | Commonly used                      |
| Scope           | Global or local                            | Object-level                       |


🔚 Final Thought
Think of a method as a function with a home (object or class).
In procedural programming, you use functions.
In object-oriented programming, you use methods.
*/


//🧠 What is Destructuring?
// Destructuring is a syntactic sugar introduced in ES6 that lets you unpack values 
// from arrays or objects and assign them to variables in a single line.

/*
const [a, b] = [1, 2];       // Array destructuring
const {x, y} = {x: 10, y: 20}; // Object destructuring
*/

// 🔸 1. Array Destructuring
// ✅ Basic Example:

const colors = ['red', 'green', 'blue'];

const [a, b, c] = colors;
console.log(a); // red
console.log(b); // green
console.log(c); // blue


//✅ Skip Values:

const [,, third] = colors;
console.log(third); // blue


//✅ Use Index Reference (alternative way, less common):

const {3: d1} = colors;  // Access 4th index using object-style index
console.log(d1); // pink


//✅ With Function Parameter:

function printColor([a, , , d]) {
  return `${a}, ${d}`;
}
console.log(printColor(['red', 'green', 'blue', 'pink', 'black']));
// Output: red, pink


//🔸 2. Object Destructuring
// ✅ Basic Example:

const person = {
  name: 'Alice',
  age: 25,
  city: 'New York'
};

const { name, age, city } = person;
console.log(name); // Alice
console.log(age);  // 25
console.log(city); // New York


//✅ Rename Variables:

const { name: userName, age: userAge } = person;
console.log(userName); // Alice
console.log(userAge);  // 25


//✅ Nested Object Destructuring:

/*
const person = {
  name: 'Alice',
  contact: {
    mobile: 9678689448,
    email: 'abc@gmail.com'
  }
};

const { contact } = person;
const { contact: { mobile }, contact: { email } } = person;
console.log(mobile); // 9678689448
console.log(email);  // abc@gmail.com

// You can also destructure and rename at the same time:

const {
  contact: { mobile: userMobile, email: userEmail }
} = person;
console.log(userMobile); // 9678689448
*/

//🔸 3. Destructuring in Function Parameters
// ✅ Object Destructuring in Function Parameters:

function intro({ name, age }) {
  return `${name}, ${age}`;
}

console.log(intro(person)); // Alice, 25

//Saves you from writing person.name, person.age inside the function.

//✅ Array Destructuring in Function Parameters:

function printColor([a, , , d]) {
  return `${a}, ${d}`;
}

const colors1 = ['red', 'green', 'blue', 'pink', 'black'];
console.log(printColor(colors1)); // red, pink

//🔸 4. Default Values in Destructuring

/*
const [a = 'default', b = 'default'] = [];
console.log(a); // default

const { name = 'Guest', age = 18 } = {};
console.log(name); // Guest
*/

//🔸 5. Rest Operator with Destructuring

/*
const [a, ...rest] = [1, 2, 3, 4];
console.log(a);    // 1
console.log(rest); // [2, 3, 4]

const { x, ...others } = { x: 1, y: 2, z: 3 };
console.log(x);       // 1
console.log(others);  // { y: 2, z: 3 }
*/

//🔸 6. Nested + Complex Destructuring
/*
const user = {
  id: 1,
  profile: {
    fullName: 'Sonjib Chetry',
    address: {
      city: 'Guwahati',
      pincode: 781001
    }
  }
};

const {
  profile: {
    fullName,
    address: { city, pincode }
  }
} = user;

console.log(fullName); // Sonjib Chetry
console.log(city);     // Guwahati
console.log(pincode);  // 781001
*/

/*
✅ Summary Table
| Feature                           | Supported |
| --------------------------------- | --------- |
| Basic array destructuring         | ✅         |
| Skip items in array               | ✅         |
| Basic object destructuring        | ✅         |
| Rename variables                  | ✅         |
| Nested destructuring              | ✅         |
| Function parameters destructuring | ✅         |
| Default values                    | ✅         |
| Rest operator with destructuring  | ✅         |
*/
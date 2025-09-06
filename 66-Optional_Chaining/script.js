
// Optional chaining (?.) is a feature in JavaScript that allows you to safely access 
// deeply nested properties of an object without having to explicitly check if each 
// reference in the chain is valid (i.e., not null or undefined).


const user = {
  name: "Sonjib"
};

// console.log(user.address.zip);  // ❌ TypeError: Cannot read property 'zip' of undefined

console.log(user.address?.zip);  // ✅ undefined (no error)

//With ?., JavaScript checks if address exists before trying to access zip. 
// If address is undefined or null, it returns undefined instead of throwing an error.



//Example Scenarios

// 1. Nested Objects

const person = {
  name: "Alice",
  job: {
    title: "Developer",
    company: {
      name: "TechCorp"
    }
  }
};

console.log(person.job?.company?.name);  // "TechCorp"
console.log(person.education?.degree);   // undefined (no error)


// 2. Functions or Methods

const user1 = {
  sayHi: () => console.log("Hi!")
};

user1.sayHi?.();        // "Hi!"
user1.sayBye?.();       // Nothing happens (no error)


// 3. Arrays

const items = [1, 2, 3];

console.log(items?.[1]);  // 2
console.log(items?.[5]);  // undefined


//Other Examples

const user2 = {
  firstName: 'Sonjib',
  lastName: 'Chetry',
  age: 25,
  address: {
    city: 'Delhi'
  },
  getFullName: function() {
    return user2.firstName + ' ' + user2.lastName
  }
}

const c = 'city'

console.log(user2.getFullName?.());
console.log(user2.address && user2.address.city)
console.log(user2.address?.city)
console.log(user2.address?.[c])


// 🔹 Key Points

// ?. only checks for null or undefined. If the property exists but is another 
// falsy value (like 0, "", or false), it still works normally.

let obj = { count: 0 };
console.log(obj?.count);  // ✅ 0 (not undefined)


// It is short-circuited → once it finds null/undefined, it stops evaluating further.

// Can be used with:

// Object properties → obj?.prop
// Arrays → arr?.[index]
// Functions → func?.()
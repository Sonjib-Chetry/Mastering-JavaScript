
// Define an object 'user1' with user information properties
const user1 = {
    firstName: 'Sonex',  // User's first name
    lastName: 'Karki',   // User's last name
    age: 32,             // User's age
    education: 'Graduation',  // User's education level
    city: 'Delhi'        // User's city
}

/* 
Note on object comparison: 
Objects are reference types. Even with identical contents, 
two separate objects will have different memory addresses.
*/

// Create a separate object 'user2' with identical properties/values to user1
const user2 = {
    firstName: 'Sonex', 
    lastName: 'Karki',
    age: 32,
    education: 'Graduation',
    city: 'Delhi'
}

// Compare objects by reference (memory address), not content
console.log(user1 === user2);  // false - different memory addresses

/*
Primitive vs Reference Types:
- Primitives (strings, numbers, etc) compare by VALUE
- Objects (reference types) compare by MEMORY ADDRESS
*/

// Primitive string value
const myName = 'Sonjib'

// Two empty primitive strings (share same memory address)
const Name1 = ''    
const Name2 = ''

// Two empty objects (different memory addresses)
const user10 = {}  
const user11 = {}

// Compare primitive values (both empty strings)
console.log(Name1 === Name2);  // true - same value

// Compare object references (different instances)
console.log(user10 === user11); // false - different addresses

// Define new user objects with different property values
const user20 = {
    firstName: 'Ram',      // Property with string value
    lastName: 'Chetry',
}

const user21 = {
    firstName: 'Shayam', 
    lastName: 'Newar',
}

/* 
Accessing object properties:
1. Dot notation: object.key
2. Bracket notation: object['key'] 
*/

// Access property using dot notation
console.log(user20.firstName);  // 'Ram'

// Access property using dot notation
console.log(user21.lastName);   // 'Newar'

// Access property using bracket notation (string key)
console.log(user20['lastName']); // 'Chetry'

// Access property using bracket notation
console.log(user21['firstName']); // 'Shayam'

/* 
Special cases for bracket notation:
Required when property names:
- Contain special characters (hyphens, spaces)
- Are dynamically generated
*/

// Object with hyphenated property name (requires quotes)
const user31 = {
    'first-Name': 'Punam',  // Valid special-character key
}

// Invalid dot notation attempt (syntax error):
// console.log(user31.first-Name); 

// Correct access using bracket notation
console.log(user31['first-Name']);  // 'Punam'

// Access non-existent property returns 'undefined'
console.log(user31['last-Name']);   // undefined

/* 
Dynamic property access:
Bracket notation can use variables and expressions
to determine property name at runtime
*/

// External variable containing string value
const myName1 = 'Rajib'

// Object with property matching external variable's value
const user35 = {
    Rajib: 'Developer',        // Property name: 'Rajib'
    userLastName: 'Pradhan'
}

// Use variable to dynamically access property
console.log(user35[myName1]);    // 'Developer' (accesses 'Rajib' property)

// Build property name using string concatenation
console.log(user35['user' + 'Last' + 'Name']);  // 'Pradhan'

/* 
Modifying objects:
- Add new properties
- Update existing properties
*/

// Initial object with two properties
const user36 = {
    firstName: 'Sonjib',
    lastName: 'Karki',
}

// Add new property using dot notation
user36.age = 32                

// Add hyphenated property using bracket notation
user36['is-student'] = true    

// Show modified object
console.log(user36);  // Now contains 4 properties

/* 
Nested objects:
Objects can contain other objects as property values
*/

// Object with nested 'address' object
const user37 = {
    firstName: 'Sonjib',
    lastName: 'Karki',
    address: {                  // Object-valued property
        city: 'Mumbai',         // Nested properties
        Pin: 110015,
        state: 'Maharashtra'
    }
}

// Access full object
console.log(user37);

// Access nested address object
console.log(user37.address);     // Entire address object

// Access nested property using dot chaining
console.log(user37.address.city); // 'Mumbai'

// Similar nested object structure
const user38 = {
    firstName: 'Sonjib',
    lastName: 'Karki',
    address: {
        city: 'Mumbai',
        Pin: 110015,
        state: 'Maharashtra'
    }
}

// Modify nested object by adding new property
user38.address.county = 'India'   // Add to existing 'address' object

// Show updated object with new nested property
console.log(user38);

// Removing properties from an object using the delete operator
// The delete operator removes a property from an object completely

// Create a person object with three properties
const person = {
  name: "Alice",   // String property for person's name
  age: 30,         // Numeric property for person's age
  job: "Engineer"  // String property for person's occupation
};

// Delete the 'job' property from the person object
delete person.job;  // Removes the 'job' key-value pair entirely

// Attempt to access the deleted property
console.log(person.job); // undefined - since property no longer exists

/* 
Note: delete operator:
- Removes both the property key and its value
- Affects only the specified object (not inherited properties)
- Returns true if deletion was successful
*/

// Checking property existence using hasOwnProperty() method
// This method checks if an object directly contains a property (not inherited)

// Create a new person object
const person1 = {
  name: "Alice",  // Direct property of person1
  age: 30         // Direct property of person1
};

// Check if 'name' is a direct property of person1
console.log(person1.hasOwnProperty("name")); // true - property exists directly

// Check if 'job' is a direct property of person1
console.log(person1.hasOwnProperty("job"));  // false - property doesn't exist

/* 
Note about hasOwnProperty():
- Only checks for own properties (not inherited through prototype chain)
- Returns false for inherited properties, even if accessible
*/

// Checking property existence using 'in' operator
// Checks if property exists anywhere in the prototype chain

// Create another person object
const person2 = {
  name: "Bob",  // Direct property
  age: 25       // Direct property
};

// Check if 'name' exists in the object or its prototype chain
console.log("name" in person2);  // true - property exists in object

/* 
Key difference:
- hasOwnProperty(): Only own properties
- in operator: Own properties + inherited properties
*/

// Optional chaining operator (?.) 
// Safely accesses nested properties without causing errors if intermediate properties are missing

// Create a user object with nested profile and address objects
const user = {
  name: "John",  // Top-level property
  profile: {     // Nested object property
    email: "john@example.com",  // Property in profile object
    address: {                  // Nested object within profile
      street: "123 Main St",    // Property in address object
      city: "Somewhere"         // Property in address object
    }
  }
};

// Dangerous access without optional chaining - would throw TypeError
// console.log(user.occupation.job);  // Fails because occupation is undefined

// Safe nested access using optional chaining
console.log(user.profile?.address?.street); // "123 Main St" - all levels exist

// Safe access to non-existent properties
console.log(user.profile?.phone?.number);   // undefined - fails gracefully

/* 
How optional chaining works:
- Returns undefined immediately if any link in the chain is null/undefined
- Prevents "cannot read property of undefined" errors
- Works with:
  ?. - property access
  ?.[] - bracket notation
  ?.() - function calls
*/


//Copying Objects

const user12 = {
    firstName : 'sonex',
    lastName : 'karki'
}
console.log(user12); 

const user13 = user12        //this will create same address in memory for both user13 and user12 object
console.log(user13);

user12.lastName = 'chetry'  //updating user12 value

console.log(user12);   
console.log(user13);   //in such case JS will also change variable user13 although we have update value in user12
// because address is same, updating any one will impact both
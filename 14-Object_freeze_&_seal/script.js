
// Define a user object with nested properties
const user = {
    firstName: 'Adarsh',  // Top-level string property
    lastName: 'Singh',    // Top-level string property
    address: {            // Nested object property
      city: 'Bangalore',  // Property within address
      pinCode: 876876,    // Numeric property within address
      state: 'Karnataka', // Property within address
      moreDetails: {      // Nested object within address
        population: 9798897897,  // Property within moreDetails
        area: '787 sq km',       // Property within moreDetails
      },
    },
    age: 15,  // Top-level numeric property
}

// Modify existing property in a const object
user.firstName = 'Sonex'  // Allowed: Modifying properties of const objects
/*
 Important: 
 - 'const' prevents reassignment of the variable itself, not property modifications
 - The original string 'Adarsh' becomes unreachable and will be garbage collected
*/

// Log modified user object
console.log(user);

/*
 Attempting to reassign const variable would cause error:
 user = {}  // TypeError: Assignment to constant variable
*/

// Create mutable object with let
let user1 = {
    name : 'abc'  // Initial property
}

// Reassign entire object (allowed with 'let')
user1 = {
    name : 'xyz'  // New object replaces original
}
/*
 Memory behavior:
 - Original object becomes unreachable and will be garbage collected
 - New object created at different memory location
*/

console.log(user1);  // Show new object

// Create mutable object with var
var user2 = {
    name : 'abc'  // Initial property
}

// Reassign entire object (allowed with 'var')
user2 = {
    name : 'xyz'  // New object replaces original
}
/*
 Similar behavior to let:
 - Original object becomes unreachable
 - New object created at different memory location
*/

console.log(user2);  // Show new object

// Create new const user object with nested properties
const user3 = {
    firstName: 'Adarsh',
    lastName: 'Singh',
    address: {
      city: 'Bangalore',
      pinCode: 876876,
      state: 'Karnataka',
      moreDetails: {
        population: 9798897897,
        area: '787 sq km',
      },
    },
    age: 15,
}

console.log(user3);  // Log initial state

// Delete property from const object
delete user3.firstName  // Removes 'firstName' property completely
/*
 Important:
 - delete operator works on const objects
 - Only removes own properties (not inherited)
 - Returns true if successful
*/

console.log(user3);  // Show object without firstName

// Create new sealed user object
const user4 = {
    firstName: 'Adarsh',
    lastName: 'Singh',
    address: {
      city: 'Bangalore',
      pinCode: 876876,
      state: 'Karnataka',
      moreDetails: {
        population: 9798897897,
        area: '787 sq km',
      },
    },
    age: 15,
}

// Seal the object to prevent structural changes
Object.seal(user4)
/*
 Seal effects:
 1. Prevents adding new properties
 2. Prevents deleting existing properties
 3. Allows modifying existing property values
*/

// Attempt modifications on sealed object:
user4.firstName = 'Sonex'  // Allowed: Modifying existing property
user4.mobile = 9678689448  // Silent failure: Cannot add new property
delete user4.lastName      // Silent failure: Cannot delete property

console.log(user4);  // Shows modified firstName but intact structure

// Create new frozen user object
const user5 = {
    firstName: 'Adarsh',
    lastName: 'Singh',
    address: {
      city: 'Bangalore',
      pinCode: 876876,
      state: 'Karnataka',
      moreDetails: {
        population: 9798897897,
        area: '787 sq km',
      },
    },
    age: 15,
}

// Freeze the object to make it immutable
Object.freeze(user5)
/*
 Freeze effects (more restrictive than seal):
 1. Prevents adding new properties
 2. Prevents deleting existing properties
 3. Prevents modifying existing property values
 4. Only affects top-level properties (nested objects not frozen)
*/

// Attempt modifications on frozen object:
user5.firstName = 'Sonex'   // Silent failure: Modification not allowed
user5.mobile = 9678689448   // Silent failure: Addition not allowed
delete user5.lastName       // Silent failure: Deletion not allowed

console.log(user5);  // Shows original unchanged object

// Create final user object for property checking
const user6 = {
    firstName: 'Adarsh',
    lastName: 'Singh',
    address: {
      city: 'Bangalore',
      pinCode: 876876,
      state: 'Karnataka',
      moreDetails: {
        population: 9798897897,
        area: '787 sq km',
      },
    },
    age: 15,
}

// Check property existence using 'in' operator
console.log('firstName' in user6);  // true - property exists in object
console.log('mobileNumber' in user6); // false - property doesn't exist

/*
 Note about 'in' operator:
 - Checks own properties AND inherited properties
 - Use hasOwnProperty() for own properties only
*/

// Program termination indicator
console.log('Program Ended.............!');
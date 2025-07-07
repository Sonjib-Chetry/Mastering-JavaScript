
// Declaring variables representing different user ages
const userAge1 = 20;
const userAge2 = 15;
const userAge3 = 25;
const userAge4 = 4;

// Demonstrating AND (&&) operator behavior:
// AND operator returns the first falsy value or the last truthy value

// Basic AND operation between boolean values
console.log(true && false);  // Returns false (first falsy value encountered)
console.log(1 && 2);         // Returns 2 (both are truthy, returns last value)
console.log(0 && 2);         // Returns 0 (first falsy value encountered)

// AND operation with string values
console.log('' && 'Hello');   // Returns '' (empty string is falsy)
console.log('Hello' && null); // Returns null (null is falsy)

// Converting AND operation results to boolean
console.log(Boolean(1 && 2));           // true (2 is truthy)
console.log(Boolean(0 && 2));           // false (0 is falsy)
console.log(Boolean('' && 'Hello'));    // false (empty string is falsy)
console.log(Boolean('Hello' && null));  // false (null is falsy)

// Checking if users are school students (age between 5-17)
const isSchoolStudent1 = (userAge2 >= 5) && (userAge2 <= 17);  // true (15 is in range)
const isSchoolStudent2 = (userAge4 >= 5) && (userAge4 <= 17);  // false (4 is below range)

console.log(isSchoolStudent1);  // Output: true
console.log(isSchoolStudent2);  // Output: false

// Checking if users are college students (age between 18-24)
const isCollegeStudent1 = (userAge1 >= 18) && (userAge1 <= 24);  // true (20 is in range)
const isCollegeStudent2 = (userAge3 >= 18) && (userAge3 <= 24);  // false (25 is above range)

console.log(isCollegeStudent1);  // Output: true
console.log(isCollegeStudent2);  // Output: false

// Demonstrating OR (||) operator behavior:
// OR operator returns the first truthy value or the last falsy value

// Basic OR operation between boolean values
console.log(true || false);  // Returns true (first truthy value encountered)
console.log(1 || 2);         // Returns 1 (first truthy value)
console.log(0 || 2);         // Returns 2 (0 is falsy, 2 is truthy)

// OR operation with string values
console.log('' || 'Hello');   // Returns 'Hello' (empty string is falsy)
console.log('Hello' || null); // Returns 'Hello' (first truthy value)

// Converting OR operation results to boolean
console.log(Boolean(1 || 2));           // true (1 is truthy)
console.log(Boolean(0 || 2));           // true (2 is truthy)
console.log(Boolean('Hello' || null));  // true ('Hello' is truthy)

// Checking if users are students (either school or college students)
const isStudent1 = isSchoolStudent1 || isCollegeStudent1;  // true (both true)
const isStudent2 = isSchoolStudent2 || isCollegeStudent1;  // true (college true)
const isStudent3 = isSchoolStudent1 || isCollegeStudent2;  // true (school true)
const isStudent4 = isSchoolStudent2 || isCollegeStudent2;  // false (both false)

console.log(isStudent1);  // Output: true
console.log(isStudent2);  // Output: true
console.log(isStudent3);  // Output: true
console.log(isStudent4);  // Output: false

// Demonstrating special cases with console.log (which returns undefined)
console.log('Hello');  // Outputs 'Hello' but returns undefined



// Using console.log in logical expressions
const undefinedResultCompare1 = 'Hello' && console.log('Hi');     // Logs 'Hi' and assigns undefined
const undefinedResultCompare2 = 0 && console.log('Hello');        // Doesn't log (0 is falsy), assigns 0
const undefinedResultCompare3 = 'Hello' || console.log('Hi');     // Doesn't log ('Hello' is truthy), assigns 'Hello'
const undefinedResultCompare4 = 0 || console.log('Hello');        // Logs 'Hello' and assigns undefined

console.log(undefinedResultCompare1);  // Output: undefined
console.log(undefinedResultCompare2);  // Output: 0
console.log(undefinedResultCompare3);  // Output: 'Hello'
console.log(undefinedResultCompare4);  // Output: undefined

// Demonstrating NOT (!) operator behavior:
// Converts truthy to false and falsy to true

// Basic NOT operations
console.log(Boolean(!0));      // true (0 is falsy, !0 is true)
console.log(Boolean(!null));   // true (null is falsy, !null is true)
console.log(Boolean(!!null));  // false (double negation returns original falsy value)

// Negating student status checks
console.log(!(isStudent3));    // false (isStudent3 is true)
console.log(!(isStudent4));    // true (isStudent4 is false)

// Double negation to get original boolean value
console.log(!!(isStudent3));  // true (double negation of true)
console.log(!!(isStudent4));  // false (double negation of false)
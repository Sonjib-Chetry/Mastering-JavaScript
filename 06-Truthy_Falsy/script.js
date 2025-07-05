// The Boolean() function converts any value to its boolean equivalent (true or false)
// It returns true for truthy values and false for falsy values

// Demonstrating truthy number values - all non-zero numbers are truthy
console.log(Boolean(10));       // true (positive integer)
console.log(Boolean(-10));      // true (negative integer)
console.log(Boolean(10.5));     // true (positive float)
console.log(Boolean(0.0002));   // true (very small but non-zero)
console.log(Boolean(Infinity)); // true (Infinity is truthy)
console.log(Boolean(-Infinity));// true (negative Infinity is truthy)

// Demonstrating falsy number values
console.log(Boolean(0));        // false (0 is falsy)
console.log(Boolean(-0));       // false (negative 0 is falsy)
console.log(Boolean(NaN));      // false (NaN is falsy)

// Demonstrating truthy string values
console.log(Boolean(' '));      // true (non-empty string, even with just space)
console.log(Boolean('a'));      // true (non-empty string)

// Demonstrating falsy values of different types
console.log(Boolean());         // false (no argument provided)
console.log(Boolean(''));       // false (empty string)
console.log(Boolean(undefined));// false (undefined is falsy)
console.log(Boolean(null));     // false (null is falsy)

// The ! operator is the logical NOT operator
// It converts the value to boolean and then inverts it (true becomes false, false becomes true)

// Single ! operator examples (inverts the truthiness)
console.log(!10);        // false (10 is truthy, ! makes it false)
console.log(!undefined); // true (undefined is falsy, ! makes it true)

// Double !! operator examples (converts to boolean equivalent)
console.log(!!10);       // true (same as Boolean(10))
console.log(!!undefined);// false (same as Boolean(undefined))
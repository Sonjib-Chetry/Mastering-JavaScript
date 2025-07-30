
// 🔹 map()
// ✅ Purpose:
// Creates a new array by transforming each element of the original array using a callback function.

// ✅ Syntax:
// array.map(callback(currentValue, index, array), thisArg)

// ✅ Parameters:
// Parameter       Description
// currentValue    The current element being processed in the array.
// index           (Optional) The index of the current element.
// array           (Optional) The original array map() was called upon.
// thisArg         (Optional) Value to use as this when executing callback.

// ✅ Example 1: Basic transformation
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log('map - doubled:', doubled); // [2, 4, 6, 8]

// ✅ Example 2: Use index and array
const months = ['january', 'february', 'march'];
const formatted = months.map((month, index, arr) => `${index + 1} - ${month.toUpperCase()}`);
console.log('map - formatted:', formatted);


// 🔹 filter()
// ✅ Purpose:
// Creates a new array with only the elements that pass the test condition in the callback.

// ✅ Syntax:
// array.filter(callback(currentValue, index, array), thisArg)

// ✅ Parameters:
// Parameter       Description
// currentValue    The current element being processed.
// index           (Optional) The index of the current element.
// array           (Optional) The original array filter() was called on.
// thisArg         (Optional) Value to use as this in the callback function.

// ✅ Example 1: Filter elements by value
const mixedNumbers = [5, 12, 8, 130, 44];
const filtered = mixedNumbers.filter(num => num > 10);
console.log('filter - numbers > 10:', filtered); // [12, 130, 44]

// ✅ Example 2: Filter strings by length
const words = ['apple', 'bat', 'cherry'];
const shortWords = words.filter((word, index) => word.length <= 3);
console.log('filter - short words:', shortWords); // ['bat']


// 🔹 reduce()
// ✅ Purpose:
// Executes a reducer function on each element of the array, resulting in a single output value.

// ✅ Syntax:
// array.reduce(callback(accumulator, currentValue, index, array), initialValue)

// ✅ Parameters:
// Parameter        Description
// accumulator      The accumulated result returned by the last execution of the callback.
// currentValue     The current element being processed.
// index            (Optional) The index of the current element.
// array            (Optional) The original array reduce() was called upon.
// initialValue     (Optional) Value to use as the first accumulator value. If omitted, the first element is used.

// ✅ Example 1: Sum of numbers
const nums = [1, 2, 3, 4];
const total = nums.reduce((acc, curr) => acc + curr, 0);
console.log('reduce - sum:', total); // 10

// ✅ Example 2: Count fruit occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log('reduce - fruit count:', count); // { apple: 2, banana: 2, orange: 1 }

// ✅ Example 3: Flatten nested arrays
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log('reduce - flattened:', flat); // [1, 2, 3, 4, 5]


// 🔗 Method Chaining
// ✅ Purpose:
// Apply multiple array methods one after another in a single statement.

// ✅ Example: Filter + Map
const users = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false },
  { name: 'Charlie', active: true }
];

const activeUserNames = users
  .filter(user => user.active)   // Step 1: Keep active users
  .map(user => user.name);       // Step 2: Get their names

console.log('chaining - active user names:', activeUserNames); // ['Alice', 'Charlie']

// ✅ More Complex Example: Filter + Map + Reduce
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

const totalAge = people
  .filter(person => person.age > 25)
  .map(person => person.age)
  .reduce((sum, age) => sum + age, 0);

console.log('chaining - total age over 25:', totalAge); // 65 (30 + 35)


// ✅ Summary Table
// Method      Purpose                              Returns        Mutates?  Typical Use
// .map()      Transform each element                New array      No        Change structure/values
// .filter()   Keep elements meeting condition       New array      No        Remove unwanted elements
// .reduce()   Reduce array to a single value        Single value   No        Sum, count, flatten, combine
// Chaining    Combine methods for clean pipelines   Depends        No        Multi-step data processing

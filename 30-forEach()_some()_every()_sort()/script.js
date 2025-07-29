
//✅ forEach() Method

// 🔹 Purpose:
// To execute a function once for each array element. It doesn’t return anything (i.e., undefined).

// 🔹 Syntax:
/*
array.forEach((element, index, array) => {
  // logic
});
*/

//🔹 Example 1 (Basic):

const fruits = ['apple', 'banana', 'mango'];

fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// Output:
// 0: apple
// 1: banana
// 2: mango


//🔹 Example 2 (Advanced: Summing values):

const numbers = [10, 20, 30];
let sum = 0;

numbers.forEach((num) => sum += num);
console.log(sum); // 60

// 🔹 Important Notes:
// Doesn’t return a new array.
// Doesn’t break out early (use for or some() if you need to exit early).


//✅ some() Method

//🔹 Purpose:
// To check if at least one element in the array passes the test.

//🔹 Returns:
// true if any element satisfies the condition, otherwise false.

//🔹 Syntax:
/*
array.some((element, index, array) => {
  // return true or false
});
*/

//🔹 Example 1 (Basic):

const ages = [10, 20, 30, 40];
const hasTeen = ages.some(age => age >= 13 && age <= 19);
console.log(hasTeen); // false


//🔹 Example 2 (Advanced: Using with objects):

const users = [
  { name: 'Alice', loggedIn: false },
  { name: 'Bob', loggedIn: true }
];

const isSomeoneLoggedIn = users.some(user => user.loggedIn);
console.log(isSomeoneLoggedIn); // true


//✅ every() Method

//🔹 Purpose:
// Checks if all elements in the array pass the test.

//🔹 Returns:
// true if every element satisfies the condition, otherwise false.

//🔹 Syntax:
/*
array.every((element, index, array) => {
  // return true or false
});
*/

//🔹 Example 1 (Basic):

const marks = [80, 85, 90];
const allPassed = marks.every(mark => mark >= 35);
console.log(allPassed); // true

//🔹 Example 2 (Advanced: Object conditions):

const tasks = [
  { title: 'task1', done: true },
  { title: 'task2', done: true }
];

const allDone = tasks.every(task => task.done);
console.log(allDone); // true


//✅ sort() Method

//🔹 Purpose:
// Sorts the array in place (mutates original array). Converts elements to strings by default.

//🔹 Syntax:
/*
array.sort((a, b) => {
  // return < 0  → a before b
  // return 0    → keep original order
  // return > 0  → b before a
});
*/

//🔹 Example 1 (Basic: String sort):

const names = ['Charlie', 'Alice', 'Bob'];
names.sort();
console.log(names); // ['Alice', 'Bob', 'Charlie']

//🔹 Example 2 (Basic: Default number sort is wrong):

const numbers1 = [100, 25, 5];
numbers1.sort();
console.log(numbers1); // [100, 25, 5]  → WRONG (because it compares as strings)

//🔹 Example 3 (Correct Number Sort):

const numbers2 = [100, 25, 5];
numbers2.sort((a, b) => a - b); // Ascending
console.log(numbers2); // [5, 25, 100]

numbers2.sort((a, b) => b - a); // Descending
console.log(numbers2); // [100, 25, 5]

//🔹 Example 4 (Advanced: Sort array of objects):

const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Doe', age: 35 }
];

people.sort((a, b) => a.age - b.age); // sort by age ascending
console.log(people);
/*
[
  { name: 'Jane', age: 25 },
  { name: 'John', age: 30 },
  { name: 'Doe', age: 35 }
]
*/

//❗To avoid changing the original array:
//Use .slice() or spread operator to create a copy before sorting.

const numbers3 = [4, 2, 1, 3];
const sortedCopy = [...numbers].sort((a, b) => a - b);

console.log(numbers3);     // [4, 2, 1, 3] ← Unchanged
console.log(sortedCopy);  // [1, 2, 3, 4]


/*
🧠 Summary Table:
| Method      | Purpose                           | Returns        | Mutates? | Break Early? |
| ----------- | --------------------------------- | -------------- | -------- | ------------ |
| `forEach()` | Loop through each item            | `undefined`    | No       | ❌ No         |
| `some()`    | Check if **any** item passes test | `true/false`   | No       | ✅ Yes        |
| `every()`   | Check if **all** items pass test  | `true/false`   | No       | ✅ Yes        |
| `sort()`    | Sort array in place               | `sorted array` | ✅ Yes    | N/A          |
*/
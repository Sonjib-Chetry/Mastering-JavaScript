
// Define an array of fruits using array literal syntax
const fruitsList = ['Apple', 'Mango', 'Grapes']
// Print entire array - shows all elements
console.log(fruitsList);        
// Access and print element at index 2 (3rd element)
console.log(fruitsList[2]);     

/*
Arrays:
- Ordered collections with numeric indexes (0-based)
- Non-primitive (reference types) - stored by memory address
*/

// Create vegetable array
const vegetable = ['Potato', 'Tomato', 'Aubergine']
console.log(vegetable);  // Print initial array

// Update element at index 2 (3rd position)
vegetable[2] = 'Brinjal'  
// Verify updated element
console.log(vegetable[2]);
// Print modified array
console.log(vegetable);

/*
Important:
- const prevents variable reassignment, not array modification
- Elements can be updated, added, or removed
- Original values become unreachable (garbage collected)
*/

// Attempting to reassign const variable would cause error:
// vegetable = []  // TypeError: Assignment to constant variable

/* 
For let/var variables:
- Full reassignment is allowed
- Original array becomes unreachable
*/

// Add new element at index 3 (4th position)
vegetable[3] = 'Cabbage'  
console.log(vegetable);  // Show array with new element

// Add element at index 6 (skipping indexes 4 and 5)
vegetable[6] = 'Lady Finger'   
/* 
Result:
- Indexes 4 and 5 become empty slots
- Accessing them returns undefined
*/
console.log(vegetable);        
// Access empty slot (index 4) - returns undefined
console.log(vegetable[4]);     

// Array with mixed data types (valid but not recommended)
const userDetails = ['Sonjib', 'India',  
    23, null, undefined, true]  
console.log(userDetails);  // Shows all elements

// Array containing an object as element
const names = ['Ram', 'Shayam', 'Gopal', {title : 'Chetry', age : 23}]
console.log(names);  // Shows array with nested object

// Array containing another array (nested array)
const age = [20, 22, 25, [30, 32, 35]]
console.log(age);  // Shows array with nested array

/* 
Array Methods Section:
Methods that modify the original array are called "mutator methods"
*/

// Create electronic items array
const electronicItem = ['computer', 'laptop', 'mobile']

// Add elements using length property (appends to end)
electronicItem[electronicItem.length] = 'smart watch'    
electronicItem[electronicItem.length] = 'speaker'        
console.log(electronicItem);  // Shows modified array

// Push method: Append one or more elements to end
electronicItem.push('LED')                             
electronicItem.push('freeze', 'cooler', 'induction')   
console.log(electronicItem);  // Shows all added elements

// Unshift method: Prepend elements to beginning
electronicItem.unshift('keybord')  
console.log(electronicItem);  // Shows array with new first element

// Unshift with multiple elements
electronicItem.unshift('cooker', 'filter', 'mixer')   
console.log(electronicItem);  // Shows new elements at start

/* 
Removal methods:
*/

// Pop method: Remove last element
electronicItem.pop()         
console.log(electronicItem); // Last element ('induction') removed

// Create even numbers array
const evenNumber = [2, 4, 6, 8]
console.log(evenNumber);  // Initial array

// Shift method: Remove first element
evenNumber.shift()        
console.log(evenNumber);  // First element (2) removed

/* 
Combining arrays:
*/

// Create animals array (with duplicate values)
const animals = ['dog', 'cat', 'cow', 'cat']
console.log(animals);

// Concat method: Combine arrays (non-mutating)
const joinArray1 = animals.concat(evenNumber) // Animals + evenNumber
console.log(joinArray1);

const joinArray2 = evenNumber.concat(animals)  // evenNumber + animals
console.log(joinArray2);

// Combine multiple arrays
const joinArray3 = animals.concat(evenNumber, fruitsList) 
console.log(joinArray3);

/* 
Searching methods:
*/

// indexOf: Find first occurrence's index
console.log(electronicItem.indexOf('mixer'));   // Returns index if found
console.log(animals.indexOf('goat'));  // Returns -1 if not found
console.log(animals.indexOf('cat'));  // Returns first match's index (1)

// includes: Check existence (boolean)
console.log(animals.includes('cow'));    // true - exists
console.log(animals.includes('horse'));  // false - doesn't exist

/* 
Transformation methods:
*/

// Reverse: Invert element order (mutates original)
console.log(evenNumber.reverse());  // Shows reversed array
console.log(evenNumber);            // Original modified

// Sort: Alphabetical order (mutates original)
console.log(animals.sort());    // Sorted alphabetically
console.log(animals);           // Original modified

// Sorting behavior demo (case sensitivity)
const abc = ['Aa', 'aa', 'Ba', 'Ca', 'Da', 'Ea', 'Fa']
console.log(abc.sort());   // Sorts based on UTF-16 code units
/* 
Note: 
- Uppercase letters have lower UTF-16 values than lowercase
- Results in uppercase letters appearing first
*/

/* 
Extraction methods:
*/

// Create new array
const xyz = ['Xa', 'Ya', 'Za', 'Xb', 'Yb', 'Zb']
console.log(xyz);  // Initial array

// Slice: Extract portion without modifying original
console.log(xyz.slice(4));     // Elements from index 4 to end
console.log(xyz);              // Original remains unchanged
console.log(xyz.slice(2, 4));  // Elements from index 2 to 3 (end index not included)
console.log(xyz);              // Original unchanged

/* 
Splice: Powerful method for adding/removing elements
- Modifies original array
- Returns removed elements
*/

// Remove elements from index 4 to end
console.log(xyz.splice(4));  // Returns removed elements
console.log(xyz);            // Original array modified

// Create numbers array
const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
console.log(numbers);
// Remove 3 elements starting at index 4
console.log(numbers.splice(4, 3));  // Removes 'five','six','seven'
console.log(numbers);               // Modified array

// Create Roman numerals array
const numbers1 = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
console.log(numbers1);
// Remove 2 elements starting at index 4, add 'X'
console.log(numbers1.splice(4, 2, 'X'));  // Removes 'V','VI', adds 'X'
console.log(numbers1);                    // Modified array

// Create fresh Roman numerals array
const numbers2 = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
console.log(numbers2);
// Remove 2 elements, add three new elements
console.log(numbers2.splice(4, 2, 'X', 'XI', 'XII'));   // Removes 'V','VI', adds three
console.log(numbers2);                            // Final modified array


//Multi Dimensional Array

const studentNameAndMark = [                   //array inside an array
    ['Adarsh', 75], 
    ['Sonex', 85], 
    ['Gokul', 65]
]                              
console.log(studentNameAndMark);

console.log(studentNameAndMark[1]);      //accessing particular index value in array 
console.log(studentNameAndMark[1][0]);   //accessing particular index value in array inside an array


const ticTacToe = [
    ['X', null, null],
    [null, null, 'O'],
    ['O', null, 'X']
]

console.log(ticTacToe);
console.log(ticTacToe[2]);
console.log(ticTacToe[1][2]);


//Copying Array:

const fruits = ['mango', 'apple', 'orange']
console.log(fruits);

const myFruits = fruits   //this will create same address in memory for both fruits and myFruits array
console.log(myFruits);

myFruits.push('dates', 'grapes')  //updating myFruits value

console.log(myFruits);
console.log(fruits);   //in such case JS will also change variable fruits although we have push value in myFruits 
// because address is same, updating any one will impact both

// Program termination indicator
console.log('Program Ended...............!');
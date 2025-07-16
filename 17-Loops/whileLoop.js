
// Program start indicator
console.log('Program Started');

// Initialize counter variable for while loop
let num = 0   // 'let' used because value will be modified

// While loop: executes code block repeatedly while condition is true
while(num <= 5) {     // Loop runs as long as num is <= 5
    // Print current value of num
    console.log(num);
    // Increment num by 1 (post-increment)
    num++;   // Equivalent to num = num + 1
}
/*
Loop behavior:
- Starts at 0, prints 0
- Increments to 1, prints 1
- Continues until num=5 (prints 5)
- When num=6, condition fails and loop exits
*/

/* 
Common conventions:
- Typically use 'i' (index) as loop counter variable
- Avoid infinite loops (commented example below)
*/

// Danger: Infinite loop example (commented out)
// while(2 < 5) {  // Condition always true
//     console.log('My name is Sonex');  // Would run indefinitely
// }

// Array of friend names
const myFriends = ['Pankaj', 'Rohit', 'Jeetu', 'Rashmi', 'Deepa']

// Initialize array index counter
let k = 0

// While loop to traverse array (fixed condition)
while(k <= 4) {                  // Condition based on known array length
    // Access array element at index k
    console.log(myFriends[k]);
    // Move to next index
    k++
}

// Better approach for array traversal (dynamic condition)
let k2 = 0
// Use array length property for flexibility
while(k2 < myFriends.length) {      // Safer: automatically adjusts to array size
    // Access current element
    console.log(myFriends[k2]);     
    k2++                          
}
/*
Important: 
- Condition uses < instead of <= to avoid accessing index 5 (undefined)
- myFriends.length = 5, but valid indexes are 0-4
*/

// Format output with numbered list
let k3 = 0
while(k3 < myFriends.length) {    
    // Create numbered output (1. Name)
    console.log((k3 + 1) + '. ' + myFriends[k3]);  // String concatenation
    k3++                       
}

// Alternative formatting using template literals
let k4 = 0
while(k4 < myFriends.length) {    
    // Template literal syntax (modern approach)
    console.log(`${k4 + 1}. ${myFriends[k4]}`);
    k4++                       
}

// Modify output for each element
let k5 = 0
while(k5 < myFriends.length) {    
    // Append text to each name
    console.log(myFriends[k5] + ' Coder'); 
    k5++                       
}

/*
Memory consideration:
- Loop counters (k, k2, etc.) are declared in global scope
- Creates additional variables that persist after loop execution
- For loops often preferred for better scoping (covered later)
*/

// Program termination indicator
console.log('Program Ended......!');

// Program start indicator
console.log('Program Started');

// Basic for loop structure
for(let i = 0; i <= 5; i++) {   // Initialize counter (i=0), condition (i<=5), increment (i++)
    console.log(i);              // Print current value of i (0 to 5)
}                                // Loop ends when i becomes 6 (condition fails)

/*
For loop execution flow:
1. Initialization (i=0) - runs once at start
2. Condition check (i<=5) - before each iteration
3. Code block execution (console.log)
4. Increment step (i++) - after each iteration
*/

// Array of friend names
const friends = ['Pankaj', 'Rohit', 'Jeetu', 'Rashmi', 'Deepa']

// Loop through array with fixed length
for(let i2 = 0; i2 < 5; i2++) {  // Hardcoded length (5)
    console.log(friends[i2]);     // Access element at index i2
}

// Better approach using array length property
for(let i3 = 0; i3 < friends.length; i3++) {  // Dynamic length check
    console.log(friends[i3]);     // Safer for arrays that might change size
}

// Numbered list output using template literals
for(let i4 = 0; i4 < friends.length; i4++) {
    console.log(`${i4 + 1}. ${friends[i4]}`);  // Format: "1. Pankaj", etc.
}

// Append text to each element
for(let i5 = 0; i5 < friends.length; i5++) {
    console.log(friends[i5] + ' Coder');  // Concatenate string to each name
}

// Print even numbers (approach 1: increment by 2)
for(let i6 = 0; i6 < 10; i6 = i6 + 2) {  // Start at 0, increment by 2
    console.log(i6 + 2);                  // Print next even number (2,4,6,8,10)
}

// Print even numbers (approach 2: modulus operator)
for(let i7 = 0; i7 < 10; i7++) {         // Standard increment
    if(i7 % 2 === 0) {                   // Check if number is even
        console.log(i7 + 2);             // Print number + 2 (2,4,6,8,10)
    }  
}

// Print odd numbers
for(let i8 = 0; i8 <= 10; i8++) {       // Includes 10 in check
    if(i8 % 2 === 1) {                   // Check if number is odd
        console.log(i8);                 // Print odd number (1,3,5,7,9)
    }  
}

/*
Variable scoping notes:
- 'let' variables are block-scoped (only exist within loop)
- No memory pollution after loop ends
- Avoid 'var' which would leak to global scope
- Each loop can safely reuse 'i' variable name
*/

// Program termination indicator
console.log('Program Ended......!');

// Program start indicator
console.log('Program Started');

/*
Do-While Loop Explanation:
- Executes code block FIRST before checking condition
- Guaranteed to run at least once
- Structure: 
  do {
    // code to execute
  } while (condition);
*/

// Initialize counter variable
let j = 0

// Start do-while loop
do {
    // Execute this block FIRST before condition check
    console.log(j);    // Prints current value of j (0 on first iteration)
    j++                // Increment j by 1 (post-increment)
} while(j <= 5)        // Condition check AFTER block execution
/*
Loop behavior:
1. j=0: Print 0 → j becomes 1 → 1<=5 true → continue
2. j=1: Print 1 → j becomes 2 → 2<=5 true → continue
3. j=2: Print 2 → j becomes 3 → 3<=5 true → continue
4. j=3: Print 3 → j becomes 4 → 4<=5 true → continue
5. j=4: Print 4 → j becomes 5 → 5<=5 true → continue
6. j=5: Print 5 → j becomes 6 → 6<=5 false → exit
*/

// Initialize counter with value that fails condition
let j2 = 10

// Start do-while loop
do {
    // Block executes FIRST regardless of condition
    console.log(j2);    // Prints 10 even though condition will fail
    j2++                // Increment to 11 (though loop won't continue)
} while(j2 < 5)         // Condition check: 11 < 5 → false → exit after one iteration
/*
Key characteristic:
- Do-while always runs the block AT LEAST ONCE
- Here it prints 10 even though initial value fails condition
*/

/*
Memory Consideration:
- Loop counters (j, j2) are declared in global scope
- These variables persist after loop execution
- Can lead to namespace pollution in larger programs
- Alternative: for loops provide better variable scoping
*/

// Program termination indicator
console.log('Program Ended...........!');
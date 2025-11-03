
// 🔁 Break and Continue in JavaScript Loops

// break and continue are control statements used inside loops to change the normal flow of execution.


// 🛑 break Statement
// The break statement immediately stops a loop once a specific condition is met — even if the loop hasn't completed all iterations.

// Example:

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// Output: 0, 1, 2, 3, 4

// ✔ The loop stops when i reaches 5, so numbers after 4 are not printed.
// ✅ Use Case: Exit early — e.g., stop searching once a value is found.


// 🔄 continue Statement
// The continue statement skips the current iteration and moves to the next one, without stopping the loop.

// Example:

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Output: 0, 1, 2, 3, 4, 6, 7, 8, 9

// ✔ When i is 5, it’s skipped — but the loop continues running.
// ✅ Use Case: Skip unwanted values (e.g., ignore negative numbers or skip invalid data).


// 🎯 Using Labels with break and continue
// Labels allow you to specify which loop to break/continue, useful in nested loops.

// Example:

outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop;
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}

// Output:

// i: 0, j: 0  
// i: 0, j: 1  
// i: 0, j: 2  
// i: 1, j: 0


// ✔ When (i, j) = (1, 1), the labeled break stops both loops.
// 🔔 Note: Label usage is rare—only use when necessary for nested loops.


/*
✨ Quick Summary

| Statement                  | Meaning                | Effect                  |
| -------------------------- | ---------------------- | ----------------------- |
| `break`                    | Exit the loop          | Stops loop completely   |
| `continue`                 | Skip current iteration | Jumps to next iteration |
| Labeled `break`/`continue` | Target specific loop   | Useful in nested loops  |
*/


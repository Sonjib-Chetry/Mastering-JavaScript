
// Long-form addition method
let num = 1            // Declare variable with initial value
console.log(num);      // Output: 1

num = num + 2          // Manual addition: num + 2
console.log(num);      // Output: 3

num = num + 2          // Manual addition: num + 2
console.log(num);      // Output: 5


// Short-form addition method (Addition Assignment Operator)
let num1 = 1           // Declare variable with initial value
console.log(num1);     // Output: 1

num1 += 2              // Compound addition: equivalent to num1 = num1 + 2
console.log(num1);     // Output: 3

num1 += 2              // Compound addition again
console.log(num1);     // Output: 5


// Short-form subtraction method (Subtraction Assignment Operator)
let num2 = 10          // Declare variable with initial value
console.log(num2);     // Output: 10

num2 -= 2              // Compound subtraction: equivalent to num2 = num2 - 2
console.log(num2);     // Output: 8

num2 -= 2              // Compound subtraction again
console.log(num2);     // Output: 6


// Short-form remainder method (Remainder Assignment Operator)
let num3 = 10          // Declare variable with initial value
console.log(num3);     // Output: 10

num3 %= 2              // Compound remainder: equivalent to num3 = num3 % 2
console.log(num3);     // Output: 0 (10 divided by 2 has 0 remainder)

num3 %= 2              // Compound remainder again (0 % 2)
console.log(num3);     // Output: 0


// Short-form multiplication method (Multiplication Assignment Operator)
let num4 = 10          // Declare variable with initial value
console.log(num4);     // Output: 10

num4 *= 2              // Compound multiplication: equivalent to num4 = num4 * 2
console.log(num4);     // Output: 20

num4 *= 2              // Compound multiplication again
console.log(num4);     // Output: 40


// Short-form division method (Division Assignment Operator)
let num5 = 10          // Declare variable with initial value
console.log(num5);     // Output: 10

num5 /= 2              // Compound division: equivalent to num5 = num5 / 2
console.log(num5);     // Output: 5

num5 /= 2              // Compound division again
console.log(num5);     // Output: 2.5


// Short-form exponentiation method (Exponentiation Assignment Operator)
let num6 = 10          // Declare variable with initial value
console.log(num6);     // Output: 10

num6 **= 2             // Compound exponentiation: equivalent to num6 = num6 ** 2
console.log(num6);     // Output: 100 (10 squared)

num6 **= 2             // Compound exponentiation again
console.log(num6);     // Output: 10000 (100 squared)


// Prefix Increment Operator (pre-increment)
let num7 = 10          // Declare variable with initial value
console.log(num7);     // Output: 10

++num7                 // Pre-increment: increments THEN returns value
console.log(num7);     // Output: 11

++num7                 // Pre-increment again
console.log(num7);     // Output: 12


// Postfix Increment Operator (post-increment)
let num9 = 10          // Declare variable with initial value
let newNum1 = num9++   // Post-increment: returns ORIGINAL value THEN increments
/* 
newNum1 gets original value (10)
num9 becomes 11 after assignment
*/
console.log(newNum1);  // Output: 10 
console.log(num9);     // Output: 11

newNum1 = num9++       // Post-increment again
/* 
newNum1 gets current num9 value (11)
num9 becomes 12 after assignment
*/
console.log(newNum1);  // Output: 11
console.log(num9);     // Output: 12


// Prefix Decrement Operator (pre-decrement)
let num8 = 10          // Declare variable with initial value
console.log(num8);     // Output: 10

--num8                 // Pre-decrement: decrements THEN returns value
console.log(num8);     // Output: 9

--num8                 // Pre-decrement again
console.log(num8);     // Output: 8


// Postfix Decrement Operator (post-decrement)
let num10 = 10         // Declare variable with initial value
let newNum2 = num10--  // Post-decrement: returns ORIGINAL value THEN decrements
/* 
newNum2 gets original value (10)
num10 becomes 9 after assignment
*/
console.log(newNum2);  // Output: 10
console.log(num10);    // Output: 9

newNum2 = num10--      // Post-decrement again
/* 
newNum2 gets current num10 value (9)
num10 becomes 8 after assignment
*/
console.log(newNum2);  // Output: 9
console.log(num10);    // Output: 8
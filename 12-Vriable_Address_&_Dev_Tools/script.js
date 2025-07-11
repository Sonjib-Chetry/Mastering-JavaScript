
// Declares a constant variable 'userFirstName' and assigns a string value
// Constants cannot be reassigned and must be initialized during declaration

const userFirstName = 'Sonex'

// Declares a constant variable 'userAge' and assigns a numerical value
// Numbers in JavaScript are double-precision 64-bit binary format IEEE 754 values

const userAge = 32

// Declares a constant variable 'isWorking' and assigns a boolean value
// Booleans represent one of two possible states: true or false

const isWorking = true

/* 
   The following comment block demonstrates JavaScript memory behavior:
   - How to use DevTools Memory tab to inspect heap allocations
   - How primitive values are stored in memory
   - How variable reassignment affects memory addresses
   - How identical primitive values may share memory references
   - Note: Memory addresses may change between page reloads
*/

/*
first open memory tab in dev tools
click heap snapshot including numbers and click take snapshot
ctrl + f and find any of your variable value
you will find that a memory is created in respective data-type folder like string, number, etc and a value is stored with its address
in above case if you search with Sonex it will shown under string folder
in Retainer > Object you will find system/context address
now copy the system/context address and search with ctrl + f
open the system/context address and you will find all variable name, value and their address
if two or more variables have exact same value than only one memory and address created
every time you refresh the page the address may change
*/

// Declares a mutable variable 'abc' using 'var' and initializes with a string
// 'var' has function scope and is hoisted (unlike 'const' and 'let')

var abc = 'facebook'

// Reassigns 'abc' to a new string value, demonstrating:
// 1. Original value ('facebook') becomes eligible for garbage collection
// 2. New value ('whatsaap') gets allocated in memory

abc = 'whatsaap' // JS memory will delete old value of a variable if it was replaced with new value
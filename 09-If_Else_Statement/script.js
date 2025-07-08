
// Define constant variables with user information
const userName1 = 'Sonex';   // Stores first user's name as a string
const userAge1 = 32;         // Stores first user's age as a number
const userAge2 = 23;         // Stores second user's age as a number

// Output user information to console
console.log(`Name: ${userName1}`);  // Prints first user's name using template literal
console.log(`Age: ${userAge1}`);    // Prints first user's age using template literal

// Demonstrate basic if statement behavior
if(true) console.log('My name is Sonex Karki');  // Always executes since condition is truthy
if(false) console.log('My name is Sonex Karki'); // Never executes due to false condition

// Check age range conditions
if(userAge1 >= 24 && userAge1 <=60) console.log('true condition will print');  // Executes since 32 is in [24,60]
if(userAge2 >= 24 && userAge2 <=60) console.log('false condition will not print');  // Skips since 23 is outside range

// Demonstrate if statement without code block {}
if(userAge2 >= 24 && userAge2 <= 60)
    console.log('User is a working professional'); // Condition fails (23), this line skips
console.log('If 2nd line code run');   // Always executes - not part of if block

// Proper if statement with code block {}
if(userAge1 >= 24 && userAge1 <=60) {
    console.log('User is a working professional');  // Executes (32 meets condition)
    console.log('If 2nd line code run');            // Also executes within code block
}

//-------------------------------------------------

// Interactive section with user input

// Get user input with default values using logical OR (||)
const userName = prompt('Please enter your name') || 'Sonex Karki';  // Uses default name if input empty
const userAge = +prompt('Please enter your age') || 32;  // Converts input to number, uses 32 if invalid/empty
/* 
  Note about age conversion: 
  - Unary plus (+) converts string input to number
  - Empty/NaN input falls back to 32
  - Important: 0 and -0 are falsy and will trigger default
*/

/*
--Alternative: Below code also can be used to store default values

let userName = prompt('Please enter your name');
let userAge = +prompt('Please enter your age');


if (!userName) {
    userName = 'Sonex Karki'
}
if (!userAge) {
    userAge = 32
}
*/

// Age-based classification using if-else ladder
if(userAge >=1 && userAge <=4) {
    // Handle toddler/preschool age group
    console.log(`Name: ${userName}`);
    console.log(`Age: ${userAge}`);
    console.log(`${userName} is a child`);
}

else if(userAge >=5 && userAge <=17) {
    // Handle school-age group
    console.log(`Name: ${userName}`);
    console.log(`Age: ${userAge}`);
    console.log(`${userName} is a school student`);
}

else if(userAge >=18 && userAge <=23) {
    // Handle college-age group
    console.log(`Name: ${userName}`);
    console.log(`Age: ${userAge}`);    
    console.log(`${userName} is a college student`);
}

else if(userAge >=24 && userAge <=60) {
    // Handle working adult group
    console.log(`Name: ${userName}`);
    console.log(`Age: ${userAge}`);
    console.log(`${userName} is a working professional`);
}

else if(userAge >=61 && userAge <=120) {
    // Handle retirement age group
    console.log(`Name: ${userName}`);
    console.log(`Age: ${userAge}`);
    console.log(`${userName} is a retired`);
}

else if(userAge >=121) {
    // Handle unrealistic age input
    console.log(`Name: ${userName}`);
    console.log(`Age: ${userAge}`);
    console.log(`${userName} is already dead`);
}

else {
    // Catch-all for invalid inputs (negative, zero, non-numeric)
    console.log(`Please enter a valid age`);   // Handles cases like -23, NaN, etc.
}

// Final program termination message
console.log('Program Ended.......!');  // Indicates end of program execution
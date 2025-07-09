
// Prompt user to enter a day number (0-6) and convert input string to number
const dayNumber = +prompt('Please enter a day number');

// ----- Using if/else statements for day validation -----
// Check for Sunday (0)
if (dayNumber === 0) {
  console.log('It is Sunday Today')
} 
// Check for Monday (1)
else if (dayNumber === 1) {
  console.log('It is Monday Today')
} 
// Check for Tuesday (2)
else if (dayNumber === 2) {
  console.log('It is Tuesday Today')
} 
// Check for Wednesday (3)
else if (dayNumber === 3) {
  console.log('It is Wednesday Today')
} 
// Check for Thursday (4)
else if (dayNumber === 4) {
  console.log('It is Thursday Today')
} 
// Check for Friday (5)
else if (dayNumber === 5) {
  console.log('It is Friday Today')
} 
// Check for Saturday (6)
else if (dayNumber === 6) {
  console.log('It is Saturday Today')
} 
// Handle invalid day numbers
else {
  console.log('Please Enter a Valid Day Number')
}


// ----- Equivalent implementation using switch statement -----
switch(dayNumber) {
    // Sunday case
    case 0: console.log('It is Sunday Today');
    break
    // Monday case
    case 1: console.log('It is Monday Today');
    break
    // Tuesday case
    case 2: console.log('It is Tuesday Today');
    break
    // Wednesday case
    case 3: console.log('It is Wednesday Today');
    break
    // Thursday case
    case 4: console.log('It is Thursday Today');
    break
    // Friday case
    case 5: console.log('It is Friday Today');
    break
    // Saturday case
    case 6: console.log('It is Saturday Today');
    break
    // Default case for invalid input
    default: console.log('Please Enter a Valid Day Number')
}


// ----- Switch statement with comparison expressions -----
// Get user name with default fallback if empty input
const userName = prompt('Please enter your name') || 'Sonex Karki';
// Get user age with default fallback if empty input
const userAge = +prompt('Please enter your age') || 32; 

// Using switch(true) to evaluate conditional cases
switch(true) {
    // Age 1-4: Toddler
    case (userAge >=1 && userAge <=4):
        console.log(`Name: ${userName}`);
        console.log(`Age: ${userAge}`);
        console.log(`${userName} is a child`);
    break
    // Age 5-17: School student
    case (userAge >=5 && userAge <=17):
        console.log(`Name: ${userName}`);
        console.log(`Age: ${userAge}`);
        console.log(`${userName} is a school student`);
    break
    // Age 18-23: College student
    case (userAge >=18 && userAge <=23):
        console.log(`Name: ${userName}`);
        console.log(`Age: ${userAge}`);    
        console.log(`${userName} is a college student`);
    break
    // Age 24-60: Working professional
    case (userAge >=24 && userAge <=60):
        console.log(`Name: ${userName}`);
        console.log(`Age: ${userAge}`);
        console.log(`${userName} is a working professional`);
    break
    // Age 61-120: Retired
    case (userAge >=61 && userAge <=120):
        console.log(`Name: ${userName}`);
        console.log(`Age: ${userAge}`);
        console.log(`${userName} is a retired`);
    break
    // Age 121+: Deceased (edge case)
    case (userAge >=121):
        console.log(`Name: ${userName}`);
        console.log(`Age: ${userAge}`);
        console.log(`${userName} is already dead`);
    break
    // Handle invalid age input
    default: console.log(`Please enter a valid age`);
}


// ----- Grade evaluation using switch -----
// Prompt for grade letter (case-insensitive)
const grade = prompt('Please enter your grade between A to E');

// Convert input to uppercase for consistent comparison
switch (grade.toUpperCase()) {
  // A grade range
  case 'A':
    console.log('Your score is between 85% to 100%.');
    break
  // B grade range
  case 'B':
    console.log('Your score is between 75% to 85%');
    break
  // C grade range
  case 'C':
    console.log('Your score is between 60% to 75%');
    break
  // D grade range
  case 'D':
    console.log('Your score is between 50% to 60%');
    break
  // E grade range
  case 'E':
    console.log('Your score is between 30% to 50%');
    break
  // Failed or invalid input
  default:
    console.log('Sorry, you failed.');
}

// Program termination message
console.log('Program Ended...!');
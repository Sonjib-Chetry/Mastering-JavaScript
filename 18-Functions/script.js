
// Program start indicator
console.log('Program Started...........!');

/*
Function Basics:
- Reusable code blocks that perform specific tasks
- Can accept inputs (parameters) and return outputs
- Help organize code and avoid repetition
*/

// Basic function without parameters or return value
function myIntro() {              // Function declaration
    console.log('Hi, My name is Sonex Karki.');  // Execution statements
    console.log('I am a web developer.');
    console.log('I am from Assam');
}                                // Implicitly returns undefined

myIntro();  // Function invocation - executes the code block
/* 
Note: 
- Function name follows camelCase convention
- Verb naming indicates action/behavior
- No return statement → returns undefined
*/

// Function with explicit return value
function myIntro1() {   
    console.log('Hi, My name is Sonex Karki.');
    console.log('I am a web developer.');
    console.log('I am from Assam');

    return 'Sonex Intro'   // Explicit return statement
}

myIntro1();   // Calls function but ignores return value
console.log(myIntro1());  // Calls function and logs return value

/*
Parameter vs Argument:
- Parameter: Variable in function definition (placeholder)
- Argument: Actual value passed during function call
*/

// Function with single parameter
function myIntro2(userDetails) {     // userDetails is parameter
    console.log(`Hi, My name is ${userDetails}.`);
    console.log('I am a web developer.');
    console.log('I am from Assam');

    return 'User Intro'  
}

console.log(myIntro2('Sonex'));  // 'Sonex' is argument
console.log(myIntro2('Sonjib')); // 'Sonjib' is argument
console.log(myIntro2());         // No argument → undefined

// Default parameter values
function myIntro3(userDetails = 'Coder') {  // Default value if undefined
    console.log(`Hi, My name is ${userDetails}.`);
    console.log('I am a web developer.');
    console.log('I am from Assam');

    return 'User Intro'  
}

console.log(myIntro3());  // Uses default 'Coder' value

/*
Important:
- Parameters are function-scoped (not accessible outside)
- Attempting console.log(userDetails) outside would throw ReferenceError
*/

// Multiple parameters with defaults
function myIntro4(userDetails = 'Coder', profession = 'Engieer') {     
    console.log(`Hi, My name is ${userDetails}.`);  
    console.log(`I am a ${profession}`);           
    console.log('I am from Assam');

    return 'User Intro'  
}

console.log(myIntro4('Rohit', 'Computer Engineer'));  // Positional arguments

// Mathematical function example
function sumNumber(a = 0, b = 0) {  // Default values 0
    console.log('a is = ' + a);
    console.log('b is = ' + b);

    return (`a + b = ${a + b}`)  // Returns template literal
}

const sumOfNumbers = sumNumber(10, 5)  // Store return value
console.log(sumOfNumbers);  // "a + b = 15"

/*
Return Values:
- Can return any valid JavaScript type
- Functions without return statement return undefined
- Execution stops immediately after return
*/

// Comprehensive user intro function
function myIntro5(Name = 'Coder', profession = 'Engieer', state = 'Delhi') {      
    console.log(`Name = Hi, My name is ${Name}.`);  
    console.log(`Profession = I am a ${profession}.`);           
    console.log(`State = I am from ${state}.`);

    return (`User Intro = Hi, My name is ${Name}. I am a ${profession}. I am from ${state}.`) 
}

const userIntro = myIntro5('Rohit', 'Computer Engineer', 'Mumbai');
console.log(userIntro);  // Logs formatted return string

// Expressions as arguments
const sumOfNumbers1 = sumNumber(10 + 5, 5)  // First argument evaluates to 15
console.log(sumOfNumbers1);  // "a + b = 20"

// Nested function calls as arguments
function sumNumber1(a = 0, b = 0) {
    return a + b  // Simple numeric return
}

const sumOfNumbers2 = sumNumber1(
    sumNumber1(10 + 5, 5),       // First argument: 15 + 5 = 20
    sumNumber1(5 + 5, 20 + 5)    // Second argument: 10 + 25 = 35
);                               // Final: 20 + 35 = 55
console.log(sumOfNumbers2);  // 55

// Program termination indicator
console.log('Program Ended...........!');
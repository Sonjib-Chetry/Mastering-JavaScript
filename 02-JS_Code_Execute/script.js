
console.log(firstName);
console.log(typeof firstName);

var firstName = 'Sonjib'
let lastName = 'Chetry'
let age = 32
const yearOfBirth = 1992

console.log(firstName);

let userIntro = 'Hi, my name is ' + firstName + ' ' + lastName

console.log(userIntro);


//  first JS scan the code and create memory for each variables with undefine value and undefined data-type
//  2nd JS execute the code and enter values and data-type in the variables

// The Temporal Dead Zone (TDZ) in JavaScript is a period between entering a 
// --scope and the actual declaration of a variable using let or const, during 
// --which attempting to access the variable results in a ReferenceError
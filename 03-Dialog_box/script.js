
// alert('Hi, are you sure')
// confirm('Would you like to proceed')
// prompt('Please enter your age')

const alertResult = alert('Hi, are you sure')
const isConfirm = confirm('Would you like to proceed')
const userAge = prompt('Please enter your age')



// JavaScript Popup Boxes



// 1 Alert Box:-

// An alert box is often used if you want to make sure information comes through to the user.
// When an alert box pops up, the user will have to click "OK" to proceed.

// Syntax:-

// window.alert("sometext");

// Example:- alert("I am an alert box!");
// The window.alert() method can be written without the window prefix.



// 2 Confirm Box:-

// A confirm box is often used if you want the user to verify or accept something.
// When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed.
// If the user clicks "OK", the box returns true. If the user clicks "Cancel", the box returns false.

// Syntax:-

// window.confirm("sometext");

// Example:- if (confirm("Press a button!")) {
//     txt = "You pressed OK!";
//   } else {
//     txt = "You pressed Cancel!";
//   }
// The window.confirm() method can be written without the window prefix.



// 3 Prompt Box:-

// A prompt box is often used if you want the user to input a value before entering a page.
// When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.
// If the user clicks "OK" the box returns the input value. If the user clicks "Cancel" the box returns null.

// Syntax:-

// window.prompt("sometext","defaultText");

// Example:- let person = prompt("Please enter your name", "Harry Potter");
// let text;
// if (person == null || person == "") {
//   text = "User cancelled the prompt.";
// } else {
//   text = "Hello " + person + "! How are you today?";
// }
// The window.prompt() method can be written without the window prefix.




// Line Breaks:-

// To display line breaks inside a popup box, use a back-slash followed by the character n.

// Example:- alert("Hello\nHow are you?");
//In JavaScript, an event listener is a way to make your web page respond 
// when something happens — like a user clicking a button, hovering over a link, or typing in a form.

const btn = document.getElementById("myBtn");

btn.addEventListener("click", function () {
    alert("Button clicked!");
});
//"click" is the event type.
//The second argument is a callback function that runs when the event happens.

/*
| Event Type  | Description                   |
| ----------- | ----------------------------- |
| `click`     | When user clicks an element   |
| `mouseover` | When mouse hovers over it     |
| `mouseout`  | When mouse leaves the element |
| `keydown`   | When a key is pressed         |
| `submit`    | When a form is submitted      |
| `change`    | When input value changes      |
*/


//1. Form Events in JavaScript
//Form events let you respond to user actions in a form — like typing, submitting, changing values, etc.

//Common Form Events:
/*
| Event    | Description                                   |
| -------- | --------------------------------------------- |
| `submit` | Triggered when a form is submitted            |
| `change` | Triggered when a form element's value changes |
| `input`  | Triggered when user types in an input field   |
| `focus`  | Triggered when an input gains focus           |
| `blur`   | Triggered when an input loses focus           |
*/


//Example: Handling Form submit event

const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();    // Prevent form from refreshing the page
    
    const usernameVar = form.username.value;  //storing form values, we will learn more about this later
    console.log("Form submitted with username:", usernameVar);
});
// event.preventDefault() stops the form from actually submitting and reloading the page.
// form.username.value accesses the input value.


//Example: input and change event

const input = document.getElementById("nameInput");

input.addEventListener("input", function (event) {
    console.log("Current value:", event.target.value);
});

input.addEventListener("change", function (e) {
    console.log("Changed to:", e.target.value);
});
// input: Fires immediately when user types.
// change: Fires after user moves away from the field.


// 2. Event Object in JavaScript
// When an event happens (like click, input, submit), JavaScript automatically 
// passes an event object to the event handler.


// /Useful properties of event object:
/*
| Property                  | Description                            |
| ------------------------- | -------------------------------------- |
| `event.type`              | Type of event (e.g. "click", "submit") |
| `event.target`            | The element that triggered the event   |
| `event.preventDefault()`  | Prevents default browser behavior      |
| `event.stopPropagation()` | Stops bubbling to parent elements      |
*/

//Example: Using Event Object

const btn1 = document.getElementById("myBtn1");

btn1.addEventListener("click", function(event) {
    console.log("Event type:", event.type);           // click
    console.log("Event target:", event.target);       // <button> element
    event.target.textContent = "Clicked!";
});

//Example: submit Event with Event Object

const form1 = document.getElementById("userForm");

form1.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Submitted from:", event.target); // entire form
    console.log("Email entered:", event.target.email.value);
});
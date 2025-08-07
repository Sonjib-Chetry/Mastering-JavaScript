
/*
✅ What is BOM?
BOM stands for Browser Object Model.
It allows JavaScript to interact with the browser window, not just the webpage.

| Feature     | BOM                              | DOM                             |
| ----------- | -------------------------------- | ------------------------------- |
| Deals with  | Browser window, navigation, etc. | Webpage content (HTML elements) |
| Main object | `window`                         | `document`                      |
| Example     | `alert()`, `location.href`       | `document.getElementById()`     |
*/

// 🧩 Key Components of the BOM (with Examples)

//🔸 1. window Object
// It is the global object in the browser. Everything in BOM (and even some DOM) is accessed via window.

console.log(window); // Logs the entire window object
// alert("Hello");   // Same as window.alert("Hello")


//🔸 2. navigator Object
// Gives information about the browser and OS.

console.log(navigator.userAgent); // Browser + OS info
console.log(navigator.language);  // User's language
console.log(navigator.onLine);    // true/false (online status)


//🔸 3. screen Object
// Gives info about the user's device screen.

console.log(screen.width);  // Full screen width
console.log(screen.height); // Full screen height


//🔸 4. location Object
// Controls the URL and redirection.

console.log(location.href);      // Full URL
console.log(location.hostname); // Domain name
console.log(location.pathname); // URL path
console.log(location.protocol); // http:, https:

// Redirect:
// location.href = "https://google.com"; // Redirects the page

// 🔸 5. history Object
// Used to navigate browser history.

console.log(history.length); // Number of entries in history

// history.back();     // Go one step back
// history.forward();  // Go one step forward
// history.go(-2);     // Go 2 steps back

//🔸 6. Popup Boxes (alert, confirm, prompt)
// Part of window but commonly used.

// alert("This is an alert!");
// confirm("Are you sure?");       // Returns true/false
// prompt("Enter your name:");     // Gets user input

// 🔸 7. Timers – setTimeout() and setInterval()
// Used to schedule tasks.

setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);

// setInterval(() => {
//   console.log("Runs every 1 second");
// }, 1000);

//🔸 8. Window Dimensions

console.log(window.innerWidth);  // Viewport width
console.log(window.innerHeight); // Viewport height

console.log(window.outerWidth);  // Full window (including UI)
console.log(window.outerHeight);

//🔸 9. open() and close()
// Used to open and close new tabs or popup windows.

// const newWindow = window.open("https://example.com", "_blank", "width=500,height=400");

// Close after 10 seconds
// setTimeout(() => {
//   newWindow.close();
// }, 10000);

//🔸 10. resizeTo() and resizeBy()
// Used to resize popup windows (won’t work on main tabs).

// newWindow.resizeBy(100, 50);  // Increase size
// newWindow.resizeTo(800, 600); // Set exact size

//Works only on windows opened using window.open().

//🔸 11. moveTo() and moveBy()
// Used to move popup windows.

// newWindow.moveTo(100, 100); // Move to specific screen coordinates
// newWindow.moveBy(50, 50);   // Move relative to current position

//🔸 12. Scroll Methods
// Used to programmatically scroll the page.

window.scrollTo(0, 500);  // Scroll to y=500
window.scrollBy(0, 100);  // Scroll down by 100px
window.scroll(0, 100);    // Same as scrollTo

//🔸 13. print()
// Triggers the browser’s print dialog.

// window.print(); // Opens print dialog

//🔸 14. document (Not part of BOM, but related)
// While document is part of the DOM, it’s still commonly accessed from the BOM window object.

console.log(document.title);     // Get page title
// document.body.style.background = "lightblue"; // Change background


//🧠 Advanced Notes:
// Security restrictions: Methods like resizeTo, moveTo, etc. only work on same-origin popups.
// window is the global object in browser — console.log(this === window); // true
// Some features of BOM are blocked by popup blockers or browser permissions.

/*
✅ Summary Table

| Feature            | Example                                     |
| ------------------ | ------------------------------------------- |
| Alerts & Prompts   | `alert()`, `confirm()`, `prompt()`          |
| URL Navigation     | `location.href`, `location.replace()`       |
| Browser Info       | `navigator.userAgent`, `navigator.language` |
| Screen Info        | `screen.width`, `screen.height`             |
| Timers             | `setTimeout()`, `setInterval()`             |
| History Navigation | `history.back()`, `history.go(-1)`          |
| Scroll Control     | `scrollTo()`, `scrollBy()`                  |
| Popups             | `open()`, `close()`, `moveTo()`, etc.       |
| Window Size        | `innerWidth`, `outerWidth`, `resizeTo()`    |
| Printing           | `print()`                                   |
*/

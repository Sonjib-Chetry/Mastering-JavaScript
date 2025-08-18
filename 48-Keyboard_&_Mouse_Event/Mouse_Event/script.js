//Common Mouse Events in JavaScript
/*
| Event Name    | Triggered When...                                  |
| ------------- | -------------------------------------------------- |
| `click`       | The mouse button is clicked                        |
| `dblclick`    | The mouse is double-clicked                        |
| `mousedown`   | A mouse button is pressed down                     |
| `mouseup`     | A mouse button is released                         |
| `mousemove`   | The mouse is moved                                 |
| `mouseover`   | The pointer moves onto an element (and children)   |
| `mouseout`    | The pointer leaves an element (and children)       |
| `mouseenter`  | The pointer enters an element (excluding children) |
| `mouseleave`  | The pointer leaves an element (excluding children) |
| `contextmenu` | Right-click is performed (shows context menu)      |
*/


const box = document.getElementById("box");  //uncomment below code once at a time to see result in browser console.

box.addEventListener("click", function() {
    console.log("Box clicked");
    box.style.backgroundColor = "lightgreen";
});

// box.addEventListener("dblclick", function() {
//     console.log("Box double-clicked");
//     box.style.backgroundColor = "orange";
// });

// box.addEventListener("mousedown", function() {
//     console.log("Mouse down-key press in the box");
//     box.style.backgroundColor = "red";
// });

// box.addEventListener("mouseup", function() {
//     console.log("Mouse up-key press in the box");
//     box.style.backgroundColor = "red";
// });

// box.addEventListener("mouseenter", function() {
//     console.log("Mouse enter the box");
//     box.style.backgroundColor = "blue";
// });

// box.addEventListener("mouseleave", function() {
//     console.log("Mouse left the box");
//     box.style.backgroundColor = "blue";
// });

// box.addEventListener("contextmenu", function(event) {
//     event.preventDefault(); // prevent default right-click menu
//     console.log("Right-clicked on the box");
// });

// box.addEventListener("wheel", function() {
//     console.log("Mouse-wheel on the box");
// });


// Notes:
// Use event.clientX and event.clientY to get mouse position.
// Use event.button to detect which mouse button was used (0 = left, 2 = right).
// Always prevent default behavior if you're customizing context menus.
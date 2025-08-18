

// 1. keyup
// Triggered when: A key is released.
// Common use: Finalizing input after the user stops typing, like validating an input field.

document.addEventListener("keyup", function(event) {
    console.log(event.key);
    console.log(event.code);
});  //press any kye inside DOM to see the result in browser console


// 2. keydown
// Triggered when: A key is pressed down.
// Fires repeatedly while the key is held down (depending on the OS/browser).
// Common use: Detecting key presses in real-time (e.g., moving a character in a game).

// document.addEventListener("keydown", function(event) {
//     console.log(event.key);
//     console.log(event.code);
// });  //press any kye inside DOM to see the result in browser console


// 3. keypress (Deprecated)
// Triggered when: A character key is pressed down.
// Note: It only works for printable characters and is now deprecated.
// Use instead: keydown and keyup.

const header = document.getElementById('header')

header.addEventListener("keypress", function(event) {
    const output = document.getElementById("output");
      
    output.innerHTML = `
        <strong>Character pressed:</strong> ${event.key} <br>
        <strong>Key code:</strong> ${event.code}
      `;

    // Example: Do something when user types "a"
    if (event.key === "a") {
        alert("You pressed 'a'");
    }
});


// 🔹 1. Event Simulation
// ✅ Basic Concept

// Event simulation means programmatically triggering an event on an element, 
// instead of waiting for a real user interaction.

// Example: .click(), .focus(), .blur(), dispatchEvent() etc.

// It’s useful when:
// You want to test UI behavior without manual clicking.
// You need to trigger workflows automatically (e.g., auto-filling forms, auto-opening dropdowns).

const outer = document.getElementById("outer")

outer.addEventListener("click", function() {
    console.log("Outer DIV clicked (bubbling)");
});

// Simulate the click
outer.click(); // Triggers the click handler programmatically


// 🔎 Explanation:
// You add a click listener on the #outer div.
// Normally, this would only run if the user clicks it.
// But by calling outer.click(), you simulate the user 
// clicking it — so "Outer DIV clicked (bubbling)" is logged in console automatically.


// ⚡ Advanced Simulation
// If you want to simulate events beyond .click(), use dispatchEvent:

const inner = document.getElementById("inner");

// Add the listener BEFORE dispatching
inner.addEventListener("mouseover", function () {
  console.log("Inner DIV mouseover triggered!");
});

// Create a bubbling event
const mouseoverEvent = new Event('mouseover', { bubbles: true, cancelable: true });

// Dispatch it on inner (so its own listener catches it)
inner.dispatchEvent(mouseoverEvent);

// or
/*
const mouseEvent = new MouseEvent("mouseover", {
  bubbles: true,
  cancelable: true,
  clientX: 100,
  clientY: 200
});

inner.dispatchEvent(mouseEvent);
*/

// Or simulate keyboard typing:

const input = document.createElement('input');
document.body.appendChild(input);

input.addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

const keyEvent = new KeyboardEvent('keydown', { key: '1' });
input.dispatchEvent(keyEvent);



// 🔹 2. Event Delegation
// ✅ Basic Concept

// Instead of attaching an event listener to each child element, you attach one listener to a parent element.
// Thanks to event bubbling, when a child is clicked, the event bubbles 
// up to the parent — and you can check which child triggered it.
// Advantage: Works for dynamically added elements too.

document.getElementById('menu').addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    alert(`You clicked on ${event.target.textContent}`);
  }
});


// 🔎 Explanation
// You add one click listener to the parent <ul id="menu">.
// When you click on any <li>, the click event bubbles up to <ul>.
// Inside the handler, event.target tells you which child was clicked.
// If it’s an <li>, you show an alert with its text (Home, About, Contact).


// Without delegation, you’d have to do:
/*
document.querySelectorAll("#menu li").forEach(li => {
    li.addEventListener("click", function() {
        alert(`You clicked ${this.textContent}`);
    });
});
*/
// This means multiple listeners (less efficient, especially if list grows dynamically).


// ⚡ Advanced Delegation Example (Dynamic Elements)
// Let’s say you add a new menu item dynamically:

const newItem = document.createElement('li');
newItem.textContent = "Blog";
newItem.style.padding = "10px";
newItem.style.background = "lightblue";
document.getElementById('menu').appendChild(newItem);


// Even though no event listener was added to this <li>, 
// delegation still works, because the <ul> is handling all clicks.

/*
🔹 Comparison & Use Cases:
| Feature          | Event Simulation                            | Event Delegation                                       |
| ---------------- | ------------------------------------------- | ------------------------------------------------------ |
| **What it does** | Triggers events programmatically            | Handles events from multiple child elements via parent |
| **Use case**     | Testing, automation, triggering UI behavior | Efficient event handling, dynamic elements             |
| **Efficiency**   | One-off action                              | Avoids multiple listeners                              |
| **Example**      | `outer.click()` simulating user click       | Single listener on `<ul>` for all `<li>` children      |
*/

/*
🎯 Final Takeaways:

Event Simulation is about firing events in code as if the user triggered them.
Simple: .click()
Advanced: dispatchEvent(new KeyboardEvent(...))

Event Delegation is about handling many children with one parent listener.
Uses event bubbling.
Works for dynamically added elements.

They often work together:
You can simulate a click on a child and have it handled by delegation at the parent.
*/
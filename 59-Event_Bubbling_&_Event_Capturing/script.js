
//🔹 1. What is Event Propagation?

// When you interact with an element in the DOM (like clicking a button inside a <div>), 
// the event doesn’t just stay at that element. Instead, it propagates through its ancestors 
// (parent, grandparent, etc.).

// There are three phases:
// Capturing Phase – The event travels top-down: document → parent → target.
// Target Phase – The event actually happens on the element that was clicked (the target).
// Bubbling Phase – The event bubbles bottom-up: target → parent → document.



// 🔹 2. Event Bubbling (Default Behavior)
// By default, most browsers use bubbling.
// 👉 Flow: Target → Parent → Document

document.getElementById("outer").addEventListener("click", function() {
    console.log("Outer DIV clicked (bubbling)");
});

document.getElementById("inner").addEventListener("click", function() {
    console.log("Inner DIV clicked (bubbling)");
});


// ✅ What happens if you click #inner?
// First, inner gets the event → logs "Inner DIV clicked".
// Then, the event bubbles up to outer → logs "Outer DIV clicked".
// 👉 Unless you stop it with:

// event.stopPropagation();



// 🔹 3. Event Capturing (Rarely Used)
// If you want the reverse order (top → down), you must explicitly enable capturing.
// 👉 Flow: Document → Parent → Target

document.getElementById("outer1").addEventListener("click", function() {
  console.log("Outer DIV clicked (capturing)");
}, true); // true = capture phase

document.getElementById("inner1").addEventListener("click", function() {
  console.log("Inner DIV clicked (capturing)");
}, true);


// ✅ What happens if you click #inner1?
// First, outer1 logs "Outer DIV clicked (capturing)".
// Then, event travels down to inner1 → logs "Inner DIV clicked (capturing)".
// 👉 You can still use event.stopPropagation() to stop it mid-way.


/*
🔹 4. Comparing Bubbling vs Capturing
| Phase    | Bubbling                   | Capturing                                   |
| -------- | -------------------------- | ------------------------------------------- |
| Order    | Target → Parent → Document | Document → Parent → Target                  |
| Default? | ✅ Yes                      | ❌ No (must enable with `true`)              |
| Usage    | Most common                | Rare (specific cases like global listeners) |
*/


//🔹 5. Advanced Use-Cases

// (A) stopPropagation()
// Prevents the event from going further (whether bubbling or capturing).

document.getElementById("div2").addEventListener("click", function(event) {
    console.log("Inner div clicked but stop Propagation to outer div");
    event.stopPropagation(); // stops outer from firing
});


// (B) stopImmediatePropagation()
// Prevents other listeners on the same element from firing.

document.getElementById("div3").addEventListener("click", function(event) {
    console.log("First listener stop Immediate Propagation");
    event.stopImmediatePropagation();
});
document.getElementById("div3").addEventListener("click", function() {
    console.log("Second listener"); // ❌ will never run
});


// (C) { once: true }
// Makes the event run only once.

document.getElementById("div4").addEventListener("click", function() {
  console.log("Outer clicked once only");
}, { once: true });

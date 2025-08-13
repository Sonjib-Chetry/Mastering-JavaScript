
// 1. Accessing the Parent Element
// Basic:
// The parentElement property returns the direct parent of an element in the DOM.
// Returns null if the node has no parent element or if the parent is not an element (like document).
/*
<div id="parent">
  <p id="child">Hello</p>
</div>
*/

let child = document.getElementById("child");
console.log(child.parentElement); 
// Outputs: <div id="parent">...</div>

// Advanced:
// parentNode also works but can return other node types (like document fragment, text node).
// To climb multiple levels up, chain .parentElement.parentElement.

console.log(child.parentElement.parentElement); // Might return <body> or null


// 2. Accessing Children Elements
// Basic:
// children gives a live HTMLCollection of element children (no text nodes).
// childNodes includes text, comment, and element nodes.
/*
<div id="box">
  <p>One</p>
  <p>Two</p>
</div>
*/

let box = document.getElementById("box");
console.log(box.children); // HTMLCollection(2) [p, p]
console.log(box.children[0].innerText); // "One"

//Advanced:
// Convert children to an array with Array.from() for array methods.
// Access first/last child elements:

console.log(box.firstElementChild); // <p>One</p>
console.log(box.lastElementChild);  // <p>Two</p>


// 3. Accessing Sibling Elements
// Basic:
// nextElementSibling → next sibling that’s an element.
// previousElementSibling → previous sibling that’s an element.
/*
<ul>
  <li id="first">Item 1</li>
  <li id="second">Item 2</li>
  <li id="third">Item 3</li>
</ul>
*/

let second = document.getElementById("second");
console.log(second.previousElementSibling.innerText); // Item 1
console.log(second.nextElementSibling.innerText);     // Item 3

// Advanced:
// nextSibling and previousSibling return any node type, so you might get text nodes (whitespace).
// You can loop through siblings:

let sibling = second;
while (sibling = sibling.nextElementSibling) {
  console.log(sibling.innerText);
}


/*
4. Summary Table:

| **Task**                    | **Property**             | **Includes Text Nodes?** | **Live?** |
| --------------------------- | ------------------------ | ------------------------ | --------- |
| Parent element              | `parentElement`          | No                       | N/A       |
| Parent node                 | `parentNode`             | Yes                      | N/A       |
| Children                    | `children`               | No                       | Yes       |
| Child nodes                 | `childNodes`             | Yes                      | Yes       |
| First child                 | `firstElementChild`      | No                       | N/A       |
| Last child                  | `lastElementChild`       | No                       | N/A       |
| Next sibling element        | `nextElementSibling`     | No                       | N/A       |
| Previous sibling element    | `previousElementSibling` | No                       | N/A       |
| Next sibling (any node)     | `nextSibling`            | Yes                      | N/A       |
| Previous sibling (any node) | `previousSibling`        | Yes                      | N/A       |
*/

// 5. Practical Advanced Example
// Combining parent, child, and sibling navigation:

/*
<div id="container">
  <h2>Title</h2>
  <ul>
    <li>Item A</li>
    <li id="target">Item B</li>
    <li>Item C</li>
  </ul>
</div>
*/

let target = document.getElementById("target");

// Parent of target
console.log(target.parentElement.tagName); // UL

// First child of parent
console.log(target.parentElement.firstElementChild.innerText); // "Item A"

// Last child of parent
console.log(target.parentElement.lastElementChild.innerText); // "Item C"

// Next sibling of target
console.log(target.nextElementSibling.innerText); // "Item C"

// Previous sibling of target
console.log(target.previousElementSibling.innerText); // "Item A"

// Grandparent
console.log(target.parentElement.parentElement.id); // "container"
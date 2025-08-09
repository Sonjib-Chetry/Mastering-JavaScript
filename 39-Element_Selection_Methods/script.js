
//Alright — let’s go step-by-step from basic to advanced through all the ways 
// JavaScript can select HTML elements, covering both classic DOM API methods and modern selectors, 
// with examples and gotchas.

//1. document.getElementById()
// Purpose: Selects a single element by its unique id.
// Returns: The element object, or null if not found.
// Performance: Very fast — directly looks up by ID.

// <div id="myDiv">Hello</div>

const el = document.getElementById("myDiv");
console.log(el.textContent); // Hello

//✅ Use when you know the element's unique ID.


//2. document.getElementsByClassName()
// Purpose: Selects all elements with the given class name.
// Returns: HTMLCollection (live list — updates automatically if DOM changes).
// Accessing Elements: Use index [ ] or loop.

// <p class="para">First</p>
// <p class="para">Second</p>

const paras = document.getElementsByClassName("para");
console.log(paras[0].textContent); // First
for (let p of paras) {
  console.log(p.textContent);
}

//⚠ HTMLCollection is not an array — you can’t use map() directly.


//3. document.getElementsByTagName()
// Purpose: Selects all elements with a specific tag name (e.g., "div", "p").
// Returns: HTMLCollection (live).

// <div>One</div>
// <div>Two</div>

const divs = document.getElementsByTagName("div");
console.log(divs.length); // 2


//4. document.querySelector()
// Purpose: Selects first matching element using CSS selector syntax.
// Returns: Element or null.

// <p class="para">Hello</p>
// <p class="para">World</p>

const firstPara = document.querySelector(".para");
console.log(firstPara.textContent); // Hello

//✅ Flexible — supports ID, class, attributes, nesting, pseudo-selectors.


// 5. document.querySelectorAll()
// Purpose: Selects all matching elements using CSS selectors.
// Returns: NodeList (static, doesn’t update if DOM changes).
// Advantage: NodeList supports forEach().

// <p class="para">One</p>
// <p class="para">Two</p>

const paras = document.querySelectorAll(".para");
paras.forEach(p => console.log(p.textContent));

//⚠ Static — won’t reflect DOM changes automatically.


//6. element.getElementsByClassName() / element.getElementsByTagName()
// Purpose: Same as document methods, but scoped to a specific parent element.

// <div id="container">
//   <p class="para">Inside</p>
// </div>
// <p class="para">Outside</p>

const container = document.getElementById("container");
const insideParas = container.getElementsByClassName("para");
console.log(insideParas.length); // 1


//7. element.querySelector() / element.querySelectorAll()
// Purpose: Same as document methods, but searches within a specific element.

// <div id="container">
//   <p class="para">Inside</p>
// </div>
// <p class="para">Outside</p>

const container = document.getElementById("container");
const p = container.querySelector(".para");
console.log(p.textContent); // Inside


//8. document.getElementsByName()
// Purpose: Selects elements by name attribute (often used in forms).
// Returns: NodeList-like collection (actually NodeList in HTML docs, but behaves like HTMLCollection).

// <input type="radio" name="gender" value="male">
// <input type="radio" name="gender" value="female">

const radios = document.getElementsByName("gender");
radios.forEach(r => console.log(r.value));


//9. document.forms
// Purpose: Returns a live HTMLCollection of all <form> elements.
// Access by name/id for direct reference.

// <form id="loginForm" name="login">
//   <input type="text" name="username">
// </form>

console.log(document.forms["login"].username.name); // username


//10. document.images, document.links, document.anchors
// Purpose: Legacy shortcuts for selecting <img>, <a> etc.

// <img src="a.jpg">

console.log(document.images.length); // 1

//⚠ Not commonly used in modern JS.


//11. closest()
// Purpose: From an element, finds the nearest ancestor (including itself) matching a selector.
// Returns: Element or null.

// <div class="outer">
//   <div class="inner">
//     <p id="myP">Hello</p>
//   </div>
// </div>

const p = document.getElementById("myP");
console.log(p.closest(".outer").className); // outer


// 12. matches()
// Purpose: Checks if an element matches a given selector.
// Returns: Boolean.

// <p class="para" id="p1">Hello</p>

const p = document.getElementById("p1");
console.log(p.matches(".para")); // true


//13. parentNode, children, firstElementChild, lastElementChild
// Purpose: Navigational selection from an existing element.

//<ul>
//   <li>One</li>
//   <li>Two</li>
// </ul>

const ul = document.querySelector("ul");
console.log(ul.children[0].textContent); // One


//14. Advanced Attribute Selectors with querySelectorAll()
// Examples:

document.querySelectorAll("input[type='text']");
document.querySelectorAll("a[href^='https']"); // starts with
document.querySelectorAll("img[src$='.png']"); // ends with
document.querySelectorAll("button[data-action='save']");


/*
Summary Table:

| Method                 | Returns                 | Live? | Selector type |
| ---------------------- | ----------------------- | ----- | ------------- |
| getElementById         | Element                 | No    | ID            |
| getElementsByClassName | HTMLCollection          | Yes   | Class         |
| getElementsByTagName   | HTMLCollection          | Yes   | Tag           |
| querySelector          | Element                 | No    | CSS           |
| querySelectorAll       | NodeList                | No    | CSS           |
| getElementsByName      | NodeList/HTMLCollection | Yes   | Name          |
| closest                | Element                 | No    | CSS           |
| matches                | Boolean                 | No    | CSS           |


JavaScript Element Selection Methods — Comparison Guide

| Method                                                                | Returns             | Live? | Speed\*    | Syntax Type     | When to Use                                 | Best Practice Notes                                                         |
| --------------------------------------------------------------------- | ------------------- | ----- | ---------- | --------------- | ------------------------------------------- | --------------------------------------------------------------------------- |
| **`getElementById(id)`**                                              | `Element` or `null` | No    | 🚀 Fastest | ID only         | You have a **unique element** with known ID | Always fastest for single known element                                     |
| **`getElementsByClassName(class)`**                                   | HTMLCollection      | Yes   | 🚀 Fast    | Class name only | Need multiple elements of same class        | Avoid if you need modern array methods (`forEach`) — convert to array first |
| **`getElementsByTagName(tag)`**                                       | HTMLCollection      | Yes   | 🚀 Fast    | Tag only        | Need elements by tag (`"p"`, `"div"`, etc.) | Legacy but still fast; prefer query selectors for complex conditions        |
| **`querySelector(selector)`**                                         | `Element` or `null` | No    | ⚡ Fast     | CSS selector    | First match only                            | Best for complex single-element queries (e.g. `.nav li a.active`)           |
| **`querySelectorAll(selector)`**                                      | NodeList            | No    | ⚡ Fast     | CSS selector    | All matches with CSS power                  | Flexible; supports `forEach`; **static list**                               |
| **`getElementsByName(name)`**                                         | NodeList-like       | Yes   | ⚡ Fast     | Name attribute  | Form elements with same name                | Mostly for forms and radios                                                 |
| **`element.querySelector` / `element.querySelectorAll`**              | Element / NodeList  | No    | ⚡ Fast     | CSS selector    | Search **within** a container               | Best when scoping to a section of DOM                                       |
| **`element.getElementsByClassName` / `element.getElementsByTagName`** | HTMLCollection      | Yes   | ⚡ Fast     | Class/Tag       | Search inside parent element                | Useful for performance in large DOM trees                                   |
| **`closest(selector)`**                                               | `Element` or `null` | No    | ⚡ Fast     | CSS selector    | Find nearest matching ancestor              | Great for event delegation                                                  |
| **`matches(selector)`**                                               | Boolean             | No    | ⚡ Fast     | CSS selector    | Check if element fits selector              | Often used in event handling                                                |
| **`document.forms`**                                                  | HTMLCollection      | Yes   | 🚀 Fast    | N/A             | Access forms directly                       | Rarely used in modern JS; form refs by `name`                               |
| **`document.images`, `document.links`**                               | HTMLCollection      | Yes   | 🚀 Fast    | N/A             | Legacy convenience shortcuts                | Avoid in modern code unless dealing with legacy code                        |


Best Practices

1. If you know the exact ID → getElementById() (fastest).
2. For multiple elements by class or tag → prefer querySelectorAll() over getElementsByClassName() unless you need live updates.
3. For complex conditions → always use querySelector() / querySelectorAll().
4. When working inside a section → call selection on the parent element (reduces DOM search scope, improves speed).
5. Avoid live collections unless you really need automatic updates — they can cause performance issues if you repeatedly access them.
6. Convert NodeList / HTMLCollection to arrays when you need array methods:

const arr = Array.from(document.getElementsByClassName("item"));
arr.map(el => console.log(el.textContent));
*/
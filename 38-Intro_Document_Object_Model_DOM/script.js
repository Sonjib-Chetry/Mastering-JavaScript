
//📌 1. What is the document Object?
// The document object is part of the DOM (Document Object Model).
// It represents the entire web page loaded in the browser.
// It is a property of the global window object:

console.log(window.document === document); // true
//Through document, we can access, manipulate, and modify HTML and CSS.

//📌 2. Important document Properties
// 🔹 1. document.documentElement
// Returns the <html> element (root of the document).

console.log(document.documentElement); // <html>...</html>

//🔹 2. document.head
// Returns the <head> element of the document.

console.log(document.head); // <head>...</head>

//🔹 3. document.body
// Returns the <body> element of the document.

console.log(document.body); // <body>...</body>

//🔹 4. document.title
// Gets or sets the title of the page.

console.log(document.title); // Current title
// document.title = "New Page Title";

// 🔹 5. document.URL
// Returns the full URL of the current document.

console.log(document.URL); // e.g., "https://example.com/page.html"

//🔹 6. document.domain
// Returns the domain name of the page.

console.log(document.domain); // e.g., "example.com"

//🔹 7. document.referrer
// Returns the URL of the page that linked to this page (empty if opened directly).

console.log(document.referrer); // e.g., "https://google.com"

//🔹 8. document.lastModified
// Shows when the document was last modified.

console.log(document.lastModified); // e.g., "08/08/2025 11:32:10"

//🔹 9. document.characterSet
// Shows the character encoding of the document.

console.log(document.characterSet); // "UTF-8"

//🔹 10. document.readyState
// Shows the loading status of the page:
// "loading" → HTML still loading
// "interactive" → HTML parsed but resources (CSS, images) may still load
// "complete" → Fully loaded

console.log(document.readyState); // "complete"

//🔹 11. document.forms
// Returns an HTMLCollection of all <form> elements.

console.log(document.forms); // HTMLCollection of forms
// console.log(document.forms[0].id); // First form's ID

//🔹 12. document.images
// Returns all <img> elements.

console.log(document.images); // HTMLCollection of images

//🔹 13. document.links
// Returns all <a> elements with href attributes.

console.log(document.links); // HTMLCollection of links

//🔹 14. document.scripts
// Returns all <script> elements.

console.log(document.scripts); // HTMLCollection of scripts

//🔹 15. document.cookie
// Get or set cookies for the document.

console.log(document.cookie); // "username=John; theme=dark"
// document.cookie = "language=English";

//🔹 16. document.activeElement
// Returns the element currently focused.

console.log(document.activeElement); // e.g., <input type="text">

//🔹 17. document.designMode
// Makes the page editable ("on" or "off").

document.designMode = "on"; // You can now edit the page content


/*
📌 4. Summary Table

| Property                   | Description                 |
| -------------------------- | --------------------------- |
| `document.documentElement` | `<html>` root element       |
| `document.head`            | `<head>` element            |
| `document.body`            | `<body>` element            |
| `document.title`           | Page title                  |
| `document.URL`             | Full page URL               |
| `document.domain`          | Domain name                 |
| `document.referrer`        | Referring page URL          |
| `document.lastModified`    | Last modification date/time |
| `document.characterSet`    | Character encoding          |
| `document.readyState`      | Page loading status         |
| `document.forms`           | All forms                   |
| `document.images`          | All images                  |
| `document.links`           | All links with `href`       |
| `document.scripts`         | All scripts                 |
| `document.cookie`          | Cookies                     |
| `document.activeElement`   | Focused element             |
| `document.designMode`      | Page edit mode              |
*/


/*
The Document Object Model (DOM) is a programming interface for HTML and XML documents. 
It represents the structure of a web page as a tree of objects, allowing developers to access, manipulate, 
and modify the content, structure, and style of a website dynamically using JavaScript.

What is the DOM?
When a web page is loaded, the browser parses the HTML and builds the DOM, 
which is a tree-like structure where each element, attribute, and piece of text is a node.

For example, consider this HTML:

<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>

The DOM for this page looks like:

Document
 └── html
     ├── head
     │   └── title
     └── body
         ├── h1
         └── p


Common DOM Methods:

| Method                                     | Description                                            |
| ------------------------------------------ | ------------------------------------------------------ |
| `document.getElementById("id")`            | Selects an element by its ID.                          |
| `document.getElementsByClassName("class")` | Selects all elements with the given class.             |
| `document.querySelector("selector")`       | Selects the first element that matches a CSS selector. |
| `element.innerHTML`                        | Gets or sets the HTML inside an element.               |
| `element.textContent`                      | Gets or sets the text content.                         |
| `element.style.color = "red"`              | Changes an element's style.                            |
| `document.createElement("tag")`            | Creates a new element.                                 |
| `element.appendChild(child)`               | Adds a new child element.                              |
| `element.remove()`                         | Removes the element from the DOM.                      |
*/

// Example:- function which change the first img in the page

function changeImg() {
  document.children[0].children[1].children[1].src = 'https://media.istockphoto.com/id/483076291/photo/day-at-the-ocean.jpg?s=612x612&w=0&k=20&c=atNOSnA_wLZQ-poa8mYIdPwt4hkl0ZpH5TnFxScpqAQ='
}

// changeImg() //call this function on browser console to see the result

//We will learn more about DOM Methods in coming chapters.
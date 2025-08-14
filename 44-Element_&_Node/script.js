
//The DOM (Document Object Model) is a tree-like structure where everything in an HTML document is a node. 
// Nodes can be of different types, and elements are just one type of node.

//A Node is a generic term for any item in the DOM tree.
// An Element is a specific type of node — it's an HTML tag.
    // All elements are nodes (NodeType = 1)
    // But not all nodes are elements

let div = document.getElementById("example");

// Accessing childNodes (includes text and elements)
console.log(div.childNodes); 
// NodeList(3): [#text, span, #text]

// Accessing children (only element nodes)
console.log(div.children);   
// HTMLCollection(1): [span]

//childNodes returns all node types, including text nodes (like the space or line breaks).
// children returns only element nodes.

const container = document.getElementById('container');

// 1. .childNodes → **all** node types
console.log('childNodes:', container.childNodes);
// Example output (NodeList):
// [ 
//   #text "Hello,\n    ", 
//   <span id="inner">…</span>, 
//   #text "\n    ", 
//   <!-- A comment node -->, 
//   #text "\n  " 
// ]

// 2. .children → **only** element nodes
console.log('children:', container.children);
// Example output (HTMLCollection):
// [ <span id="inner">World!</span> ]

// 3. Distinguish by nodeType
container.childNodes.forEach((node, i) => {
  console.log(
    `Node ${i}:`, 
    node,
    '| nodeType =', node.nodeType,
    '| isElement?', node.nodeType === Node.ELEMENT_NODE
  );
});
// nodeType values:
// 1 → Element
// 3 → Text
// 8 → Comment

// 4. Accessing the element directly
const span = document.getElementById('inner');
console.log('span.nodeType:', span.nodeType);             // 1
console.log('span instanceof Element?', span instanceof Element); // true
console.log('span instanceof Node?',    span instanceof Node);    // true

// 5. Filtering out only elements from childNodes
const onlyElements = Array.from(container.childNodes)
                          .filter(n => n.nodeType === Node.ELEMENT_NODE);
console.log('Filtered elements:', onlyElements);
// → [ <span id="inner">World!</span> ]


//With the help of node we can update those thing inside HTML which we can't do with element 


function changeText(text) {
    document.getElementById('example').childNodes[0].nodeValue = text
}

// changeText('Hello JS lover ') //call this function to see the changes


/*
1. The DOM Basics

When a web page is loaded, the browser creates a Document Object Model (DOM).
In the DOM:
Everything is a Node.
An Element is just one type of Node.

2. What is a Node?

A Node is the generic interface for any single item in the DOM tree.
There are different types of nodes, such as:

| Node Type             | Description            | Example in HTML              |
| --------------------- | ---------------------- | ---------------------------- |
| **Element Node**      | Represents HTML tags   | `<div>`, `<p>`, `<h1>`       |
| **Text Node**         | Text inside an element | `"Hello World"` inside `<p>` |
| **Comment Node**      | Comments in HTML       | `<!-- This is a comment -->` |
| **Document Node**     | The root document      | `document`                   |
| **DocumentType Node** | Doctype declaration    | `<!DOCTYPE html>`            |


3. What is an Element?

An Element is a special kind of Node that represents HTML or XML tags and has attributes.
All Elements are Nodes ✅
Not all Nodes are Elements ❌

4. Node Types Reference

Node.ELEMENT_NODE           // 1
Node.TEXT_NODE              // 3
Node.COMMENT_NODE           // 8
Node.DOCUMENT_NODE          // 9
Node.DOCUMENT_TYPE_NODE     // 10
Node.DOCUMENT_FRAGMENT_NODE // 11


5. Key Differences

| Feature        | Node                                | Element                                                                                  |
| -------------- | ----------------------------------- | ---------------------------------------------------------------------------------------- |
| **Definition** | Any single item in the DOM tree     | Specific node that represents an HTML/XML tag                                            |
| **Includes**   | Elements, text, comments, etc.      | Only HTML/XML tags                                                                       |
| **Examples**   | Document, comment, text, element    | `<div>`, `<p>`, `<span>`                                                                 |
| **Properties** | `nodeType`, `nodeName`, `nodeValue` | All node properties + element-specific like `tagName`, `id`, `className`, `attributes`   |
| **Methods**    | `appendChild`, `cloneNode`          | All node methods + element-specific like `getAttribute`, `setAttribute`, `querySelector` |


6. Visual Analogy

Think of the DOM as a family tree:
Node = Any family member (parents, kids, pets, notes stuck to the fridge, etc.)
Element = Only the humans in the family (HTML tags)


7. Summary Table

| Feature   | Node                                    | Element                                                     |
| --------- | --------------------------------------- | ----------------------------------------------------------- |
| Scope     | Broad (all DOM items)                   | Narrow (only HTML/XML tags)                                 |
| Includes  | Elements, text, comments, etc.          | Only HTML/XML elements                                      |
| Key Props | `nodeType`, `nodeName`, `nodeValue`     | All node props + `tagName`, `id`, `className`, `attributes` |
| Traversal | `childNodes`, `firstChild`, `lastChild` | `children`, `firstElementChild`, `lastElementChild`         |
*/
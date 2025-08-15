//In JavaScript, especially when working with the DOM (Document Object Model), 
// append() and appendChild() are both 
// methods used to add nodes to a parent element. However, there are some key differences between them:

//appendChild():-
//appendChild() adds a single node (like a paragraph, div, etc.) to a parent element as its last child.


const parent = document.getElementById("example");
const header = document.getElementById("header");

function appendChildCall() {
    const newElement = document.createElement("p");
    //this will create a 'p' tag element in memory, we will learn more about createElement() in next lesson 
    newElement.textContent = "Hello from appendChild!";
    return parent.appendChild(newElement);
};
//appendChildCall()  //call this function in browser console to see result
//Only one element at a time
//Does not accept plain text (must be a Node)

//it can also cut element from one place and past to other place
function cutPastAppendCall() {
    parent.appendChild(header)
}
//cutPastAppendCall()  //call this function in browser console to see result

//we can use cloneNode() function to copy past element, if we don't want to cut
//if we don't pass true inside clone it will only copy target element not content inside the element
function copyPastAppendCall() {
    parent.appendChild(header.cloneNode(true))  
}
//copyPastAppendCall()  //call this function in browser console to see result


// append():-
// append() can add multiple nodes or text to a parent element.

function appendCall() {
    const span = document.createElement("span");
    span.textContent = "Span text";
    return parent.append("Hello ", span, " again!");
};
//Can add multiple elements or text
//Can add text directly
//Does not return the added elements
// copy past and cut past work similar as appendChild 


/*
Key Differences Table:

| Feature                | `appendChild()`               | `append()`                     |
| ---------------------- | ----------------------------- | ------------------------------ |
| **Introduced**         | Old DOM Level 1               | DOM Living Standard (newer)    |
| **Accepts**            | Only `Node`                   | `Node` and `DOMString` (text)  |
| **Multiple arguments** | ❌ No                          | ✅ Yes                          |
| **Return value**       | Returns appended node         | Returns `undefined`            |
| **Text without node**  | ❌ No (needs `createTextNode`) | ✅ Yes (directly pass a string) |
| **Browser support**    | All browsers                  | Modern browsers (IE ❌)         |

5. Quick Summary

Use appendChild() when:
You want older browser support.
You only append a single Node.
You need the method to return the appended node.

Use append() when:
You need to append multiple items at once.
You want to append text without creating text nodes.
You don’t care about return values.
You’re not targeting IE.
*/
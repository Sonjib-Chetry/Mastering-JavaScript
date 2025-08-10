//1. innerText

// What it does: Returns the visible rendered text of an element (i.e., how it appears in the browser).
// Excludes: Hidden elements (e.g., with display: none).
// Triggers Reflow: Yes – because it considers CSS styling (like visibility).
// When to use: When you want the human-readable, displayed text.

console.log(document.getElementById("header1").innerText);

function innerTextDemo() { //call this function on browser console to see the result
    document.getElementById("header1").innerText = "Hello JS lovers..!";
}

//2. innerHTML

// What it does: Gets or sets the HTML markup inside an element.
// Includes: HTML tags and content.
// When to use: When you want to insert or retrieve HTML structure, not just plain text.

console.log(document.getElementById("header2").innerHTML);

function innerHTMLDemo() {  //call this function on browser console to see the result
    document.getElementById("header2").innerHTML = "Hello <h1>JS</h1> lovers..!";
}

//3. textContent

// What it does: Gets or sets the text content of an element and all its descendants.
// Includes: All text, regardless of visibility.
// Ignores: Any HTML formatting or tags.
// When to use: When you want to extract or set raw text, ignoring styling or visibility.

console.log(document.getElementById("header3").textContent);

function textContentDemo() { //call this function on browser console to see the result
    document.getElementById("header3").textContent = "I have a display none 'p' tag, please help me to show up. Thank's for showing me up";
}


/*
Comparison Table
| Feature               | `innerText`                 | `innerHTML`                 | `textContent`       |
| --------------------- | --------------------------- | --------------------------- | ------------------- |
| Returns HTML tags?    | ❌ No                        | ✅ Yes                       | ❌ No                |
| Includes hidden text? | ❌ No                        | ✅ Yes                       | ✅ Yes               |
| Performance           | Slowest                     | Medium                      | Fastest             |
| Triggers reflow?      | ✅ Yes                       | ❌ No (read) / ✅ Yes (write) | ❌ No                |
| Best use case         | Human-readable visible text | Get/set HTML structure      | Raw text extraction |
*/


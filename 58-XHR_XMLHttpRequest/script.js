
// 1. What is XHR?

// XMLHttpRequest (XHR) is a built-in JS object for making HTTP requests to a server.
// Core technology behind AJAX (Asynchronous JavaScript and XML).
// Works with JSON, XML, text, HTML, blobs (not just XML).

// 2. Key Features

// ✔ Make GET, POST, PUT, DELETE requests
// ✔ Works asynchronously (default) or synchronously (deprecated)
// ✔ Handles response data without reloading the page
// ✔ Supports progress tracking, timeouts, headers, and cancellation


// 3. Steps to Use XHR

// Create a new XMLHttpRequest object

// let xhr = new XMLHttpRequest();

// Open the request

// xhr.open("GET", "https://api.example.com", true);

// Set Headers (optional, for POST/PUT)

// xhr.setRequestHeader("Content-Type", "application/json");

// Handle Response

// xhr.onload = function() {
//     if (xhr.status >= 200 && xhr.status < 300) {
//         console.log(xhr.responseText);
//     } else {
//         console.error("Error:", xhr.status);
//     }
// };

// Handle Errors

// xhr.onerror = function() {
//     console.error("Network Error");
// };

// Send the request

// xhr.send();


// 4. Example: GET Request

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://dog.ceo/api/breeds/image/random", true);
xhr.responseType = "json";

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log("Dog Image:", xhr.response.message);
  } else {
    console.error("Error:", xhr.status);
  }
};

xhr.onerror = () => console.error("Network Error");
xhr.send();


// 5. Example: POST Request

let xhr1 = new XMLHttpRequest();
xhr1.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
xhr1.setRequestHeader("Content-Type", "application/json");

xhr1.onload = function () {
  if (xhr1.status >= 200 && xhr1.status < 300) {
    console.log("Response:", xhr1.responseText);
  } else {
    console.error("Error:", xhr1.status);
  }
};

let data = JSON.stringify({
  title: "Hello World",
  body: "This is a test post",
  userId: 1
});

xhr1.send(data);


// 6. Bonus: Interactive Example
// Updates an <img> when a button is clicked:

const image = document.querySelector('img');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onload = () => {
    image.src = xhr.response.message;
  };

  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
  xhr.send();
});


// 7. XHR Cheat Sheet

// Create: new XMLHttpRequest()
// Open: xhr.open(method, url, async)
// Set Header: xhr.setRequestHeader(key, value)
// Response Type: xhr.responseType = 'json'|'text'|'blob'
// Send: xhr.send(data)
// Success: xhr.onload + check xhr.status
// Error: xhr.onerror, xhr.ontimeout
// Cancel: xhr.abort()

// Progress:
// Download: xhr.onprogress
// Upload: xhr.upload.onprogress
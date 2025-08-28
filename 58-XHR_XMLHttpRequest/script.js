/*
What is XHR (XMLHttpRequest)?
XMLHttpRequest (XHR) is a built-in JavaScript object that allows you to interact with servers. 
You can retrieve data from a URL without having to do a full page refresh. 
This makes it a foundational technology for AJAX (Asynchronous JavaScript and XML).
Despite the name, it can work with data in XML, JSON, plain text, or HTML, not just XML.
*/

//What Can XHR Do?
// Make GET, POST, PUT, DELETE (and other) HTTP requests
// Work asynchronously (default) or synchronously (rarely used now)
// Handle server responses and update the web page without reload
// Detect the status and progress of requests (like loading bar)


//Steps to Use XMLHttpRequest: GET Request:

// 1. Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// 2. Configure it: method, URL, async flag
xhr.open("GET", "https://dog.ceo/api/breeds/image/random", true); // true = asynchronous

// 3. Set up a function to handle the response
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log("Success:", xhr.responseText);
  } else {
    console.error("Error:", xhr.status);
  }
};

// 4. (Optional) Handle network errors
xhr.onerror = function () {
  console.error("Network Error");
};

// 5. Send the request
xhr.send();



//POST Request:

// Step 1: Create a new XMLHttpRequest object
let xhr1 = new XMLHttpRequest();

// Step 2: Open the request with method POST and URL
xhr1.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
// Parameters:
// "POST" - the HTTP method
// URL - the endpoint where the request is sent
// true - makes the request asynchronous (non-blocking)

// Step 3: Set the request header to tell the server we are sending JSON
xhr1.setRequestHeader("Content-Type", "application/json");

// Step 4: Define what to do when the server responds
xhr1.onload = function () {
  // Check if request was successful (status code 200–299)
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log("Response received:");
    console.log(xhr.responseText); // Output server response (usually in JSON)
  } else {
    console.error("Request failed with status:", xhr.status);
  }
};

// Step 5: Prepare the data to send (JavaScript object to JSON string)
let data = JSON.stringify({
  title: "Hello World",
  body: "This is a test post",
  userId: 1,
});

// Step 6: Send the request with the JSON data
xhr1.send(data);


//Small function to understand XHR

const image = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const xhr = new XMLHttpRequest()

  xhr.responseType = 'json'

  xhr.addEventListener('load', () => {
    image.src = xhr.response.message
    console.log(xhr);
  })

  // xhr.onload = () => {
  //   image.src = xhr.response.message
  //   console.log(xhr)
  // }

  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
  xhr.send()
})




// Quick “cheat sheet”

// Create → new XMLHttpRequest()
// Open → xhr.open(method, url, true)
// Type → xhr.responseType = 'json'|'text'|'blob'|'arraybuffer'|'document'
// Headers → xhr.setRequestHeader('Content-Type', 'application/json')
// Credentials → xhr.withCredentials = true
// Timeouts → xhr.timeout = 5000 + xhr.ontimeout
// Send → xhr.send(body|null)
// Success → xhr.onload + check xhr.status
// Errors → xhr.onerror (network/CORS), xhr.ontimeout, xhr.onabort
// Progress → xhr.onprogress (download), xhr.upload.onprogress (upload)
// Read headers → xhr.getAllResponseHeaders(), xhr.getResponseHeader(name)
// Cancel → xhr.abort()

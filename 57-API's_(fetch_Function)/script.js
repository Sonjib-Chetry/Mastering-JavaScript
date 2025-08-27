
// An API (Application Programming Interface) allows different software 
// systems to communicate. In web development, APIs are often used to interact 
// with servers using HTTP methods like:


// HTTP methods are a set of request types defined by the HyperText Transfer Protocol (HTTP) 
// that tell the server what action to perform on a given resource (like data on a server). 
// They are used when making requests from clients (browsers, apps) to servers.

/*
| Method     | Purpose                             |
| ---------- | ----------------------------------- |
| **GET**    | Read or fetch data                  |
| **POST**   | Send data to create something       |
| **PUT**    | Update/replace an existing resource |
| **PATCH**  | Update part of an existing resource |
| **DELETE** | Remove a resource                   |
*/

//The fetch() function in JavaScript is a built-in API used to make HTTP requests 
// (like GET, POST, PUT, DELETE) from the browser or a JavaScript environment. 
// It returns a Promise that resolves to the Response object representing the request's result.

// How It Works
// fetch() returns a Promise.
// When resolved, the promise gives a Response object.
// To get the actual data (JSON, text, etc.), you must call a method like .json() or .text() on the response.


//Example Using JavaScript fetch()

//1. GET (Fetch Data)

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
//Use: Retrieve a specific post.
// body is not needed.

//2. POST (Send Data)

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'New Post',
    body: 'This is the content',
    userId: 1
  }),
})
  .then(response => response.json())
  .then(data => console.log(data));
//Use: Create a new post.
//Send data using body in JSON format.

//3. PUT (Update Full Resource)

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: 1,
    title: 'Updated Title',
    body: 'Updated content',
    userId: 1
  }),
})
  .then(response => response.json())
  .then(data => console.log(data));
//Use: Replace the entire post with new data.

//4. PATCH (Update Partial Resource)
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'Partially Updated Title'
  }),
})
  .then(response => response.json())
  .then(data => console.log(data));
//Use: Update only the title of the post.

//5. DELETE (Remove Resource)
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
  .then(response => {
    if (response.ok) {
      console.log('Deleted successfully');
    }
  });
//Use: Remove a post with ID 1.



//Small function to understand API 
const image = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((json) => {
      image.src = json.message
      console.log('Dog Image fetch successfully');
    })
})
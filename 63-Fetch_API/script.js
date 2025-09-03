

//What is Fetch API?
// The Fetch API is a modern JavaScript interface that allows you to make HTTP requests (like GET, POST, PUT, DELETE) to servers asynchronously, 
// similar to XMLHttpRequest but with a much cleaner, promise-based syntax.
// It is used to retrieve, send, or update data from RESTful APIs or server endpoints.



//Common HTTP Methods in Fetch

// 1. GET   //Used to retrieve data (default method).

// fetch('https://api.example.com/users')
//   .then(res => res.json())
//   .then(data => console.log(data));

fetch('https://dummyjson.com/products', {
    method: 'GET'})
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error, "Something went wrong"))
    .finally(() => console.log("Finally Done"))


// 2. POST   //Used to send data to the server.

// fetch('https://api.example.com/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({ name: 'John', age: 30 })
// })
// .then(res => res.json())
// .then(data => console.log(data));


//3. PUT   //Used to update a resource entirely.

// fetch('https://api.example.com/users/1', {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({ name: 'John Updated', age: 35 })
// });


//4. PATCH    //Used to partially update a resource.

// fetch('https://api.example.com/users/1', {
//   method: 'PATCH',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({ age: 36 })
// });


//5. DELETE   //Used to delete a resource.

// fetch('https://api.example.com/users/1', {
//   method: 'DELETE'
// });


//Working with Response

// 1. response.ok
//Returns true if the HTTP status is 200–299.

// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('HTTP error');
//     }
//     return response.json();
//   });


//2. response.status
//Returns the status code (e.g., 200, 404).


// 3. Response parsing methods:

// .json() – parses response as JSON
// .text() – as plain text
// .blob() – for binary data (images, files)
// .formData() – form data
// .arrayBuffer() – low-level binary


// Fetch Options Object Structure

/*
{
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token'
  },
  body: JSON.stringify(data), // only for POST, PUT, PATCH
  mode: 'cors' | 'no-cors' | 'same-origin',
  credentials: 'omit' | 'same-origin' | 'include',
  cache: 'default' | 'no-cache' | 'reload' | 'force-cache',
  redirect: 'follow' | 'manual' | 'error',
  referrer: 'no-referrer'
}
*/




//Example function which is used in XHR now converted to fetch


// Define a reusable function to perform HTTP requests using Fetch API
function fetchAPI(method, url) {
  return fetch(url, { method })    // Perform a fetch request with specified method and URL
    .then((response) => {
      // Check if the response is successful (status code 200–299)
      // if (!response.ok) {
      //   // If not, throw an error that will be caught in the .catch() block
      //   throw new Error(`HTTP error! Status: ${response.status}`);
      // }
      // Parse and return the response body as JSON
      return response.json();
    });
}

// Start the data fetching chain by requesting the list of users
fetchAPI("GET", "https://dummyjson.com/users")
  .then((usersData) => {
    console.log(usersData);  // Log the list of users to the console

    // Extract the ID of the first user from the list
    const userId = usersData.users[0].id;

    // Fetch posts created by that specific user
    return fetchAPI("GET", `https://dummyjson.com/posts/user/${userId}`);
  })
  .then((postsData) => {
    console.log(postsData);  // Log the user's posts

    // Extract the ID of the first post by the user
    const postId = postsData.posts[0].id;

    // Fetch comments on that specific post
    return fetchAPI("GET", `https://dummyjson.com/comments/post/${postId}`);
  })
  .then((commentsData) => {
    console.log(commentsData);  // Log the list of comments on the post

    // Extract the user ID of the person who wrote the first comment
    const commentUserId = commentsData.comments[0].user.id;

    // Fetch full details of the comment's author
    return fetchAPI("GET", `https://dummyjson.com/users/${commentUserId}`);
  })
  .then((commentAuthorData) => {
    // Log the author data of the first comment
    console.log(commentAuthorData);
  })
  .catch((error) => {
    // Handle any error that occurs in any of the above requests
    console.log("Something went wrong:", error.message);
  })
  .finally(() => {
    // This block always runs, regardless of success or failure
    console.log("Finally Done");
  });

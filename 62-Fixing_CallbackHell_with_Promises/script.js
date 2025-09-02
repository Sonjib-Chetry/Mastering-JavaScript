
// Fixing callback hell with Promises



//✅ Callback Hell Version (Nested Callbacks)

// function makeHttpRequest(method, url, callback) {
//   const xhr = new XMLHttpRequest()
//   xhr.responseType = 'json'
//   xhr.addEventListener('load', () => {
//     callback(xhr.response)
//   })

//   xhr.open(method, url)
//   xhr.send()
// }

// makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
//   console.log(usersData);
//   makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
//     console.log(postsData);
//     makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
//       console.log(commentsData);
//       makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {
//         console.log(userData);
//       });
//     });
//   });
// })


//✅ Fixed with Promises: rewrote makeHttpRequest to return a Promise:

function makeHttpRequest(method, url) {
  const xhr = new XMLHttpRequest();               // Create a new XHR object
  xhr.responseType = "json";                      // Set the expected response format

  const myPromise = new Promise((resolve, reject) => {
    xhr.addEventListener("load", () => {
      resolve(xhr.response);                      // Resolve the Promise with the response data
    });

    xhr.addEventListener("error", () => {
      reject("Something went wrong");             // Reject the Promise if there's an error
    });
  });

  xhr.open(method, url);                          // Open the request with the given method and URL
  xhr.send();                                     // Send the request

  return myPromise;                               // Return the Promise
}


//✅ Promise chaining instead of nesting:

makeHttpRequest("GET", "https://dummyjson.com/users")
  .then((usersData) => {
    console.log(usersData); // 1. Get user data
    return makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`)
  })
  .then((postsData) => {
    console.log(postsData); // 2. Get posts for first user
    return makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`)
  })
  .then((commentsData) => {
    console.log(commentsData); // 3. Get comments for first post
    return makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`)
  })
  .then((CommentAuthorData) => {
    console.log(CommentAuthorData); // 4. Get user info of comment author
  })
  .catch((error) => {
    console.log(error); // Handle any errors from any stage
  })
  .finally(() => {
    console.log("Cleanup done"); // Runs no matter what — success or error
  });


  
// ✅ Why This Fixes Callback Hell
// No nested callbacks → Each then() handles one step.
// Error handling in one place (.catch()).
// Cleanup with .finally().
// Easier to read and maintain.
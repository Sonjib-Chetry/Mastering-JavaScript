// What is async/await?
// async/await is syntactic sugar built on top of Promises in JavaScript.
// It allows you to write asynchronous code that looks and behaves like synchronous code — making it easier to read and debug.
// async/await was introduced in ES2017 (ES8).




// Define an async function that fetches data from the given URL
async function myAsyncAwaitRequest(url) {
  const response = await fetch(url);         // Wait for the HTTP request to complete
  const data = await response.json();        // Wait for the response to be parsed as JSON
  return data;                              // Return the parsed data
  // const data = await (await fetch(url)).json()
// console.log(data);
// return await response.json();
}

// Start the chain of requests using .then()
myAsyncAwaitRequest("https://dummyjson.com/users")
  .then((usersData) => {
    console.log(usersData);                  // Log the list of users received
    const userId = usersData.users[0].id;    // Extract the ID of the first user
    // Fetch posts created by that user
    return myAsyncAwaitRequest(`https://dummyjson.com/posts/user/${userId}`);
  })
  .then((postsData) => {
    console.log(postsData);                  // Log posts made by that user
    const postId = postsData.posts[0].id;    // Get the ID of the first post
    // Fetch comments on that post
    return myAsyncAwaitRequest(`https://dummyjson.com/comments/post/${postId}`);
  })
  .then((commentsData) => {
    console.log(commentsData);               // Log comments made on the post
    const commentUserId = commentsData.comments[0].user.id; // Get user ID who made the first comment
    // Fetch user data of the comment author
    return myAsyncAwaitRequest(`https://dummyjson.com/users/${commentUserId}`);
  })
  .then((commentAuthorData) => {
    console.log(commentAuthorData);          // Log data of the user who commented
  })
  .catch((error) => {
    // This block will catch any error that occurs in any of the above .then() steps
    console.log("Something went wrong:", error.message);
  })
  .finally(() => {
    // This block will always run regardless of success or failure
    console.log("Finally Done");
  });



/*

  // Define an async function to make HTTP requests and return parsed JSON
async function myAsyncAwaitRequest(url) {
  const response = await fetch(url);         // Wait for the fetch to complete (returns a Response object)
  const data = await response.json();        // Wait for the response to be converted to JSON
  return data;                               // Return the final data (implicitly wrapped in a Promise)
  // const data = await (await fetch(url)).json()
// console.log(data);
// return await response.json();
}

// Start the chain of dependent async requests
myAsyncAwaitRequest("https://dummyjson.com/users")  // Step 1: Get all users
  .then((usersData) => {
    console.log(usersData);                          // Log users data
    const userId = usersData.users[0].id;            // Extract the first user's ID
    return myAsyncAwaitRequest(`https://dummyjson.com/posts/user/${userId}`);  // Step 2: Fetch posts by this user
  })
  .then((postsData) => {
    console.log(postsData);                          // Log posts data
    const postId = postsData.posts[0].id;            // Extract the first post's ID
    return myAsyncAwaitRequest(`https://dummyjson.com/comments/post/${postId}`);  // Step 3: Fetch comments on this post
  })
  .then((commentsData) => {
    console.log(commentsData);                       // Log comments data
    const commentUserId = commentsData.comments[0].user.id;  // Get the user ID who made the first comment
    return myAsyncAwaitRequest(`https://dummyjson.com/users/${commentUserId}`);  // Step 4: Fetch that user's full profile
  })
  .then((commentAuthorData) => {
    console.log(commentAuthorData);                  // Log the final user's details
  })
  .catch((error) => {
    // This will catch any error from any of the above async calls
    console.log("Something went wrong:", error.message);  // Log error message (e.g. network error)
  })
  .finally(() => {
    // This block always runs, whether success or error
    console.log("Finally Done");                     // Indicate the entire flow is complete
  });


*/


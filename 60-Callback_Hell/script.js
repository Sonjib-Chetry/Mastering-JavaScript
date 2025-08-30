//What is Callback Hell?
// Callback Hell (also known as the "Pyramid of Doom") happens when multiple nested callbacks are used to 
// handle asynchronous operations one after another. It results in:
// Code that's hard to read
// Difficult to debug
// Difficult to maintain
// Error handling becomes messy


//Example:

function makeHttpRequest(method, url, callback) {
  const xhr = new XMLHttpRequest()
  xhr.responseType = 'json'
  xhr.addEventListener('load', () => {
    callback(xhr.response)
  })

  xhr.open(method, url)
  xhr.send()
}

makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
  console.log(usersData);
  makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
    console.log(postsData);
    makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
      console.log(commentsData);
      makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {
        console.log(userData);
      });
    });
  });
})

//What's Happening in above Code?
// We're making four dependent HTTP requests, each one nested inside the previous one:
// Get all users → usersData
// Get posts of the first user → postsData
// Get comments of the first post → commentsData
// Get user info of the first comment's user → userData


// ✅ Solutions to Callback Hell


// 1. Modularize functions
// Break large callback chains into named functions:
/*
function handlePayment(payment) {
    console.log('Payment:', payment);
}

function handleOrders(orders) {
    console.log('Orders:', orders);
    getPaymentDetails(orders[0].id, handlePayment);
}

getUser(1, function(user) {
    console.log('User:', user);
    getOrders(user.id, handleOrders);
});
*/

// 2. Use Promises
// Promises make async code more readable and avoid deep nesting:
/*
getUser(1)
    .then(user => {
        console.log('User:', user);
        return getOrders(user.id);
    })
    .then(orders => {
        console.log('Orders:', orders);
        return getPaymentDetails(orders[0].id);
    })
    .then(payment => console.log('Payment:', payment))
    .catch(err => console.error(err));
*/

// 3. Use Async/Await
// Async/Await (ES8) makes code look synchronous:
/*
async function getUserData() {
    try {
        const user = await getUser(1);
        console.log('User:', user);
        
        const orders = await getOrders(user.id);
        console.log('Orders:', orders);
        
        const payment = await getPaymentDetails(orders[0].id);
        console.log('Payment:', payment);
    } catch (err) {
        console.error(err);
    }
}
getUserData();
*/

// ✅ 1. What is Web Storage?
// Web Storage provides mechanisms to store data on the client side (in the browser) without sending it to the server on every request (unlike cookies).

// Two main storage types:
// localStorage → Persistent data storage (data survives even after browser is closed).
// sessionStorage → Temporary data storage (data is lost when the browser tab is closed).

/*
✅ 2. Difference Between Local Storage and Session Storage

| Feature           | localStorage                                        | sessionStorage                          |
| ----------------- | --------------------------------------------------- | --------------------------------------- |
| **Lifetime**      | Persistent (until manually cleared)                 | Session-based (cleared when tab closes) |
| **Scope**         | Shared across all tabs/windows of the same origin   | Only for the specific tab/session       |
| **Storage Limit** | \~5MB per origin                                    | \~5MB per origin                        |
| **Access**        | Only accessible via JavaScript (Same-Origin Policy) | Only accessible via JavaScript          |
| **Auto Expiry**   | Never (manual deletion needed)                      | Yes (on tab close)                      |


✅ 3. Syntax

localStorage:

// Save data
localStorage.setItem('key', 'value');

// Retrieve data
let value = localStorage.getItem('key');

// Remove data
localStorage.removeItem('key');

// Clear all data
localStorage.clear();


sessionStorage:

// Save data
sessionStorage.setItem('key', 'value');

// Retrieve data
let value = sessionStorage.getItem('key');

// Remove data
sessionStorage.removeItem('key');

// Clear all data
sessionStorage.clear();
*/


// ✅ 4. Basic Example

// Store user name in localStorage
localStorage.setItem('username', 'JohnDoe');

// Retrieve it later
console.log(localStorage.getItem('username'));  // Output: JohnDoe

// Store user name in sessionStorage
sessionStorage.setItem('sessionUser', 'JaneDoe');

// Retrieve it later
console.log(sessionStorage.getItem('sessionUser'));  // Output: JaneDoe


// ✅ 5. Storing Objects
// localStorage and sessionStorage only store strings. 
// If you want to store objects or arrays, you must convert them using JSON.stringify() 
// and retrieve using JSON.parse().

// Object
const user = {
    name: 'Alice',
    age: 25
};

// Store in localStorage
localStorage.setItem('user', JSON.stringify(user));

// Retrieve from localStorage
const userData = JSON.parse(localStorage.getItem('user'));
console.log(userData.name);  // Output: Alice


// ✅ 6. Check if Item Exists

if(localStorage.getItem('username')) {
    console.log('User exists:', localStorage.getItem('username'));
} else {
    console.log('No user found.');
}


// ✅ 7. Iterate Over Storage
// Both localStorage and sessionStorage have a length property and can be iterated like this:

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
}


// ✅ 8. Advanced Use Cases

// a) Storing Theme Preference

// Save theme preference
function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
}

// Apply theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme) {
        document.body.className = savedTheme;
    }
});


// b) Session Timer (sessionStorage example)

// Start a session timer when user opens tab
if(!sessionStorage.getItem('sessionStart')) {
    sessionStorage.setItem('sessionStart', new Date().toISOString());
}

console.log('Session started at:', sessionStorage.getItem('sessionStart'));


// c) Shopping Cart Example (localStorage)

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add item to cart
function addItem(item) {
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Example usage
addItem({ id: 1, name: 'Laptop', price: 1200 });
console.log(JSON.parse(localStorage.getItem('cart')));

// ✅ 9. Security Considerations
// Data is not encrypted → Never store sensitive data like passwords or tokens.
// Accessible via JavaScript → Vulnerable to XSS attacks.
// Limitations → 5-10 MB max, no complex querying.

// ✅ 10. When to Use What?
// localStorage: For persistent data like theme, user preferences, cart items.
// sessionStorage: For temporary session data like form progress, session timers.


const nameElement = document.querySelector('.name-tag')
const nameInput = document.querySelector('.name')
const ageElement = document.querySelector('.age-tag')
const ageInput = document.querySelector('.age')

const myData = JSON.parse(localStorage.getItem('myData')) || {}

if (myData.name) {
  nameElement.innerText = myData.name
}

if (myData.age) {
  ageElement.innerText = myData.age
}

nameInput.addEventListener('input', (e) => {
  myData.name = e.target.value
  localStorage.setItem('myData', JSON.stringify(myData))
  nameElement.innerText = e.target.value
})

ageInput.addEventListener('input', (e) => {
  myData.age = e.target.value
  localStorage.setItem('myData', JSON.stringify(myData))
  ageElement.innerText = e.target.value
})

//Check if local storage is available and functional

function isLocalStorageAvailable() {
  try {
    const testKey = '__test__';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
}
console.log(isLocalStorageAvailable()); // Output: true or false


// localStorage.clear();
// sessionStorage.clear();
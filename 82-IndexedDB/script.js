// What Is IndexedDB?

// IndexedDB is a built-in database system in modern browsers that allows web applications 
// to store, search, and manage large amounts of structured data directly on the client side.

// Unlike localStorage or sessionStorage (which only store small string-based key-value pairs), IndexedDB can store:
// JavaScript objects
// Blobs (binary large objects, e.g., images or files)
// Complex data structures

// This makes it especially useful for offline-first web apps, progressive web apps (PWAs), 
// or apps that need to handle large datasets without depending on a server.


// How IndexedDB Works

// 1. Opening a Database:

// You start by opening (or creating) a database using indexedDB.open:
/*
let request = indexedDB.open("SampleDB", 1);

request.onerror = function() {
  console.log("Error opening database");
};

request.onsuccess = function(event) {
  let db = event.target.result;
  console.log("Database opened successfully");
};
*/
// "SampleDB" is the database name.
// 1 is the database version. IndexedDB requires versioning because schema changes 
// (like creating or modifying object stores) must happen in an upgrade step.
// If you open DevTools → Application → IndexedDB, you’ll see your database listed.



// 2. Creating an Object Store

// Object stores are like tables in relational databases. You define them inside the onupgradeneeded event 
// (which runs when the DB is created or version changes):
/*
request.onupgradeneeded = function(event) {
  let db = event.target.result;
  db.createObjectStore("customers", { keyPath: "id" });
};
*/
// "customers" is the object store (like a table).
// keyPath: "id" means each record must have an id property that acts like a primary key.



// 3. Adding Data

// To add or modify data, you must create a transaction. Transactions group operations together 
// and can be read-only or read-write:
/*
let transaction = db.transaction(["customers"], "readwrite");
let objectStore = transaction.objectStore("customers");

let request = objectStore.add({ 
  id: 1, 
  name: "John Doe", 
  email: "john@example.com" 
});

request.onsuccess = () => console.log("Data added successfully");
request.onerror = () => console.log("Error adding data");
*/
// "readwrite" gives permission to change data.
// add() inserts a new record (fails if the key already exists).
// Alternatively, put() can be used to add or update records.



// 4. Retrieving Data

// To get data, you again use a transaction and call get:
/*
let transaction = db.transaction(["customers"]);
let objectStore = transaction.objectStore("customers");

let request = objectStore.get(1);

request.onsuccess = () => {
  console.log("Customer:", request.result);
};
*/
// This retrieves the record where id = 1.
// You can also use:
// getAll() → fetch all records
// openCursor() → iterate through results (useful for large datasets)




// 5. Why IndexedDB Is Asynchronous

// IndexedDB operations are non-blocking (asynchronous). This means:
// Database reads/writes happen in the background.
// Your app’s UI stays responsive even with large datasets.
// You must handle results with callbacks, promises, or async/await.
// For example, many developers wrap IndexedDB in Promises or use helper libraries like idb
//  for cleaner async code.


// When to Use IndexedDB

// IndexedDB is the best choice when:
// You need to store large or complex datasets (e.g., product catalogs, offline app data).
// Your app must work offline (like PWAs).
// You need to store more than the 5MB limit of localStorage.
// You want fast client-side lookups using indexes (similar to database indexes).


// ✅ In summary:
// IndexedDB is a powerful, asynchronous, client-side database built into browsers. 
// You define databases and object stores, then use transactions to add, read, update, 
// or delete records—all while keeping your app responsive.



// Let’s look at how IndexedDB becomes much easier to use with the idb library, 
// which wraps all the callback-based IndexedDB APIs into Promises so you can use async/await.

// 1. Install idb

// If you’re using a bundler or npm project:
// npm install idb

// Or if you just want to use it in the browser:
/*
<script type="module">
  import { openDB } from "https://unpkg.com/idb?module";
</script>
*/

// 2. Opening a Database
/*
import { openDB } from "https://unpkg.com/idb?module";

const db = await openDB("SampleDB", 1, {
  upgrade(db) {
    // Create store if it doesn't already exist
    if (!db.objectStoreNames.contains("customers")) {
      db.createObjectStore("customers", { keyPath: "id" });
    }
  },
});
*/
// openDB returns a Promise, so we can use await.
// The upgrade callback is where we define object stores or indexes when the DB version changes.

// 3. Adding Data
/*
await db.add("customers", {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
});
*/
// That’s it—no transactions or callbacks to manage manually! 🚀
// (add will fail if the key already exists; use put if you want insert-or-update behavior.)

// 4. Retrieving Data
/*
const customer = await db.get("customers", 1);
console.log("Customer:", customer);
*/

// 5. Getting All Data
/*
const allCustomers = await db.getAll("customers");
console.log("All Customers:", allCustomers);
*/

// 6. Updating Data
/*
await db.put("customers", {
  id: 1,
  name: "John Smith", // updated name
  email: "john@example.com",
});
*/

// 7. Deleting Data
/*
await db.delete("customers", 1);
*/


// Why idb is Great
// No boilerplate transaction handling (it’s done automatically).
// async/await syntax is clean and easy to follow.
// Much closer to how you’d use a normal database API.

// 👉 With idb, IndexedDB feels like working with a mini client-side database instead of a low-level API.

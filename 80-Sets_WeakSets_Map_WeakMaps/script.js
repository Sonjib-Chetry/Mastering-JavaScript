// 🔹 Set in JavaScript
// A Set is a collection of unique values (no duplicates).
// It can store any type of data – primitives (number, string, boolean) or objects.

// Key Features:
// Stores any type of values (primitive + objects).
// Iterables → You can loop through it with for...of, forEach(), or use iterators (keys(), values(), entries()).
// Provides useful methods like:
// add(value)
// delete(value)
// has(value)
// clear()
// forEach(callback)
// Has the size property to know how many elements are inside.

// ✅ Example:

const mySet = new Set([1, 2, 2, 3, "hello"]);
console.log(mySet); // Set(3) {1, 2, 3, "hello"}

mySet.add(4);
console.log(mySet.has(2)); // true
console.log(mySet.size);   // 4

// 🔹 WeakSet in JavaScript
// A WeakSet is like a lighter version of Set, but it only stores objects (or symbols), and references to them are weak.

// Key Features:
// Only objects/symbols allowed (no numbers, strings, or booleans).
// References are weakly held → If no other reference exists to an object inside a WeakSet,
// it is garbage-collected automatically.
// Not iterable → Can’t loop over a WeakSet or see its contents.
// Methods available:
// add(object)
// delete(object)
// has(object)

// ✅ Example:

let obj11 = { name: "Tree" };
let obj12 = { name: "Fruit" };

const ws = new WeakSet([obj11, obj12]);
console.log(ws.has(obj11)); // true

// If obj1 is dereferenced, it will be garbage-collected automatically
obj11 = null; 
// WeakSet automatically clears that reference


// 🔑 Main Differences Between Set and WeakSet
/*
| Feature         | **Set**                                                                         | **WeakSet**                                            |
| --------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------ |
| **Value Types** | Any type (primitive + objects)                                                  | Only objects/symbols                                   |
| **Referencing** | Strong (prevents garbage collection)                                            | Weak (objects are GC’ed if unreferenced)               |
| **Iteration**   | Iterable (`forEach`, `for...of`, etc.)                                          | Not iterable                                           |
| **Methods**     | `add`, `delete`, `has`, `clear`, `keys`, `values`, `entries`, `forEach`, `size` | Only `add`, `delete`, `has`                            |
| **Visibility**  | You can view stored values                                                      | You cannot inspect contents directly                   |
| **Use Cases**   | Removing duplicates, managing unique data                                       | Memory-efficient object tracking, caches, DOM elements |
*/


// ✅ When to Use What?

// Use Set when you want a general collection of unique values 
// (like removing duplicates from an array, storing IDs, etc.).

// Use WeakSet when you want to track objects without preventing garbage collection 
// (like caching, DOM element tracking, or memory-sensitive structures).



// 🔹 Set Methods and Properties

// Create a Set
const trees = new Set();

// ✅ add(value) → Adds a value
trees.add("Baobab");
trees.add("Jackalberry");
trees.add("Mopane Tree");
trees.add("Breadfruit");
trees.add("Baobab"); // Duplicate → ignored
console.log(trees);
// Set(4) {"Baobab", "Jackalberry", "Mopane Tree", "Breadfruit"}

// ✅ has(value) → Checks if value exists
console.log(trees.has("Mopane Tree")); // true
console.log(trees.has("Neem")); // false

// ✅ delete(value) → Removes a specific value
trees.delete("Breadfruit");
console.log(trees); 
// Set(3) {"Baobab", "Jackalberry", "Mopane Tree"}

// ✅ size → Number of items
console.log(trees.size); // 3

// ✅ entries() → Returns [value, value] pairs (for compatibility with Map)
for (let entry of trees.entries()) {
  console.log(entry);
}
// ["Baobab", "Baobab"]
// ["Jackalberry", "Jackalberry"]
// ["Mopane Tree", "Mopane Tree"]

// ✅ keys() → Returns values (same as values in Set)
for (let key of trees.keys()) {
  console.log("Key:", key);
}
// Key: Baobab
// Key: Jackalberry
// Key: Mopane Tree

// ✅ values() → Returns values
for (let value of trees.values()) {
  console.log("Value:", value);
}
// Value: Baobab
// Value: Jackalberry
// Value: Mopane Tree

// ✅ forEach(callback) → Iterates over values
trees.forEach((tree) => console.log("Tree:", tree));
// Tree: Baobab
// Tree: Jackalberry
// Tree: Mopane Tree

// ✅ clear() → Removes all values
trees.clear();
console.log(trees); // Set(0) {}



// 🔹 WeakSet Methods

// ⚠️ Remember: WeakSet can only store objects, not primitives (like strings or numbers). 
// Also, it’s not iterable, so you can’t loop through it.

// Create a WeakSet
const ws1 = new WeakSet();

// Objects to add
let obj1 = { name: "Baobab" };
let obj2 = { name: "Jackalberry" };
let obj3 = { name: "Mopane Tree" };

// ✅ add(object) → Adds an object
ws1.add(obj1);
ws1.add(obj2);
ws1.add(obj3);

// ✅ has(object) → Checks if object exists
console.log(ws1.has(obj1)); // true
console.log(ws1.has({ name: "Baobab" })); // false (different reference)

// ✅ delete(object) → Removes an object
ws1.delete(obj2);
console.log(ws1.has(obj2)); // false

// ✅ Automatic garbage collection
obj1 = null; // dereference obj1
// At this point, WeakSet will auto-remove it when GC runs


// 📝 Quick Recap

// ✅ Set
// add(value)
// delete(value)
// has(value)
// clear()
// entries()
// keys()
// values()
// forEach(callback)
// size property

// ✅ WeakSet
// add(object)
// delete(object)
// has(object)
// (No iteration, no size, no clear)



// 🔹 Map in JavaScript
// A Map is a collection of key–value pairs.
// Unlike a plain JavaScript object ({}), Map keys can be of any type: strings, numbers, objects, functions, etc.

// ✅ Features of Map:
// Keys can be any type (primitive or object).
// Maintains the insertion order of keys.
// Iterable → you can loop with for...of, forEach(), keys(), values(), entries().
// Has a size property for quick count.
// More predictable compared to plain objects.

// Example:

const myMap = new Map();

// set(key, value)
myMap.set("name", "Oak tree");
myMap.set(42, "Pine tree");
myMap.set(true, "Birch tree");
myMap.set({ id: 1 }, "Maple tree");

console.log(myMap.size); // 4

// get(key)
console.log(myMap.get(42)); // "Pine tree"

// has(key)
console.log(myMap.has("name")); // true

// delete(key)
myMap.delete(true);
console.log(myMap.size); // 3

// entries()
for (const entry of myMap.entries()) {
  console.log(entry);
}
// ["name", "Oak tree"]
// [42, "Pine tree"]
// [{id: 1}, "Maple tree"]

// keys()
for (const key of myMap.keys()) {
  console.log("Key:", key);
}

// values()
for (const value of myMap.values()) {
  console.log("Value:", value);
}

// forEach()
myMap.forEach((value, key) => {
  console.log(`${key} => ${value}`);
});

// clear()
myMap.clear();
console.log(myMap.size); // 0




// 🔹 WeakMap in JavaScript
// A WeakMap is similar to a Map but with important restrictions:

// ✅ Features of WeakMap:
// Keys must be objects (not primitives).
// Values can be of any type.
// Keys are weakly referenced:
// If no other reference exists to a key object, it will be garbage-collected.
// Not iterable → you cannot loop through keys/values.
// No size property, no clear(), no forEach().

// Example:

const wm = new WeakMap();

let obj21 = { id: 1 };
let obj22 = { id: 2 };

// set(key, value)
wm.set(obj21, "Maple tree");
wm.set(obj22, "Pine tree");

// get(key)
console.log(wm.get(obj21)); // "Maple tree"

// has(key)
console.log(wm.has(obj22)); // true

// delete(key)
wm.delete(obj22);
console.log(wm.has(obj22)); // false

// Garbage collection example
obj21 = null;
// Now {id:1} has no strong references → WeakMap entry auto-removed when GC runs


// 🔑 Differences Between Map and WeakMap
/*
| Feature           | **Map**                                                      | **WeakMap**                                                                  |
| ----------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| **Key Types**     | Any type (string, number, boolean, object, function, etc.)   | Must be **objects only**                                                     |
| **Referencing**   | Strong → Keys stay until removed manually                    | Weak → Keys are garbage-collected if no other references exist               |
| **Iteration**     | Iterable (`forEach`, `keys`, `values`, `entries`)            | Not iterable                                                                 |
| **Size Property** | Has `size`                                                   | No `size` property                                                           |
| **Methods**       | `set`, `get`, `has`, `delete`, `clear`, `forEach`, `entries` | Only `set`, `get`, `has`, `delete`                                           |
| **Use Case**      | General-purpose key–value storage                            | Efficient memory handling when associating data with objects (e.g., caching) |
*/


// 📝 Quick Analogy
// Map = “Notebook” where you can write down pairs of anything → names, numbers, drawings, etc. (you control when to erase).
// WeakMap = “Sticky notes” attached to objects → when the object is gone, the note goes too (automatic cleanup).
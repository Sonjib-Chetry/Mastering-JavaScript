// 🔹 What Are Cookies?
// Cookies are small text files that a server sends to your browser when you visit a website. 
// They are stored on your device (computer, phone, etc.) and sent back to the server 
// with every subsequent request to the same domain.

// Because HTTP is stateless (it doesn’t remember previous requests), 
// cookies help websites maintain state — like remembering you’re logged in, 
// keeping track of your shopping cart, or storing user preferences.


// 🔹 How Cookies Work (Step by Step)
// Server sends a cookie → When you visit a site, the server includes a Set-Cookie header in its HTTP response.
/*
Set-Cookie: sessionId=abc123; Expires=Wed, 21 Oct 2025 07:28:00 GMT; Secure; HttpOnly
*/
// Browser stores the cookie → Your browser saves it locally.
// Browser sends cookie back → On future requests to the same domain, the browser automatically includes it in the Cookie header.
/*
Cookie: sessionId=abc123
*/
// Server uses cookie → The server reads the cookie and uses it (for example, to identify your session).


// 🔹 Types of Cookies

// Session Cookies
// Exist only while the browser is open.
// Used for temporary info like login sessions.
// Deleted when you close the browser.

// Persistent Cookies
// Stored with an expiration date.
// Remain after closing the browser.
// Used for “Remember me” logins, site preferences.

// Secure Cookies
// Sent only over HTTPS.
// Prevents attackers from intercepting cookies in plaintext.

// HttpOnly Cookies
// Can’t be accessed by JavaScript (document.cookie).
// Protects against XSS attacks.

// SameSite Cookies (not mentioned in your draft, but very important):
// Control whether cookies are sent with cross-site requests.
// Values:
// Strict → Sent only for same-site requests.
// Lax → Sent for top-level navigation but not for most cross-site requests.
// None → Sent in all contexts (must be Secure).
// Helps protect against CSRF attacks.


// 🔹 Setting Cookies

// Via HTTP Header (Server → Browse
/*
Set-Cookie: username=JohnDoe; Expires=Fri, 31 Dec 2025 23:59:59 GMT; Path=/; Secure; HttpOnly
*/
// Via JavaScript
/*
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
*/

// 🔹 Updating Cookies
// Just set a cookie with the same name but a new value:
/*
document.cookie = "username=JaneDoe; path=/";
*/

// 🔹 Deleting Cookies
// Set the cookie with an expiration date in the past:
/*
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
*/


// 🔹 Key Uses of Cookies
// Authentication & Sessions → Keep users logged in.
// Personalization → Store preferences (theme, language).
// Analytics & Tracking → Track user behavior across pages/sites.
// Shopping Carts → Save items even if you navigate away.

// ✅ In summary:
// Cookies are tiny key-value pairs that help web apps maintain state in an otherwise stateless protocol. 
// With features like Secure, HttpOnly, and SameSite, they can be made much safer against common web attacks.


// 🔹 Common Negative Patterns in Client-Side Storage

// 1. Excessive Tracking with Cookies
// Pattern: Using cookies to track users across websites without consent.
// Problem: Enables behavioral profiling and targeted ads, often violating user privacy.
// Example:
/*
document.cookie = "userID=123; path=/; expires=Thu, 18 Dec 2024 06:00:00 UTC";
*/
// This may seem simple, but if multiple sites share or sync IDs, it becomes invasive.
// 👉 Why it’s bad: Creates detailed user activity logs without transparency or user control.

// 2. Browser Fingerprinting
// Pattern: Collecting unique characteristics of the browser and device to build an identifier.
// Problem: Works even when cookies are disabled or deleted, making it nearly impossible to opt out.
// Example:
/*
let fingerprintExample = navigator.userAgent + screen.width + screen.height;
console.log(fingerprintExample);
*/
// Real-world fingerprinting is far more advanced: fonts, canvas rendering, WebGL info, audio context, etc.
// 👉 Why it’s bad: Violates user anonymity, enables cross-site tracking, often done without consent.

// 3. Storing Sensitive Data in Plaintext
// Pattern: Developers putting passwords, tokens, or personal info in localStorage, sessionStorage, or cookies.
// Problem: These storages are not encrypted and can be accessed by any JavaScript running in the page 
// (including malicious scripts injected via XSS).
// Example:
/*
localStorage.setItem("userPassword", "SuperSecret123");
*/
// 👉 Why it’s bad: Sensitive data is at risk from XSS attacks or if someone gains access to the device.

// 4. Overusing localStorage/sessionStorage
// Pattern: Treating localStorage as a database for large datasets (e.g., caching entire API responses, storing big blobs).
// Problem:
// Limited storage (typically ~5MB).
// No built-in expiration.
// Blocking API → accessing it on the main thread can freeze the UI.
// 👉 Why it’s bad: Leads to performance issues, stale data, and poor UX.

// 5. Persistent Identifiers Without Expiration
// Pattern: Storing long-lived IDs in cookies, localStorage, or IndexedDB without expiration or cleanup.
// Problem: Users remain identifiable indefinitely, even if they clear cookies 
// (because localStorage/IndexedDB may still persist).
// Example:
/*
localStorage.setItem("trackingID", "abc-123-xyz");
*/
// 👉 Why it’s bad: Circumvents user attempts to reset their privacy (e.g., deleting cookies but still being tracked via storage).

// 6. Using Client-Side Storage for Security-Critical Data
// Pattern: Storing JWTs, session tokens, or CSRF tokens in localStorage.
// Problem: They can be stolen via XSS attacks since JavaScript can read them.
// Best practice: Store session tokens in HttpOnly, Secure cookies instead.
// 👉 Why it’s bad: Makes authentication vulnerable.

// 7. No Data Expiration or Cleanup
// Pattern: Storing data permanently in localStorage/IndexedDB without expiry or cleanup mechanism.
// Problem:
// Bloated storage → user’s disk fills with junk.
// Security risk if sensitive info lingers indefinitely.
// 👉 Why it’s bad: Leads to poor performance and long-term privacy leaks.


// 🔹 In Summary
// Client-side storage is powerful, but common negative patterns include:
// Tracking with cookies beyond user expectations.
// Fingerprinting for invisible user identification.
// Storing sensitive data insecurely (passwords, tokens).
// Overloading localStorage/sessionStorage with large or permanent data.
// Creating persistent identifiers that bypass user privacy controls.
// Misusing storage for authentication/security-critical data.
// Neglecting cleanup, expiration, and data lifecycle management.
// ✅ Golden Rule: Store only what’s necessary, never store secrets, and always respect user privacy.



// 🔹 Cookies and Arbitrary Data

// Normally:
// Server sets cookies using the Set-Cookie header.
// Browser sends cookies back with every request in the Cookie header.
// Example:
/*
Set-Cookie: sessionId=abc123; Path=/; HttpOnly; Secure
Cookie: sessionId=abc123
*/
// But since cookies are just name-value pairs (strings), you can store anything that can be serialized into a string.

// ✅ Example: JSON in Cookies
/*
const userData = {
  name: "John Doe",
  age: 30,
  role: "admin"
};

// Store in cookie (stringify first)
document.cookie = "userInfo=" + JSON.stringify(userData) + "; path=/";

// Later: read and parse
const cookies = document.cookie.split("; ");
const userInfoCookie = cookies.find(c => c.startsWith("userInfo="));
const userInfo = JSON.parse(userInfoCookie.split("=")[1]);

console.log(userInfo.name); // "John Doe"
*/
// This way, you can store arrays, objects, and even nested structures — as long as they fit within the size limit.


// 🔹 Relationship to HTTP Headers
// Cookies set via JavaScript (document.cookie) are still ultimately delivered back to the server in the Cookie HTTP header.
// So, even though you’re “storing arbitrary data,” it still travels with every HTTP request unless you 
// scope it with attributes like Path, Domain, or SameSite.
// For example:
/*
Cookie: userInfo={"name":"John Doe","age":30,"role":"admin"}
*/
// This means if you use cookies to hold a JSON object, the server sees the same string every time.


// 🔹 Limitations & Risks

// Size limit (~4KB per cookie)
// JSON gets bulky, so you can’t store much.
// Bad for large objects or lots of data.

// Performance cost
// Every cookie is sent on every request to the same domain.
// Bigger cookies = slower requests.

// Security risks
// Data is stored in plaintext.
// Any JavaScript (including malicious injected scripts) can read/write cookies unless you set HttpOnly.
// Never store sensitive info (passwords, tokens, credit cards) in cookies accessible to JS.


// 🔹 When Is It OK to Store Arbitrary Data in Cookies?

// Good for:
// Small preferences (theme=dark, language=en)
// Non-sensitive session hints (UI state, last visited tab)

// Bad for:
// Sensitive data (passwords, tokens, PII)
// Large/complex objects (better use localStorage, sessionStorage, or IndexedDB)


// ✅ In summary:
// Cookies are controlled by HTTP headers (Set-Cookie, Cookie), but since they’re just strings, 
// you can store arbitrary data like JSON. However, cookies:
// have a size limit,
// are automatically sent with every request (increasing bandwidth),
// and pose security/privacy risks.
// That’s why best practice is to store only lightweight, non-sensitive data in cookies and use other 
// client-side storage (localStorage/IndexedDB) for heavier or sensitive data.





// 🔹 What Is the Cache API?

// The Cache API is a JavaScript API that lets you store network requests (Request objects) 
// and their responses (Response objects) directly in the browser.

// Unlike localStorage or sessionStorage, which store strings, the Cache API stores entire HTTP responses, 
// including images, HTML, CSS, JS, JSON, etc.
// It lives inside a storage area called CacheStorage (managed by the browser).
// It’s commonly used with service workers to provide offline capabilities in Progressive Web Apps (PWAs).


// 🔹 Why Do We Need the Cache API?

// HTTP by itself is stateless, and fetching resources from the server repeatedly:
// Slows down performance
// Consumes bandwidth
// Breaks apps when the user is offline

// The Cache API allows us to:
// Save resources when online ✅
// Serve them later when offline ✅
// Speed up repeat visits by avoiding unnecessary network requests ✅


// 🔹 How It Works (Step by Step)

// Open a cache
/*
caches.open("my-cache").then(cache => {
    console.log("Cache opened:", cache);
});
*/

// Add resources to the cache
/*
caches.open("my-cache").then(cache => {
    cache.add("/index.html"); // fetches & stores automatically
    cache.addAll(["/styles.css", "/script.js", "/logo.png"]);
});
*/

// Retrieve resources from the cache
/*
caches.match("/index.html").then(response => {
    if (response) {
        return response.text().then(text => console.log(text));
    }
});
*/

// Respond to network requests (via Service Worker)
/*
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );
});
*/
// If the requested file exists in cache → return it.
// Otherwise → fetch from the network.


// 🔹 Cache API vs. HTTP Cache

// HTTP Cache (browser cache) is controlled by headers like Cache-Control and ETag. 
// The browser decides when to expire/revalidate resources.
// Cache API is fully controlled by developers. You decide what to cache, when to update, and how to serve.

// Example of an HTTP cache header:
/*
Cache-Control: max-age=3600
*/
// (Tells the browser to reuse this response for 1 hour before checking with the server again.)


// 🔹 Example: Offline-First Strategy
// With a service worker and the Cache API, you can serve cached content when offline:
/*
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("app-cache").then(cache => {
            return cache.addAll([
                "/",
                "/index.html",
                "/styles.css",
                "/app.js",
                "/offline.html"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).catch(() => caches.match("/offline.html"));
        })
    );
});
*/
// ➡️ This ensures:
// Online: Serve fresh content and cache it.
// Offline: Show cached version (or offline.html fallback).


// 🔹 Common Methods of the Cache API

// caches.open(name) → open/create a cache
// cache.add(url) → fetch and store a single resource
// cache.addAll([urls]) → fetch and store multiple resources
// cache.put(request, response) → manually add to cache
// caches.match(request) → find a matching cached response
// caches.keys() → list all cache names
// caches.delete(name) → delete a cache


// ✅ In summary:
// The Cache API is like a developer-controlled storage for requests and responses, 
// essential for offline support, faster load times, and efficient PWAs. Combined with service workers, 
// it makes web apps behave like native apps.


// 🔹 What Is Caching?

// Caching is storing a copy of files or data so they can be reused instead of being re-fetched from the network every time.
// Browser Cache: Built into the browser. Controlled by HTTP headers (Cache-Control, ETag).
// Cache API (via Service Workers): Developer-controlled. Lets you explicitly store and manage requests/responses.

// ✅ Benefits:
// Faster page loads.
// Reduced network traffic.
// Offline access to previously cached content.


// 🔹 What Is a Service Worker?

// A service worker is a JavaScript file that runs in the background, separate from the web page.
// It intercepts network requests before they go to the internet.
// It can decide where to serve content from: cache, network, or a combination.
// It enables features like offline support, push notifications, and background sync.
// 👉 Think of it as a proxy between your web app and the internet.


// 🔹 How Cache and Service Workers Work Together

// Install Phase
// When the PWA is first loaded, the service worker is installed.
// During this step, the service worker pre-caches important files (HTML, CSS, JS, images).
/*
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("app-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/styles.css",
        "/app.js",
        "/logo.png"
      ]);
    })
  );
});
*/

// Activate Phase
// Old caches can be cleaned up.
// The service worker becomes active and ready to control pages.

// Fetch Phase
// For every network request, the service worker checks the cache first.
// If cached → return cached version.
// If not cached → fetch from the network, then optionally cache it for next time.
/*
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
*/


// 🔹 Why This Matters for PWAs

// Offline Support → If you lose connection, the service worker serves cached files.
// Performance → Returning cached responses is faster than network requests.
// Reliability → Even on poor connections, the app feels smooth and responsive.

// Example:
// First visit → files are cached.
// Offline visit → app loads from cache, no network needed.
// Online again → service worker syncs new data with the server.


// 🔹 Caching Strategies with Service Workers

// Different PWAs use different strategies depending on needs:
// Cache First → Use cache, fallback to network. (Good for static assets)
// Network First → Use network, fallback to cache. (Good for dynamic data like news feeds)
// Stale-While-Revalidate → Serve from cache immediately, fetch newer version in the background.


// ✅ In summary:
// Caching = storing copies of resources for speed and offline use.
// Service Workers = background scripts that control how requests are handled (cache vs. network).
// Together, they form the backbone of Progressive Web Apps (PWAs), enabling fast, 
// reliable, and offline-capable web experiences.
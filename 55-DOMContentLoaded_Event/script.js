

window.addEventListener("load", function () {
  console.log("All resources (images, CSS) have loaded");
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
});


/*
The DOMContentLoaded event is a crucial part of the web page loading process in JavaScript. 
It fires when the initial HTML document has been completely loaded and parsed, 
without waiting for stylesheets, images, and subframes to finish loading.


✅ What is DOMContentLoaded?

It signals that the HTML structure of the page is ready to be interacted with (DOM is fully built).
External resources like CSS, images, videos, or iframes may still be loading.
It’s often used to run JavaScript as soon as the DOM is ready, without waiting for full page load.

✅ When Does It Fire?

After the browser has parsed the HTML and built the DOM tree.
Before the load event, which waits for images, CSS, and other resources.
Typically fires much earlier than window.onload.

✅ Syntax
You can listen for the event using:

document.addEventListener('DOMContentLoaded', function() {
  // Code here runs when DOM is ready
});


✅ Difference Between DOMContentLoaded and window.onload

| Event                | When It Fires                                                                          |
| -------------------- | -------------------------------------------------------------------------------------- |
| **DOMContentLoaded** | After HTML is parsed (DOM ready), external resources like images can still be loading. |
| **load**             | After the entire page (DOM + CSS + images + resources) is fully loaded.                |


✅ Example 1: Basic Usage

<!DOCTYPE html>
<html>
<head>
  <title>DOMContentLoaded Example</title>
</head>
<body>
  <h1 id="heading">Hello</h1>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const heading = document.getElementById('heading');
      heading.textContent = 'DOM is Ready!';
    });
  </script>
</body>
</html>

✔ Here, the JavaScript modifies the heading as soon as the DOM is ready, even if images or CSS are still loading.


✅ Example 2: Comparing with window.onload

<!DOCTYPE html>
<html>
<head>
  <title>DOMContentLoaded vs load</title>
</head>
<body>
  <img src="https://via.placeholder.com/200x200?text=Image" alt="Sample Image">
  
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      console.log('DOM fully loaded and parsed');
    });

    window.addEventListener('load', function() {
      console.log('All resources (images, CSS) have loaded');
    });
  </script>
</body>
</html>


✔ Output in console:
First: "DOM fully loaded and parsed"
Then: "All resources (images, CSS) have loaded"


✅ Example 3: Why It's Important
If you put JS in the head without defer or DOMContentLoaded, it may run before the DOM exists:

<!DOCTYPE html>
<html>
<head>
  <title>Without DOMContentLoaded</title>
  <script>
    const heading = document.getElementById('heading'); // ❌ Null if DOM not ready
    console.log(heading);
  </script>
</head>
<body>
  <h1 id="heading">Hello</h1>
</body>
</html>


✔ This will log null because the script runs before the <h1> is parsed.
To fix this, either:
Move the script to the bottom of the body, OR
Use defer in <script>, OR
Use DOMContentLoaded event.


✅ Best Practice

Use DOMContentLoaded when you need the DOM only (no need to wait for images or CSS).
Use window.onload only if you need all assets loaded (e.g., image sizes, animations that depend on images).


✅ Advanced Example: Multiple Listeners & Removing Them

<!DOCTYPE html>
<html>
<head>
  <title>Advanced DOMContentLoaded</title>
</head>
<body>
  <h1 id="heading">Original Heading</h1>

  <script>
    function onDomReady() {
      document.getElementById('heading').textContent = 'Updated After DOM Ready';
      console.log('DOM Ready!');
      document.removeEventListener('DOMContentLoaded', onDomReady); // Remove after firing
    }

    document.addEventListener('DOMContentLoaded', onDomReady);
  </script>
</body>
</html>

✔ This shows:
Multiple listeners can be added.
You can remove them after execution.
*/
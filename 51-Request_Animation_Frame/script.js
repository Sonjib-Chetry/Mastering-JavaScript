

// reference the rectangle
const rect = document.getElementById("rect");

// start with a position of 0
let position = 0;

function update() {
  // Move the rectangle 2px to the right
  rect.style.left = position + "px";
  position += 2;

  // Reset the position when the rectangle reaches
  // the right side of the screen
  if (position > window.innerWidth) {
    // Move the rectangle just outside the left side of the screen
    position = -rect.offsetWidth;
  }
}

function animate() {
  // Update the position
  update();

  //request the next frame
  requestAnimationFrame(animate);
}

// Start the animation
requestAnimationFrame(animate);


//The requestAnimationFrame() API is a browser method provided by the Window interface in JavaScript, 
// used to schedule smooth animations in sync with the browser's refresh rate. 
// It’s the recommended way to update animations in the browser 
// instead of using setTimeout() or setInterval() because it is optimized for performance and energy efficiency.


// ✅ Basic Concept
// requestAnimationFrame() tells the browser:
// "Call this function before the next repaint (frame), so I can update my animation smoothly."

// The browser refreshes at ~60 FPS (frames per second), meaning every frame is about 16.67ms apart.
// Instead of calling your animation logic at a fixed interval, requestAnimationFrame() 
// adapts to the browser’s refresh cycle.
// It automatically pauses when the tab is inactive, saving CPU and battery.

// Syntax:
// let requestId = requestAnimationFrame(callback);

// callback: A function that runs before the next repaint.
// The browser passes a DOMHighResTimeStamp (current time in ms) to the callback.
// requestId: An ID you can use to cancel the request using cancelAnimationFrame().


// ✅ Basic Example
// Animating a simple box moving horizontally:

/*
<div id="box" style="width:50px; height:50px; background:red; position:absolute;"></div>

<script>
const box = document.getElementById('box');
let position = 0;

function animate() {
    position += 2; // move 2px per frame
    box.style.left = position + 'px';

    if (position < 500) {
        requestAnimationFrame(animate); // keep animating until 500px
    }
}

requestAnimationFrame(animate); // start animation
</script>
*/

// ✅ Why is this smooth?
// The browser decides when to paint based on the next refresh cycle, ensuring no frame drops.

// ✅ How it differs from setInterval

// setInterval(animate, 16); // Tries to run every 16ms

// Problems with setInterval():

// Doesn’t sync with browser refresh rate → can cause jittering.
// Keeps running even when the tab is inactive, wasting CPU.
// Multiple animations can clash.

// requestAnimationFrame():

// Syncs with browser refresh → smooth animation.
// Pauses in inactive tabs → energy efficient.


// ✅ Advanced Usage
// 1. Using the timestamp for smooth motion
// Instead of adding a fixed value like position += 2, use the timestamp for time-based animation:

/*
const box = document.getElementById('box');
let start = null;

function animate(timestamp) {
    if (!start) start = timestamp; // first frame time
    const progress = timestamp - start; // elapsed time

    const position = Math.min(progress / 10, 500); // 0.1px/ms
    box.style.left = position + 'px';

    if (position < 500) {
        requestAnimationFrame(animate);
    }
}

requestAnimationFrame(animate);
*/

// ✅ Why better?
// Animation speed is now independent of frame rate.


// 2. Canceling an animation
// You can stop an animation using cancelAnimationFrame():

/*
let requestId;

function animate() {
    console.log("Animating...");
    requestId = requestAnimationFrame(animate);
}

// Start animation
requestId = requestAnimationFrame(animate);

// Stop after 2 seconds
setTimeout(() => cancelAnimationFrame(requestId), 2000);
*/

// 3. Chaining multiple animations
// You can use it for sequential animations:

/*
function moveRight(timestamp) {
    // move logic
    if (done) requestAnimationFrame(moveDown);
}

function moveDown(timestamp) {
    // move logic
    if (done) requestAnimationFrame(moveLeft);
}
*/


// ✅ Best Practices

// ✔ Always use timestamp-based animations for smoothness.
// ✔ Avoid heavy computations in the animation loop → use Web Workers if needed.
// ✔ Group DOM changes together to reduce reflows.
// ✔ Use CSS transforms instead of top/left for better performance (GPU acceleration).


// ✅ Real-World Examples
// 1. Smooth Progress Bar

const bar = document.getElementById('progress');
let start = null;

function progress(timestamp) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;

    const width = Math.min(elapsed / 100, 100); // up to 100%
    bar.style.width = width + '%';

    if (width < 100) {
        requestAnimationFrame(progress);
    }
}

requestAnimationFrame(progress);

// 2. Game Loop

/*
let lastTime = 0;

function gameLoop(time) {
    const delta = time - lastTime;
    lastTime = time;

    updateGame(delta); // update based on time difference
    drawGame(); // render

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
*/

// ✅ Why is this essential for games?
// It ensures smooth gameplay across devices and monitors.


// ✅ Advanced Techniques
// Double Buffering: Combine with OffscreenCanvas or WebGL for better performance.
// Frame Skipping: If rendering takes too long, adjust position based on time delta.
// Combine with CSS: Use requestAnimationFrame() for JavaScript-driven animations, 
// but CSS transitions are often better for simple animations.





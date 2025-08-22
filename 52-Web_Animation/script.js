
const square = document.querySelector("#square");
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");

const animation = square.animate(
  [{ transform: "translateX(0px)" }, { transform: "translateX(200px)" }],
  {
    duration: 5000, // Animation lasts 5 seconds
    // iterations: Infinity, // Loops indefinitely
    iterations: Infinity,
    direction: "alternate", // Moves back and forth
    easing: "ease-in-out", // Smooth easing function
  }
);

// Set the onfinish property to log a message when the animation ends
animation.onfinish = () => {
  console.log("Animation finished!");
};

// Play the animation when the "Play" button is clicked
playBtn.addEventListener("click", () => {
  animation.play();
  console.log("You start the animation");
});

// Pause the animation when the "Pause" button is clicked
pauseBtn.addEventListener("click", () => {
  animation.pause();
  console.log("You pause the animation");
});


//✅ What is Web Animations API?
// The Web Animations API (WAAPI) is a JavaScript way to create and control animations 
// without CSS keyframes or setInterval/requestAnimationFrame. 
// It gives you better control (pause, play, reverse, speed, etc.).

// ✅ Basic Syntax

// element.animate(keyframes, options);

// keyframes: An array of styles to animate between.
// options: How long, easing, repeat, etc.

// ✅ Simple Example
/*
<div class="box"></div>
<script>
const box = document.querySelector('.box');

box.animate(
  [
    { transform: 'translateX(0)' },       // Start
    { transform: 'translateX(200px)' }    // End
  ],
  {
    duration: 1000,        // 1 second
    iterations: 1,         // Run once
    easing: 'ease-out',    // Smooth end
    fill: 'forwards'       // Keep last position
  }
);
</script>
<style>
.box { width: 80px; height: 80px; background: purple; }
</style>
*/

// ✅ Key Options

// duration: time in ms
// iterations: how many times (or Infinity)
// easing: "linear", "ease-in-out", or cubic-bezier(...)
// fill: "forwards" keeps final state
// delay: start delay in ms



//✅ Add Control

// You can store the animation and pause, play, reverse:
/*
const anim = box.animate(
  [{ transform: 'translateY(0)' }, { transform: 'translateY(100px)' }],
  { duration: 1000, fill: 'forwards' }
);

anim.pause();
anim.play();
anim.reverse();
*/

//✅ Common Use Cases

// ✔ Fade In
// el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, fill: 'forwards' });

// ✔ Bounce
// el.animate(
//   [{ transform: 'translateY(0)' }, { transform: 'translateY(-30px)' }, { transform: 'translateY(0)' }],
//   { duration: 600, iterations: 2 }
// );

// ✔ Loop Forever
// el.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: 2000, iterations: Infinity });


// ✅ Why Use WAAPI?

// Easier control than CSS animations.
// Can pause/resume with JavaScript.
// Can speed up or reverse without writing new CSS.


// ✅ 1. Store Animation & Control It
// When you create an animation, store it in a variable:
/*
const anim = box.animate(
  [{ transform: 'translateX(0)' }, { transform: 'translateX(200px)' }],
  { duration: 1000, fill: 'forwards' }
);

// Controls
anim.pause();
anim.play();
anim.reverse();
anim.currentTime = 500;  // Jump to 0.5 sec
anim.playbackRate = 2;   // Speed up
*/


// ✅ 2. Events & Promises
// You can run code after animation finishes:
/*
anim.onfinish = () => console.log('Animation Done!');

// OR using Promise
anim.finished.then(() => console.log('Completed!'));
*/

// ✅ 3. Stagger Animations (One by One)
// For lists or multiple items:
/*
const items = document.querySelectorAll('.item');

items.forEach((item, i) => {
  item.animate(
    [{ opacity: 0, transform: 'translateY(20px)' }, { opacity: 1, transform: 'translateY(0)' }],
    { duration: 500, delay: i * 200, fill: 'forwards' }
  );
});
*/
// Result: Each item fades in with a small delay.


// ✅ 4. Loop & Alternate Direction
// Make it go back and forth:
/*
box.animate(
  [{ transform: 'translateX(0)' }, { transform: 'translateX(200px)' }],
  { duration: 1000, iterations: Infinity, direction: 'alternate' }
);
*/


// ✅ 5. Combine Animations (Sequence)
// Run one animation after another:
/*
async function animateSequence(el) {
  await el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 }).finished;
  await el.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.2)' }], { duration: 500 }).finished;
}
animateSequence(document.querySelector('.box'));
*/


// ✅ 6. Control CSS Animations with WAAPI
// You can pause or speed up existing CSS animations:
/*
.box {
  animation: move 2s infinite;
}
@keyframes move {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}
*/
/*
const anim = document.querySelector('.box').getAnimations()[0];
anim.pause();         // Stop CSS animation
anim.playbackRate = 3; // Make it 3x faster
*/


// ✅ Best Practice Tips:

// ✔ Always use transform + opacity for smooth performance.
// ✔ Use fill: 'forwards' if you want to keep the last frame.
// ✔ For multiple animations, await finished for chaining.




// ✅ Advanced Features:

// ✅ 1. Scroll-linked Animations (ScrollTimeline API)
// Animate an element based on scroll progress:
/*
<section id="scroll-container" style="height:200vh; background:#eee;"></section>
<div id="box" style="width:80px; height:80px; background:red;"></div>

<script>
const box = document.getElementById('box');

const timeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: 'block',
  scrollOffsets: [CSS.percent(0), CSS.percent(100)]
});

const anim = new Animation(
  new KeyframeEffect(
    box,
    [{ transform: 'translateY(0)' }, { transform: 'translateY(500px)' }],
    { duration: 1, fill: 'both' } // 1 means full scroll range
  ),
  timeline
);

anim.play();
</script>
*/
// Result: The box moves as you scroll. (Works in Chromium-based browsers & Safari.)


// ✅ 2. Motion Path Animation
// Follow a curve using offset-path:
/*
<div class="circle"></div>
<style>
.circle {
  width: 50px; height: 50px; background: blue; position: absolute;
  offset-path: path('M0,0 C150,100 150,200 300,300'); // Path curve
  offset-rotate: auto; //Rotate with path
}
</style>
<script>
document.querySelector('.circle').animate(
  [{ offsetDistance: '0%' }, { offsetDistance: '100%' }],
  { duration: 3000, iterations: Infinity }
);
</script>
*/


// ✅ 3. Update Animation Timing in Real Time
// Change speed, delay, or duration dynamically:
/*
const anim = box.animate(
  [{ transform: 'scale(1)' }, { transform: 'scale(2)' }],
  { duration: 2000, fill: 'forwards' }
);

// After 1 second, make it faster
setTimeout(() => {
  anim.effect.updateTiming({ duration: 1000 });
}, 1000);
*/


// ✅ 4. Animate Pseudo-elements (::before / ::after)
// Use KeyframeEffect:
/*
const effect = new KeyframeEffect(
  document.querySelector('.box'),
  [{ background: 'yellow' }, { background: 'orange' }],
  { duration: 1000 }
);
effect.pseudoElement = '::before';

const anim = new Animation(effect);
anim.play();
*/


// ✅ 5. Synchronize Multiple Animations
// Run them together or in sequence:
/*
const a = el1.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 });
const b = el2.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.2)' }], { duration: 500 });

// Wait for both
Promise.all([a.finished, b.finished]).then(() => console.log('Both done'));
*/


// ✅ 6. Interactive Scrubber (Seek Animation)
// Control animation with input range:
/*
<input type="range" min="0" max="100" value="0" />
<div class="box"></div>
<script>
const box = document.querySelector('.box');
const anim = box.animate(
  [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }],
  { duration: 2000, fill: 'both' }
);
anim.pause();

document.querySelector('input').addEventListener('input', (e) => {
  anim.currentTime = (e.target.value / 100) * anim.effect.getTiming().duration;
});
</script>
*/

// ✅ 7. Performance & Best Practices

// ✔ Use transform and opacity for 60fps animations.
// ✔ Use fill: 'forwards' if you want the end state to remain.
// ✔ Cancel animations when not needed: anim.cancel().
// ✔ Respect user settings:

/*
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  anim.cancel();
}
*/


// ✅ Quick Advanced Features Recap:

// Scroll-linked animation → ScrollTimeline
// Motion Path → offset-path, offsetDistance
// Dynamic update → effect.updateTiming()
// Pseudo-elements → effect.pseudoElement = '::before'
// Control group → Promise.all([anim.finished])
// Scrubbing → use currentTime


/*
✅ Web Animations API Summary Table

| **Object**              | **Properties**                                                                                 | **Methods**                                                                                          |
| ----------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Animation**           | `id`, `effect`, `timeline`, `playState`, `playbackRate`, `startTime`, `currentTime`, `pending` | `.play()`, `.pause()`, `.reverse()`, `.cancel()`, `.finish()`, `.updatePlaybackRate()`, `.persist()` |
| **Animation (Promise)** | `.ready`, `.finished`                                                                          | –                                                                                                    |
| **Animation (Events)**  | `onfinish`, `oncancel`                                                                         | –                                                                                                    |
| **KeyframeEffect**      | `target`, `pseudoElement`, `composite`, `iterationComposite`                                   | `.getKeyframes()`, `.setKeyframes()`, `.getTiming()`, `.updateTiming()`                              |
| **AnimationTimeline**   | `currentTime`                                                                                  | –                                                                                                    |
| **Timing Options**      | `duration`, `delay`, `endDelay`, `iterations`, `iterationStart`, `direction`, `easing`, `fill` | –                                                                                                    |
*/
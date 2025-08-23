
const canvas = document.getElementById("my-canvas");

const ctx = canvas.getContext("2d");

// Set the background color
ctx.fillStyle = "crimson";

// Draw a rectangle
ctx.fillRect(1, 1, 150, 100);

const textCanvas = document.getElementById("my-text-canvas");

const textCanvasCtx = textCanvas.getContext("2d");

// Set font family and size
textCanvasCtx.font = "30px Arial";

// Set text color
textCanvasCtx.fillStyle = "crimson";

// Draw the text
textCanvasCtx.fillText("Hello HTML Canvas!", 10, 50);


/*
✅ 1. What is Canvas API?

The Canvas API allows you to draw graphics inside an HTML <canvas> element. Unlike SVG, 
which uses XML markup to describe graphics, the Canvas API is pixel-based and uses 
JavaScript for all drawing operations.

Basic Setup

<canvas id="myCanvas" width="400" height="200" style="border:1px solid #000;"></canvas>
<script>
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d'); // 2D rendering context
</script>


getContext('2d') gives access to the 2D drawing API.
Default size of <canvas> is 300×150 pixels (specify width/height explicitly).


✅ 2. Basic Drawing Operations

Draw a Rectangle

ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 150, 75); // (x, y, width, height)


Draw a Line

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(200, 100);
ctx.strokeStyle = 'red';
ctx.lineWidth = 4;
ctx.stroke();

Draw a Circle

ctx.beginPath();
ctx.arc(150, 100, 50, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
ctx.fillStyle = 'green';
ctx.fill();


✅ 3. Text on Canvas

ctx.font = '30px Arial';
ctx.fillStyle = 'purple';
ctx.fillText('Hello Canvas', 50, 50);

ctx.strokeStyle = 'black';
ctx.strokeText('Outline Text', 50, 100);


✅ 4. Colors, Gradients, and Patterns

Linear Gradient

const gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'yellow');

ctx.fillStyle = gradient;
ctx.fillRect(10, 10, 200, 100);


Radial Gradient

const radGrad = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
radGrad.addColorStop(0, 'blue');
radGrad.addColorStop(1, 'white');

ctx.fillStyle = radGrad;
ctx.fillRect(0, 0, 200, 200);


✅ 5. Images in Canvas

const img = new Image();
img.src = 'image.jpg';
img.onload = function() {
  ctx.drawImage(img, 0, 0, 200, 150);
};


✅ 6. Transformations

Translate: Move origin
Rotate: Rotate canvas
Scale: Resize shapes

ctx.translate(100, 100);
ctx.rotate(Math.PI / 4); // 45 degrees
ctx.fillStyle = 'orange';
ctx.fillRect(-50, -50, 100, 100);


✅ 7. Paths and Curves

Bezier Curve

ctx.beginPath();
ctx.moveTo(50, 20);
ctx.bezierCurveTo(230, 30, 150, 80, 250, 100);
ctx.stroke();

Quadratic Curve

ctx.beginPath();
ctx.moveTo(50, 20);
ctx.quadraticCurveTo(230, 30, 250, 100);
ctx.stroke();


✅ 8. Compositing & Transparency

ctx.globalAlpha = 0.5; // Transparency
ctx.fillStyle = 'blue';
ctx.fillRect(20, 20, 100, 100);
ctx.fillStyle = 'red';
ctx.fillRect(70, 70, 100, 100);


✅ 9. Canvas State Management

ctx.save(); // Save state
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 50, 50);
ctx.restore(); // Restore state


✅ 10. Animations with requestAnimationFrame

let x = 0;
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'blue';
  ctx.fillRect(x, 50, 50, 50);
  x += 2;
  requestAnimationFrame(animate);
}
animate();


✅ 11. Pixel Manipulation
You can access individual pixels using ImageData:

const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
const data = imageData.data; // [r, g, b, a, r, g, b, a, ...]
for (let i = 0; i < data.length; i += 4) {
  data[i] = 255 - data[i];     // invert red
  data[i+1] = 255 - data[i+1]; // invert green
  data[i+2] = 255 - data[i+2]; // invert blue
}
ctx.putImageData(imageData, 0, 0);

✅ 12. Advanced Techniques:
Offscreen Canvas for performance in Web Workers
Hit Testing (detect clicks on shapes)
Canvas Filters (blur, brightness)
Game Development (sprite animation, collision detection)
WebGL for 3D rendering on canvas
*/

// ✅ Example: Basic Game Animation


const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');

let x = 50, y = 50, dx = 2, dy = 2;
function draw() {
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
  ctx1.beginPath();
  ctx1.arc(x, y, 20, 0, Math.PI * 2);
  ctx1.fillStyle = 'blue';
  ctx1.fill();
  x += dx; y += dy;
  if (x + 20 > canvas1.width || x - 20 < 0) dx = -dx;
  if (y + 20 > canvas1.height || y - 20 < 0) dy = -dy;
  requestAnimationFrame(draw);
}
draw();

/*

✅ Canvas API Cheat Sheet:

| **Category**        | **Method / Property**                            | **Description**         | **Example**                                      |       |          |
| ------------------- | ------------------------------------------------ | ----------------------- | ------------------------------------------------ | ----- | -------- |
| **Setup**           | `getContext('2d')`                               | Get 2D context          | `const ctx = canvas.getContext('2d');`           |       |          |
| **Rectangles**      | `fillRect(x,y,w,h)`                              | Draw filled rectangle   | `ctx.fillRect(10,10,100,50);`                    |       |          |
|                     | `strokeRect(x,y,w,h)`                            | Draw rectangle outline  | `ctx.strokeRect(10,10,100,50);`                  |       |          |
|                     | `clearRect(x,y,w,h)`                             | Clear area              | `ctx.clearRect(0,0,canvas.width,canvas.height);` |       |          |
| **Paths**           | `beginPath()`                                    | Start new path          | `ctx.beginPath();`                               |       |          |
|                     | `moveTo(x,y)`                                    | Move pen                | `ctx.moveTo(50,50);`                             |       |          |
|                     | `lineTo(x,y)`                                    | Draw line               | `ctx.lineTo(150,50);`                            |       |          |
|                     | `closePath()`                                    | Close path              | `ctx.closePath();`                               |       |          |
|                     | `stroke()`                                       | Outline path            | `ctx.stroke();`                                  |       |          |
|                     | `fill()`                                         | Fill shape              | `ctx.fill();`                                    |       |          |
| **Arcs & Curves**   | `arc(x,y,r,sAngle,eAngle)`                       | Draw circle/arc         | `ctx.arc(100,75,50,0,Math.PI*2);`                |       |          |
|                     | `quadraticCurveTo(cpx,cpy,x,y)`                  | Quadratic curve         |                                                  |       |          |
|                     | `bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y)`         | Bezier curve            |                                                  |       |          |
| **Colors & Styles** | `fillStyle`                                      | Fill color              | `ctx.fillStyle='blue';`                          |       |          |
|                     | `strokeStyle`                                    | Stroke color            | `ctx.strokeStyle='red';`                         |       |          |
|                     | `lineWidth`                                      | Line thickness          | `ctx.lineWidth=5;`                               |       |          |
| **Gradients**       | `createLinearGradient(x0,y0,x1,y1)`              | Linear gradient         |                                                  |       |          |
|                     | `createRadialGradient(x0,y0,r0,x1,y1,r1)`        | Radial gradient         |                                                  |       |          |
|                     | `gradient.addColorStop(offset,color)`            | Add gradient stop       |                                                  |       |          |
| **Text**            | `font`                                           | Set font                | `ctx.font='30px Arial';`                         |       |          |
|                     | `fillText(text,x,y)`                             | Draw filled text        |                                                  |       |          |
|                     | `strokeText(text,x,y)`                           | Outline text            |                                                  |       |          |
|                     | `textAlign`                                      | Align text              | \`left                                           | right | center\` |
| **Images**          | `drawImage(image,x,y)`                           | Draw image              |                                                  |       |          |
|                     | `drawImage(image,x,y,w,h)`                       | Resize image            |                                                  |       |          |
| **Transformations** | `translate(x,y)`                                 | Move origin             |                                                  |       |          |
|                     | `rotate(angle)`                                  | Rotate canvas           |                                                  |       |          |
|                     | `scale(sx,sy)`                                   | Scale canvas            |                                                  |       |          |
|                     | `save()` / `restore()`                           | Save/restore state      |                                                  |       |          |
| **Compositing**     | `globalAlpha`                                    | Transparency (0–1)      |                                                  |       |          |
|                     | `globalCompositeOperation`                       | Blend modes             |                                                  |       |          |
| **Pixel Data**      | `getImageData(x,y,w,h)`                          | Get pixels              |                                                  |       |          |
|                     | `putImageData(imageData,x,y)`                    | Put pixels              |                                                  |       |          |
|                     | `createImageData(w,h)`                           | Create blank image data |                                                  |       |          |
| **Animation**       | `requestAnimationFrame(callback)`                | Smooth animation        |                                                  |       |          |
| **Shadow**          | `shadowColor` / `shadowBlur` / `shadowOffsetX/Y` | Add shadow              |                                                  |       |          |


✅ Quick Notes:

Default canvas size = 300×150 (use width and height attributes).
Always call beginPath() before starting a new shape.
Use ctx.clearRect() to clear the canvas for animations.
Use save() and restore() for managing transformations and styles.
For animations, never use setInterval → prefer requestAnimationFrame().
*/



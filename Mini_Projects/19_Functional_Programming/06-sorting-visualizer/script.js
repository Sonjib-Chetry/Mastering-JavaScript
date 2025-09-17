function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateArray() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(generateElement());
  }
  return arr;
}

function generateContainer() {
  return document.createElement("div");
}

function fillArrContainer(container, arr) {
  container.innerHTML = "";

  arr.forEach((num) => {
    const span = document.createElement("span");
    span.textContent = num;
    container.appendChild(span);
  });

  return container;
}

function isOrdered(a, b) {
  return a <= b;
}

function swapElements(array, index) {
  let nextIndex = index + 1;
  if (!isOrdered(array[index], array[nextIndex])) {
    [array[index], array[nextIndex]] = [array[nextIndex], array[index]];
  }
  return array;
}

function highlightCurrentEls(parentEl, index) {
  const child1 = parentEl.children[index];
  const child2 = parentEl.children[index + 1];

  if (child1) {
    child1.style.border = "2px dashed red";
  }
  if (child2) {
    child2.style.border = "2px dashed red";
  }
}

const generateBtn = document.getElementById("generate-btn");
const startingArray = document.getElementById("starting-array");
const arrayContainer = document.getElementById("array-container");
const sortBtn = document.getElementById("sort-btn");

let generatedArray = [];

// Generate array button
generateBtn.addEventListener("click", () => {
  // clear all except starting array
  Array.from(arrayContainer.children).forEach((child) => {
    if (child.id !== "starting-array") {
      child.remove();
    }
  });

  generatedArray = generateArray();
  fillArrContainer(startingArray, generatedArray);
  return generatedArray;
});

// Sort button
sortBtn.addEventListener("click", () => {
  // Remove all extra steps, keep only starting-array
  Array.from(arrayContainer.children).forEach((child) => {
    if (child.id !== "starting-array") {
      child.remove();
    }
  });

  let arr = [...generatedArray]; // Copy of generated numbers

  // Step 1: Highlight first comparison in starting-array
  // fillArrContainer(startingArray, arr);
  // highlightCurrentEls(startingArray, 0);

  // Bubble Sort steps
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      // Skip the very first comparison (i=0, j=0) since starting-array already shows it
      if (i === 0 && j === 0) {
        fillArrContainer(startingArray, arr);
        highlightCurrentEls(startingArray, 0);
        arr = swapElements(arr, j); // still perform swap
        continue;
      }

      let tempArr = [...arr];
      const stepDiv = fillArrContainer(generateContainer(), tempArr);

      // Highlight compared elements in this step
      highlightCurrentEls(stepDiv, j);

      arrayContainer.appendChild(stepDiv);

      // Perform swap if needed
      arr = swapElements(arr, j);
    }
  }

  // Add final sorted array (no highlight)
  const sortedStep = fillArrContainer(generateContainer(), arr);
  arrayContainer.appendChild(sortedStep);
});

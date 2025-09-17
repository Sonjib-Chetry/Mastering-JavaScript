const generateBtn = document.getElementById("generate-btn");
const startingArray = document.getElementById("starting-array");
const arrayContainer = document.getElementById("array-container");
const sortBtn = document.getElementById("sort-btn");

// function to generate a number from 1 to 100
function generateElement() {
  return Math.ceil(Math.random() * 100);
};

// function to generate an Array of 5 numbers
function generateArray() {
  const randomArray = [];
  do {
    const newNumber = generateElement();
    if (!randomArray.includes(newNumber)){
    randomArray.push(newNumber);
    } 
  } while (randomArray.length < 5);
  return randomArray;
};
//console.log(generateArray())

// function to create a DIV
function generateContainer() {
  return document.createElement("div");
};

// function to fill element with 5 spans
function fillArrContainer(html, array) {
  let spanToAdd = "";
  for (let i = 0; i < 5; i++) {
    spanToAdd += `<span>${array[i]}</span>`
  } 
  return html.innerHTML = spanToAdd;
}
//console.log(fillArrContainer(containerCreator, generateArray()))

// function to check 2 integers order
function isOrdered(int1, int2) {
  return int1 <= int2;
};
// function that swaps 2 integers 
function swapElements(array, index) {
  let nextIndex = index + 1;
  if (!isOrdered(array[index], array[nextIndex])) {
    [array[index], array[nextIndex]] = [array[nextIndex], array[index]];
  } else {
    [array[index], array[nextIndex]] = [array[index], array[nextIndex]];
  }
  return array;
};
//console.log(swapElements(generateArray(), 0))

// function that highlight checked elements
function highlightCurrentEls(parentEl, index) {
  const child1 = parentEl.children[index];
  const child2 = parentEl.children[index + 1];

  if (child1) {
    child1.style.border = "2px dashed red";
  }
  if (child2) {
    child2.style.border = "2px dashed red";
  }
};

let generatedArray = [];

// generate array button click
generateBtn.addEventListener("click", () => {
  Array.from(arrayContainer.children).forEach(child => {
    if (child !== startingArray) {
      arrayContainer.removeChild(child);
    }
  });
  startingArray.innerHTML = "";
  generatedArray = generateArray();
  fillArrContainer(startingArray, generatedArray);
  return generatedArray;
});

// sort array button click
sortBtn.addEventListener("click", () => {

  function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
    return true;
  };

  let index = 0;
  highlightCurrentEls(startingArray, index);
  swapElements(generatedArray, index);
  index +=1;
  
  do {
    console.log(index)
    console.log(generatedArray);
    
    const containerCreator = generateContainer();
    arrayContainer.append(containerCreator);
    fillArrContainer(containerCreator, generatedArray);
    highlightCurrentEls(containerCreator, index);
    swapElements(generatedArray, index);
    index += 1;
      if (index >= generatedArray.length - 1) {
        index = 0;
      }
  } while (!isSorted(generatedArray));
  do {
    const containerCreator = generateContainer();
    arrayContainer.append(containerCreator);
    fillArrContainer(containerCreator, generatedArray);
    highlightCurrentEls(containerCreator, index);
    swapElements(generatedArray, index);
    index += 1;
     if (index >= generatedArray.length - 1) {
        break;
      }
  } while (index <= generatedArray.length - 1);

  if (isSorted(generatedArray)) {
    for (let i = 0; i < generatedArray.length -1; i++) {
    const containerCreator = generateContainer();
    arrayContainer.append(containerCreator);
    fillArrContainer(containerCreator, generatedArray);
    highlightCurrentEls(containerCreator, i);
    swapElements(generatedArray, i);
    }
  };

  const endingArray = generateContainer();
  endingArray.id = "ending-array";
  endingArray.style.border = "4px solid darkgreen";
  fillArrContainer(endingArray, generatedArray);
  arrayContainer.append(endingArray);
});

// Select all elements representing dice faces
const listOfAllDice = document.querySelectorAll(".die");
// Select all input elements for score options
const scoreInputs = document.querySelectorAll("#score-options input");
// Select all span elements next to score options
const scoreSpans = document.querySelectorAll("#score-options span");
// Get current round display element
const roundElement = document.getElementById("current-round");
// Get current rolls counter element
const rollsElement = document.getElementById("current-round-rolls");
// Get total score display element
const totalScoreElement = document.getElementById("total-score");
// Get score history list container
const scoreHistory = document.getElementById("score-history");
// Get roll dice button
const rollDiceBtn = document.getElementById("roll-dice-btn");
// Get keep score button
const keepScoreBtn = document.getElementById("keep-score-btn");
// Get rules container element
const rulesContainer = document.querySelector(".rules-container");
// Get rules toggle button
const rulesBtn = document.getElementById("rules-btn");

// Array to store current dice values
let diceValuesArr = [];
// Track if rules modal is visible
let isModalShowing = false;
// Player's total score
let score = 0;
// Current game round (1-6)
let round = 1;
// Roll counter for current round (0-3)
let rolls = 0;

// Function to generate random dice values and update UI
const rollDice = () => {
  // Reset dice values array
  diceValuesArr = [];

  // Generate 5 random dice values (1-6)
  for (let i = 0; i < 5; i++) {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    diceValuesArr.push(randomDice);
  };

  // Update each die's display with corresponding value
  listOfAllDice.forEach((dice, index) => {
    dice.textContent = diceValuesArr[index];
  });
};

// Update game stats display (rolls and round)
const updateStats = () => {
  rollsElement.textContent = rolls;
  roundElement.textContent = round;
};

// Enable and update a score option radio button
const updateRadioOption = (index, score) => {
  scoreInputs[index].disabled = false;       // Enable the radio button
  scoreInputs[index].value = score;          // Set its value
  scoreSpans[index].textContent = `, score = ${score}`;  // Update label
};

// Add selected score to total and update history
const updateScore = (selectedValue, achieved) => {
  score += parseInt(selectedValue);          // Add to total score
  totalScoreElement.textContent = score;     // Update display

  // Add score entry to history list
  scoreHistory.innerHTML += `<li>${achieved} : ${selectedValue}</li>`;
};

// Calculate duplicate-based scores (Three/ Four of a Kind)
const getHighestDuplicates = (arr) => {
  const counts = {};

  // Count occurrences of each number
  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  // Find highest duplicate count (3 or more)
  let highestCount = 0;
  for (const num of arr) {
    const count = counts[num];
    if (count >= 3 && count > highestCount) highestCount = count;
    if (count >= 4 && count > highestCount) highestCount = count;
  }

  // Calculate total of all dice
  const sum = arr.reduce((a, b) => a + b, 0);
  // Update options if duplicates found
  if (highestCount >= 4) updateRadioOption(1, sum); // Four of a Kind
  if (highestCount >= 3) updateRadioOption(0, sum); // Three of a Kind
};

// Check for full house combination (3 of one + 2 of another)
const detectFullHouse = (arr) => {
  const counts = {};
  // Count dice occurrences
  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }

  // Check for both 3-of-a-kind and pair
  const hasThree = Object.values(counts).includes(3);
  const hasTwo = Object.values(counts).includes(2);

  // Update option if full house found
  if (hasThree && hasTwo) {
    updateRadioOption(2, 25); // Fixed 25-point score
  }
};

// Detect straight sequences (small/large)
const checkForStraights = (arr) => {
  // Sort and remove duplicates
  const sorted = arr.sort((a, b) => a - b);
  const unique = [...new Set(sorted)].join("");

  // Define straight patterns
  const smallStraights = ["1234", "2345", "3456"];
  const largeStraights = ["12345", "23456"];

  // Check for large straight (includes small)
  if (largeStraights.includes(unique)) {
    updateRadioOption(3, 30); // Small straight
    updateRadioOption(4, 40); // Large straight
  } 
  // Check for small straight only
  else if (smallStraights.some(s => unique.includes(s))) {
    updateRadioOption(3, 30);
  }
};

// Reset all score options to disabled state
const resetRadioOptions = () => {
  scoreInputs.forEach((input) => {
    input.disabled = true;   // Disable selection
    input.checked = false;   // Clear selection
  });

  // Clear score labels
  scoreSpans.forEach((span) => {
    span.textContent = "";
  });
};

// Reset game to initial state
const resetGame = () => {
  // Reset game data
  diceValuesArr = [0, 0, 0, 0, 0];
  score = 0;
  round = 1;
  rolls = 0;

  // Clear dice display
  listOfAllDice.forEach((dice, index) => {
    dice.textContent = diceValuesArr[index];
  });

  // Reset UI elements
  totalScoreElement.textContent = score;
  scoreHistory.innerHTML = "";
  rollsElement.textContent = rolls;
  roundElement.textContent = round;

  // Clear score options
  resetRadioOptions();
};

// Roll dice button click handler
rollDiceBtn.addEventListener("click", () => {
  // Prevent rolling more than 3 times per round
  if (rolls === 3) {
    alert("You have made three rolls this round. Please select a score.");
  } else {
    rolls++;                  // Increment roll counter
    resetRadioOptions();      // Clear previous score options
    rollDice();               // Generate new dice values
    updateStats();            // Update roll/round display

    // Calculate and update score options:
    getHighestDuplicates(diceValuesArr);  // Three/Four of a kind
    detectFullHouse(diceValuesArr);       // Full house
    checkForStraights(diceValuesArr);     // Straights

    // Always enable zero-point option
    updateRadioOption(5, 0);  // Fallback option (No points)
  }
});

// Rules toggle button handler
rulesBtn.addEventListener("click", () => {
  isModalShowing = !isModalShowing;  // Toggle visibility state

  if (isModalShowing) {
    rulesBtn.textContent = "Hide rules";
    rulesContainer.style.display = "block";  // Show rules
  } else {
    rulesBtn.textContent = "Show rules";
    rulesContainer.style.display = "none";    // Hide rules
  }
});

// Score submission button handler
keepScoreBtn.addEventListener("click", () => {
  let selectedValue;
  let achieved;

  // Find selected score option
  for (const radioButton of scoreInputs) {
    if (radioButton.checked) {
      selectedValue = radioButton.value;
      achieved = radioButton.id;
      break;
    }
  }

  if (selectedValue) {
    // Reset round counters
    rolls = 0;
    round++;
    
    // Update UI and game state
    updateStats();
    resetRadioOptions();
    updateScore(selectedValue, achieved);
    
    // Check game end condition (6 rounds)
    if (round > 6) {
      setTimeout(() => {
        alert(`Game Over! Your total score is ${score}`);
        resetGame();  // Restart game after delay
      }, 500);
    }
  } else {
    alert("Please select an option or roll the dice");
  }
});
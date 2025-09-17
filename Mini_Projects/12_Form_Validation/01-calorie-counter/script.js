// DOM element references for main components
const calorieCounter = document.getElementById('calorie-counter');  // Main form element
const budgetNumberInput = document.getElementById('budget');        // Budget input field
const entryDropdown = document.getElementById('entry-dropdown');    // Meal type dropdown
const addEntryButton = document.getElementById('add-entry');        // Add entry button
const clearButton = document.getElementById('clear');               // Clear form button
const output = document.getElementById('output');                   // Results display area
let isError = false;  // Global flag to track input validation errors

// Sanitizes user input by removing special characters
function cleanInputString(str) {
  const regex = /[+-\s]/g;  // Matches +, -, and whitespace
  return str.replace(regex, '');
}

// Validates input for scientific notation (invalid in this context)
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;  // Matches numbers with exponential notation
  return str.match(regex);
}

// Adds new entry fields for food items and their calories
function addEntry() {
  // Find container for selected meal type
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  // Calculate new entry number based on existing inputs
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  
  // HTML template for new entry fields
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${entryNumber}-calories"
    placeholder="Calories"
  />`;
  
  // Insert new entry fields into container
  targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

// Main calculation function triggered on form submission
function calculateCalories(e) {
  e.preventDefault();  // Prevent default form submission
  isError = false;     // Reset error flag

  // Get all calorie input fields for each meal category
  const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
  const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
  const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
  const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
  const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");

  // Calculate totals for each category
  const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
  const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
  const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
  const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
  const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
  const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

  if (isError) return;  // Exit if validation errors occurred

  // Calculate final calorie balance
  const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
  const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
  const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';

  // Build results output HTML
  output.innerHTML = `
  <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
  <hr>
  <p>${budgetCalories} Calories Budgeted</p>
  <p>${consumedCalories} Calories Consumed</p>
  <p>${exerciseCalories} Calories Burned</p>
  `;

  output.classList.remove('hide');  // Show results section
}

// Processes input arrays to calculate total calories
function getCaloriesFromInputs(list) {
  let calories = 0;

  for (const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);

    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;  // Exit early on invalid input
    }
    calories += Number(currVal);  // Accumulate valid numbers
  }
  return calories;
}

// Resets form to initial state
function clearForm() {
  // Clear all input containers
  const inputContainers = Array.from(document.querySelectorAll('.input-container'));
  inputContainers.forEach(container => container.innerHTML = '');

  // Reset budget field and output
  budgetNumberInput.value = '';
  output.innerText = '';
  output.classList.add('hide');  // Hide results section
}

// Event listeners for user interactions
addEntryButton.addEventListener("click", addEntry);            // Add new food entry
calorieCounter.addEventListener("submit", calculateCalories); // Form submission
clearButton.addEventListener("click", clearForm);             // Form reset
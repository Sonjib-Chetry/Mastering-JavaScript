// Select DOM elements needed for interaction and feedback
const userInput = document.getElementById('user-input');         // Text field where user types the phone number
const checkBtn   = document.getElementById('check-btn');         // Button that triggers validation
const clearBtn   = document.getElementById('clear-btn');         // Button that clears all results
const resultsDiv = document.getElementById('results-div');       // Container that displays validation messages

// Create a single <p> element to reuse for displaying results
const pTag = document.createElement('p');                        // Paragraph element for outcome text

// Function that validates a US phone number string and updates the UI accordingly
const checkValidNumber = input => {
  // Guard clause: alert the user if the input is empty and exit early
  if (input === '') {
    alert('Please provide a phone number');                      // Notify user to enter a number
    return;                                                     // Stop further processing
  }

  // Regular expression for matching valid US telephone numbers
  // ^(1\s?)?       : optional leading 1 (country code) followed by optional space
  // (\(\d{3}\)|\d{3}) : 3‑digit area code, either plain (123) or enclosed in parentheses ("(123)")
  // ([\s\-]?)     : optional separator (space or dash)
  // \d{3}          : 3‑digit prefix
  // ([\s\-]?)     : optional separator again
  // \d{4}$         : 4‑digit line number, then end of string
  const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  pTag.className = 'results-text';                               // Apply a CSS class for styling
  // Set text color based on validity (green for valid, red for invalid)
  phoneRegex.test(input)
    ? (pTag.style.color = '#4ade80')                             // Valid → Tailwind emerald‑400
    : (pTag.style.color = '#f87171');                            // Invalid → Tailwind rose‑400

  // Build the message text: "Valid US number: ..." or "Invalid US number: ..."
  pTag.appendChild(
    document.createTextNode(
      `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
    )
  );
  // Insert the <p> element (now containing the result) into the results container
  resultsDiv.appendChild(pTag);
};

// ---------------- Event Listeners ----------------

// Validate when the "Check" button is clicked
checkBtn.addEventListener('click', () => {
  pTag.innerText = '';                                           // Clear previous result text
  checkValidNumber(userInput.value);                             // Run validation against current input
  userInput.value = '';                                          // Reset the input field
});

// Allow pressing "Enter" inside the input to trigger validation
userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {                                       // Check if the pressed key is Enter
    pTag.innerText = '';                                         // Clear previous result text
    checkValidNumber(userInput.value);                           // Validate input value
    userInput.value = '';                                        // Reset the input field
  }
});

// Clear all previous results when the "Clear" button is clicked
clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';                                   // Remove all child nodes / text inside resultsDiv
});

// Wait until the DOM is fully parsed before running any code
// This ensures all elements referenced below are present in the document

document.addEventListener('DOMContentLoaded', function() {
    // Cache reference to the text input where the user types a phone number
    const userInput = document.getElementById('user-input');

    // Cache reference to the "Check" button that triggers validation
    const checkBtn = document.getElementById('check-btn');

    // Cache reference to the "Clear" button that resets the form
    const clearBtn = document.getElementById('clear-btn');

    // Cache reference to the div used for displaying validation messages
    const resultsDiv = document.getElementById('results-div');

    // -----------------------------
    // Helper function: validatePhoneNumber
    // -----------------------------
    // Receives a string and returns true if it matches the US phone‑number pattern,
    // otherwise returns false.
    function validatePhoneNumber(str) {
        // Regular expression breakdown:
        // ^            – start of string
        // (1\s?)?      – optional leading "1" (country code) followed by optional space
        // (\(\d{3}\)|\d{3}) – either three digits inside parentheses e.g. (123) OR just 123
        // ([\s\-]?)   – optional separator: space or hyphen
        // \d{3}        – three middle digits
        // ([\s\-]?)   – optional separator again
        // \d{4}        – final four digits
        // $            – end of string
        const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
        return regex.test(str); // Use RegExp.prototype.test to return boolean result
    }

    // -----------------------------
    // Helper function: showResult
    // -----------------------------
    // Accepts a boolean (isValid). Displays a success or error message and applies
    // corresponding CSS classes/animations.
    function showResult(isValid) {
        // Remove any previous state‑related classes and animations so that we can
        // add fresh ones (necessary to restart CSS animations).
        resultsDiv.classList.remove('valid', 'invalid', 'pulse', 'shake');

        // Slight timeout to allow the removal above to take effect before we add
        // the new classes (prevents animation glitches).
        setTimeout(() => {
            if (isValid) {
                // Build and inject the success HTML message (Font Awesome icon included)
                resultsDiv.innerHTML = '<p><i class="fas fa-check-circle"></i> Valid US telephone number!</p>';
                // Apply success styling and pulse animation
                resultsDiv.classList.add('valid', 'pulse');
            } else {
                // Build and inject the error HTML message (Font Awesome icon included)
                resultsDiv.innerHTML = '<p><i class="fas fa-times-circle"></i> Invalid telephone number format</p>';
                // Apply error styling and shake animation
                resultsDiv.classList.add('invalid', 'shake');
            }
        }, 10); // 10 ms delay
    }

    // --------------------------------------------------
    // Event listener: "Check" button click
    // --------------------------------------------------
    checkBtn.addEventListener('click', function() {
        // Remove leading/trailing whitespace from user input
        const inputVal = userInput.value.trim();

        // Guard clause – if input is empty, prompt the user and shake the message box
        if (inputVal === '') {
            resultsDiv.innerHTML = '<p>Please provide a phone number</p>';
            resultsDiv.classList.add('shake');
            // Remove the shake class after 500 ms so the animation can replay later
            setTimeout(() => resultsDiv.classList.remove('shake'), 500);
            return; // Exit early; no further processing needed
        }

        // Validate the trimmed input string against the regex
        const isValid = validatePhoneNumber(inputVal);
        // Display result message and styles accordingly
        showResult(isValid);
    });

    // --------------------------------------------------
    // Event listener: "Clear" button click
    // --------------------------------------------------
    clearBtn.addEventListener('click', function() {
        userInput.value = ''; // Reset the input field
        resultsDiv.innerHTML = '<p>Enter a number to validate</p>'; // Reset helper text
        resultsDiv.classList.remove('valid', 'invalid'); // Remove any status classes
    });

    // --------------------------------------------------
    // Event listener: "Enter" key press inside the input field
    // --------------------------------------------------
    userInput.addEventListener('keypress', function(e) {
        // If the key pressed is "Enter", simulate a click on the "Check" button
        if (e.key === 'Enter') {
            checkBtn.click();
        }
    });
});

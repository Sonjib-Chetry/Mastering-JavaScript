// Get DOM elements by their IDs for the button, input field, and result display
const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Clean the string: remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    // Check if the cleaned string equals its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Main function to handle palindrome checking and UI updates
function checkPalindrome() {
    // Get input value and remove leading/trailing whitespace
    const inputValue = textInput.value.trim();
            
    // Show alert if input is empty
    if (inputValue === '') {
        alert('Please enter some text');
        return;
    }

    // Make result section visible
    result.style.display = 'block';
    
    // Update result display based on palindrome check
    if (isPalindrome(inputValue)) {
        // Success styling and message
        result.className = 'success';
        result.innerHTML = `<span class="icon">✅</span> "${inputValue}" is a palindrome!`;
    } else {
        // Error styling and message
        result.className = 'error';
        result.innerHTML = `<span class="icon">❌</span> "${inputValue}" is not a palindrome`;
    }
}

// Add click event listener to check button
checkBtn.addEventListener('click', checkPalindrome);

// Add Enter key support for text input
textInput.addEventListener('keypress', (e) => {
    // Trigger check when Enter key is pressed
    if (e.key === 'Enter') checkPalindrome();
});

// function checkPalindrome() {
//     const inputValue = textInput.value.trim();
            
//     if (inputValue === '') {
//         alert('Please input a value');
//     } else if (inputValue === 'A') {
//         result.innerHTML = `${inputValue} is a palindrome`;
//     } else if (inputValue === 'eye') {
//         result.innerHTML = `${inputValue} is a palindrome`;
//     } else if (inputValue === '_eye') {
//         result.innerHTML = `${inputValue} is a palindrome`;
//     } else if (inputValue === 'race car') {
//         result.innerHTML = `${inputValue} is a palindrome`;
//     } else if (inputValue === 'not a palindrome') {
//         result.innerHTML = `${inputValue} is not a palindrome`;
//     } else if (inputValue === 'A man, a plan, a canal. Panama') {
//         result.innerHTML = `${inputValue} is a palindrome`;
//     } else if (inputValue === 'never odd or even') {
//         result.innerHTML = `${inputValue} is a palindrome`;
//     } else if (inputValue === 'nope') {
//         result.innerHTML = `${inputValue} is not a palindrome`;
//     } else if (inputValue === 'almostomla') {
//         result.innerHTML = `${inputValue} is not a palindrome`;
//     } else if (inputValue === 'My age is 0, 0 si ega ym.') {
//         result.innerHTML = `${inputValue} is a palindrome`;
//     } else if (inputValue === '1 eye for of 1 eye.') {
//         result.innerHTML = `${inputValue} is not a palindrome`;
//     } else if (inputValue === '0_0 (: /-\ :) 0-0') {
//         result.innerHTML = `${inputValue} is a palindrome`;
//     } else if (inputValue === 'five|\_/|four') {
//         result.innerHTML = `${inputValue} is not a palindrome`;
//     } else if (isPalindrome(inputValue)) {
//         result.innerHTML = `${inputValue} is a palindrome`;
//     } else {
//         result.innerHTML = `${inputValue} is not a palindrome`;
//     }
// }

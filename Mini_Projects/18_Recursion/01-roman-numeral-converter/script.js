// Get DOM elements by their IDs
const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const resultOutput = document.getElementById("output");

// Function to convert a number to Roman numerals
const convertToRoman = (num) => {
    // Define pairs of Roman numerals and their corresponding values in descending order
    const romanNumerals = [
        ["M", 1000],  // 1000
        ["CM", 900], // 900
        ["D", 500],   // 500
        ["CD", 400],  // 400
        ["C", 100],   // 100
        ["XC", 90],   // 90
        ["L", 50],    // 50
        ["XL", 40],   // 40
        ["X", 10],    // 10
        ["IX", 9],    // 9
        ["V", 5],     // 5
        ["IV", 4],    // 4
        ["I", 1]      // 1
    ];
    
    // Use reduce to build the Roman numeral string
    return romanNumerals.reduce((acc, [roman, value]) => {
        // Append the largest possible Roman numeral(s) until remaining value is too small
        while (num >= value) {
            acc += roman; // Add Roman numeral to accumulator
            num -= value; // Subtract equivalent value from number
        }
        return acc;
    }, ""); // Start with empty string accumulator
};

// Add click event listener to convert button
convertBtn.addEventListener("click", () => {
    const inputValue = numberInput.value.trim(); // Get trimmed input value
    const number = parseInt(inputValue); // Convert to integer

    // Check for empty input
    if (inputValue === "") {
        resultOutput.textContent = "Please enter a valid number";
        resultOutput.style.display = "block"; // Show output div
        return;
    }

    // Validate input is a number between 1-3999 (Roman numeral limits)
    if (isNaN(number) || number < 1 || number > 3999) {
        resultOutput.textContent = "Please enter a valid number between 1 and 3999";
        resultOutput.style.display = "block";
        return;
    }

    // Convert valid number and display result
    resultOutput.textContent = convertToRoman(number);
    resultOutput.style.display = "block"; // Ensure output is visible
});

// Add Enter key support for number input
numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { // Check if pressed key is Enter
        convertBtn.click(); // Trigger convert button click
    }
});
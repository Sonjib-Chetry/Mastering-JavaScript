// Get DOM elements for displaying current date and date format selector
const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');

// Create Date object with current date/time and extract components
const date = new Date();
const day = date.getDate();          // Get current day (1-31)
const month = date.getMonth() + 1;   // Get current month (0-11) +1 to normalize
const year = date.getFullYear();     // Get 4-digit year
const hours = date.getHours();       // Get current hour (0-23)
const minutes = date.getMinutes();   // Get current minutes (0-59)

// Create default date format string as DD-MM-YYYY
const formattedDate = `${day}-${month}-${year}`;

// Initialize display with formatted date (note: potential typo here, formattedDate is a string)
currentDateParagraph.textContent = formattedDate;

// Add change listener to date format dropdown
dateOptionsSelectElement.addEventListener("change", () => {
    // Handle different format selections using switch statement
    switch(dateOptionsSelectElement.value) {
        case "yyyy-mm-dd":
            // Reverse date components to YYYY-MM-DD format
            currentDateParagraph.textContent = formattedDate.split('-').reverse().join('-');
            break;
        case "mm-dd-yyyy-h-mm":
            // Create format with time: MM-DD-YYYY H Hours M Minutes
            currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
            break;
        default:
            // Fallback to original DD-MM-YYYY format
            currentDateParagraph.textContent = formattedDate;
    }
});
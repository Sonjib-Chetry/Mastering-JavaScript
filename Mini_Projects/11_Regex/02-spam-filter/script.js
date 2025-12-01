// Select DOM elements for message input, result display, and check button
const messageInput = document.getElementById("message-input");
const result = document.getElementById("result-message");
const checkMessageButton = document.getElementById("check-message-btn");

// Define regular expressions to detect common spam patterns:

// Matches variations of "please help" or "assist me" (case insensitive)
const helpRegex = /please help|assist me/i;

// Matches currency amounts with optional scale (e.g., "1000 dollars", "5 million dollars")
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;

// Matches "free money" with possible character substitutions (e.g., "fr33 m0ney")
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;

// Matches "stock alert" with character substitutions and special characters (e.g., "5t0ck @lert")
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;

// Matches "dear friend" with common substitutions (e.g., "d34r fr1end")
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;

// Array of spam detection patterns
const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

// Checks if message contains any spam patterns
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

// Add click handler to check message button
checkMessageButton.addEventListener("click", () => {
    // Validate message input exists
    if (messageInput.value === "") {
        alert("Please enter a message.");
        return;
    };

    // Display spam detection result and clear input
    result.textContent = isSpam(messageInput.value)
        ? "Oh no! This looks like a spam message."
        : "This message does not seem to contain any spam.";
    messageInput.value = "";
});
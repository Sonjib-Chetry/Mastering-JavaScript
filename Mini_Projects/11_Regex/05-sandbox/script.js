
// Accessing DOM elements
const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");
const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

// Function to get the flags
function getFlags() {
  let flags = '';
  if (caseInsensitiveFlag.checked) flags += 'i';
  if (globalFlag.checked) flags += 'g';
  console.log(flags);
  return flags;
}

// Event Listener for testing the regex
testButton.addEventListener("click", () => {
  const pattern = regexPattern.value;
  const flags = getFlags();
  const originalText = stringToTest.textContent;
  let regex;

  try {
    regex = new RegExp(pattern, flags);
  } catch (err) {
    testResult.textContent = "Invalid regex pattern";
    return;
  }

  const matches = [...originalText.matchAll(regex)];

  if (matches.length === 0) {
    stringToTest.innerHTML = originalText;
    testResult.textContent = "no match";
    return;
  }

  // Collect matched strings for result display
  const matchTexts = matches.map(match => match[0]);
  testResult.textContent = matchTexts.join(", ");

  // Highlight matches in the string
  let highlighted = "";
  let lastIndex = 0;

  matches.forEach(match => {
    const matchText = match[0];
    const index = match.index;
    highlighted += originalText.slice(lastIndex, index);
    highlighted += `<span class="highlight">${matchText}</span>`;
    lastIndex = index + matchText.length;
  });

  highlighted += originalText.slice(lastIndex);
  stringToTest.innerHTML = highlighted;
});

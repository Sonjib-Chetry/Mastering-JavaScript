
// 1. Initialize poll as a new Map
const poll = new Map();

// 2. Function to add an option
function addOption(option) {
  if (!option || option.trim() === "") {
    return "Option cannot be empty.";
  }
  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }
  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
}

// 3. Function to vote
function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }
  const voters = poll.get(option);
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }
  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

// 4. Function to display results
function displayResults() {
  let results = "Poll Results:\n";
  for (const [option, voters] of poll.entries()) {
    results += `${option}: ${voters.size} votes\n`;
  }
  return results.trim(); // remove trailing newline
}

// 5. Add at least three options
console.log(addOption("Turkey"));
console.log(addOption("Morocco"));
console.log(addOption("Malaysia"));

// 6. Cast at least three votes
console.log(vote("Turkey", "traveler1"));
console.log(vote("Turkey", "traveler2"));
console.log(vote("Morocco", "traveler3"));

// Example output
console.log(displayResults());

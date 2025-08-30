// Generates random computer choice for each round
function getRandomComputerResult() {
  // Define possible game options
  const options = ["Rock", "Paper", "Scissors"];
  // Generate random index between 0-2
  const randomIndex = Math.floor(Math.random() * options.length);
  // Return random option from array
  return options[randomIndex];
}

// Determines if player wins against computer choice
function hasPlayerWonTheRound(player, computer) {
  // Check all winning combinations using logical OR
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

// Track game scores
let playerScore = 0;    // Player's total score
let computerScore = 0;  // Computer's total score

// Processes each round's gameplay logic
function getRoundResults(userOption) {
  // Get computer's random selection
  const computerResult = getRandomComputerResult();

  // Determine round outcome and update scores
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;  // Increment player score
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;  // Increment computer score
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

// DOM element references
const playerScoreSpanElement = document.getElementById("player-score");       // Player score display
const computerScoreSpanElement = document.getElementById("computer-score");   // Computer score display
const roundResultsMsg = document.getElementById("results-msg");               // Round result message
const winnerMsgElement = document.getElementById("winner-msg");               // Game winner announcement
const optionsContainer = document.querySelector(".options-container");        // Game choices container
const resetGameBtn = document.getElementById("reset-game-btn");               // Reset button

// Updates UI with game results and checks for final winner
function showResults(userOption) {
  // Update round result message
  roundResultsMsg.innerText = getRoundResults(userOption);
  // Display updated scores
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;

  // Check for game-ending condition (3 points)
  if (playerScore === 3 || computerScore === 3) {
    // Set winner announcement message
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;

    // Show reset button and hide game options
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

// Resets game state to initial values
function resetGame() {
  // Reset scores
  playerScore = 0;
  computerScore = 0;
  // Clear score displays
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  // Clear messages
  roundResultsMsg.innerText = "";
  winnerMsgElement.innerText = "";

  // Hide reset button and show game options
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
}

// Add click handler to reset button
resetGameBtn.addEventListener("click", resetGame);

// Game choice button elements
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

// Add click handlers to game choice buttons
rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});
let humanScore = 0;
let computerScore = 0;

// DOM Elements
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 1/3) {
    return "rock";
  } else if (randomNumber < 2/3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice) {
  const human = humanChoice.toLowerCase();
  const computer = getComputerChoice();

  let roundResult = `You chose: ${human}, Computer chose: ${computer}. `;

  if (human === computer) {
    roundResult += `It's a tie!`;
  } else if (
    (human === "rock" && computer === "scissors") ||
    (human === "scissors" && computer === "paper") ||
    (human === "paper" && computer === "rock")
  ) {
    humanScore++;
    roundResult += `You win! ${human} beats ${computer}.`;
  } else {
    computerScore++;
    roundResult += `Computer wins! ${computer} beats ${human}.`;
  }
  resultsDiv.textContent = roundResult;
  scoreDiv.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;

  // Check for a winner
  if (humanScore === 5 || computerScore === 5) {
    endGame();
  }
}

function endGame() {
  let finalMessage = "Game Over! ";
  if (humanScore === 5) {
    finalMessage += "You win the game!";
  } else if (computerScore === 5) {
    finalMessage += "Computer wins the game!";
  }
  resultsDiv.textContent = finalMessage;

  // Disable buttons
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

// Event Listeners
if (rockButton && paperButton && scissorsButton && resultsDiv && scoreDiv) {
    rockButton.addEventListener('click', () => playRound('rock'));
    paperButton.addEventListener('click', () => playRound('paper'));
    scissorsButton.addEventListener('click', () => playRound('scissors'));

    // Initial display
    resultsDiv.textContent = "Choose your weapon!";
    scoreDiv.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
} else {
    console.error("Error: One or more HTML elements not found. Ensure your HTML has buttons with ids 'rock', 'paper', 'scissors' and divs with ids 'results', 'score'.");
}

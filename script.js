console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  const humanChoice = prompt("Enter your choice: rock, paper, or scissors");
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase(); // Ensure computer choice is also consistently cased

  if (human === computer) {
    console.log(`It's a tie! Both chose ${human}`);
  } else if (
    (human === "rock" && computer === "scissors") ||
    (human === "scissors" && computer === "paper") ||
    (human === "paper" && computer === "rock")
  ) {
    humanScore++;
    console.log(`You win! ${human} beats ${computer}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computer} beats ${human}`);
  }
  console.log(`Current Score: Human - ${humanScore}, Computer - ${computerScore}`);
}

// Test the playRound function
// We'll get fresh choices each time for a single round test for now.
const humanPlayerChoice = getHumanChoice();
const computerPlayerChoice = getComputerChoice();

console.log("Human chose:", humanPlayerChoice);
console.log("Computer chose:", computerPlayerChoice);
playRound(humanPlayerChoice, computerPlayerChoice);

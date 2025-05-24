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

// Test the getComputerChoice function
console.log("Computer choice:", getComputerChoice());

function getHumanChoice() {
  const humanChoice = prompt("Enter your choice: rock, paper, or scissors");
  return humanChoice;
}

// Test the getHumanChoice function
console.log("Human choice:", getHumanChoice());

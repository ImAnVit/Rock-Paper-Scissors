console.log("Hello World");

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
  const humanChoice = prompt("Enter your choice: rock, paper, or scissors (Round starts now!)");
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    // Ensure humanChoice is not null (e.g. user cancelled prompt)
    if (!humanChoice) {
        console.log("Round skipped as no choice was made.");
        return; // Skip this round if humanChoice is null or empty
    }
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    console.log(`You chose: ${human}`);
    console.log(`Computer chose: ${computer}`);

    if (human === computer) {
      console.log(`It's a tie for this round! Both chose ${human}.`);
    } else if (
      (human === "rock" && computer === "scissors") ||
      (human === "scissors" && computer === "paper") ||
      (human === "paper" && computer === "rock")
    ) {
      humanScore++;
      console.log(`You win this round! ${human} beats ${computer}.`);
    } else {
      computerScore++;
      console.log(`Computer wins this round! ${computer} beats ${human}.`);
    }
    console.log(`Current Score: Human - ${humanScore}, Computer - ${computerScore}`);
  }

  console.log("Welcome to Rock Paper Scissors! Best of 5 rounds.");

  for (let i = 0; i < 5; i++) {
    console.log(`\n--- Round ${i + 1} of 5 ---`);
    const humanSelection = getHumanChoice();
    
    if (!humanSelection) { // If user cancels prompt in getHumanChoice
        console.log("You cancelled the round. Game aborted.");
        // Optionally, decide if game should end or skip round. Here, we'll abort.
        return; 
    }

    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log("\n--- Game Over ---");
  console.log(`Final Score: Human - ${humanScore}, Computer - ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("Congratulations! You are the overall winner!");
  } else if (computerScore > humanScore) {
    console.log("The Computer is the overall winner. Better luck next time!");
  } else {
    console.log("The game is an overall tie!");
  }
}

// Start the game
playGame();

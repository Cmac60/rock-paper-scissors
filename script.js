let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.33) {
        choice = "rock";
        return choice;
    } else if (choice > 0.33 && choice <= 0.66) {
        choice = "paper";
        return choice;
    } else {
        choice = "scissors";
        return choice;
    }
}

function getHumanChoice() {
    let result = prompt("rock, paper or scissors?: ");
    let cResult = result.toLowerCase();
    if (cResult === "rock") {
        return "rock";
    } else if (cResult === "paper") {
        return "paper";
    } else if (cResult === "scissors") {
        return "scissors";
    } else {
        return "please input valid choice"
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors.");
        ++humanScore;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock.");
        ++humanScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper.");
        ++humanScore;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock.");
        ++computerScore;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper.");
        ++computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors.");
        ++computerScore;
    } else {
        console.log("Draw!");
    }
    return computerChoice;
}
console.log(playRound());
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
    if (result === "rock") {
        return "rock";
    } else if (result === "paper") {
        return "paper";
    } else if (result === "scissors") {
        return "scissors";
    } else {
        return "please input valid choice"
    }
}
console.log(getHumanChoice());

console.log(getComputerChoice());
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
console.log(getComputerChoice());

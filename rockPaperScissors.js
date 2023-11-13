// Get a random integer between two values; minimum inclusive, maximum exclusive
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
// Get the computer choice
function getComputerChoice() {
    x = getRandomInt(0, 3);
    if (x === 0) {
        return "rock";
    } else if (x === 1) {
        return "paper";
    } else if (x === 2) {
        return "scissors";
    }
}
// Simulate a 5 round game
function game() {
    p = 0;
    c = 0;
    // Simulate one round
    function playRound() {
        playerSelection = prompt("Rock, paper, or scissors? ").toLowerCase();
        if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            return "Invalid input";
        }
        computerSelection = getComputerChoice();
        if (playerSelection === computerSelection) {
            console.log("Tie!");
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            console.log("You lose! Paper beats rock");
            c++;
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            console.log("You win! Rock beats scissors");
            p++;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            console.log("You win! Paper beats rock");
            p++;
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            console.log("You lose! Scissors beat paper");
            c++;
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            console.log("You lose! Rock beats scissors");
            c++;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            console.log("You win! Scissors beat paper");
            p++;
        }
    }
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (p === c) {
        alert("It's a tie!");
    } else if (p > c) {
        alert("You win the game!");
    } else if (p < c) {
        alert("You lose the game!")
    }
    return;
}

// Simulate one round
let p = 0, c = 0;
let unknown = document.querySelector("#unknown");

function playRound(playerSelection) {

    // Get a random integer between two values; minimum inclusive, maximum exclusive
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    // Get the computer choice
    function getComputerChoice() {
        x = getRandomInt(0, 3);
        unknown.style.border = "3px solid white";
        setTimeout(() => {
            unknown.style.border = "none";
        }, "400");
        if (x === 0) {
            unknown.src = "./img/rockComp.jpg";
            return "rock";
        } else if (x === 1) {
            unknown.src = "./img/paperComp.jpg";
            return "paper";
        } else if (x === 2) {
            unknown.src = "./img/scissorsComp.jpg";
            return "scissors";
        }
    }
    computerSelection = getComputerChoice();

    let playerWins = document.querySelector("#player-wins");
    let compWins = document.querySelector("#computer-wins");

    if (playerSelection === "rock" && computerSelection === "paper") {
        c++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        p++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        p++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        c++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        c++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        p++
    }
    playerWins.textContent = p;
    compWins.textContent = c;
}

// Play round by clicking a choice button
let buttons = document.querySelector("#player-img");
let endResult = document.querySelector("#endResult");
buttons.addEventListener('click', event => {
    let choice = event.target;

    playRound(choice.id);
    if (p === 5 || c === 5) {
        // After a game is over, display new game button and remove all h2 headings and images 
        document.querySelectorAll("h2").forEach(e => e.remove());
        document.querySelectorAll("img").forEach(e => e.remove());
    
        endResult.style.fontSize = "40px";
        endResult.style.textAlign = "center";
        let endDiv = document.querySelector("#endDiv");
        let newGame = document.createElement("button");
        newGame.id = "newGame";
        newGame.textContent = "New Game";
        endDiv.appendChild(newGame);
        newGame.addEventListener("click", () => {
            window.location.reload();
        })
    }

    if (p === 5) {
        endResult.textContent = "You won!";
        p = 0;
        c = 0;
    } else if (c === 5) {
        endResult.textContent = "You lost!"
        p = 0;
        c = 0;
    }
}); 



